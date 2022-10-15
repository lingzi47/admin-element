<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="提现人id" prop="member">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入提现人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="持卡人手机号" prop="member">
          <el-input
            style="width: 170px"
            v-model="tel"
            clearable
            placeholder="请输入持卡人手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="提款人身份" prop="member">
          <el-select
            v-model="position"
            placeholder="请选择"
            style="width: 140px"
          >
            <el-option label="全部" value=""></el-option>

            <el-option label="租赁商" value="1"></el-option>
            <el-option label="渠道商" value="2"></el-option>
            <el-option label="合作渠道租赁商" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理状态" prop="member">
          <el-select
            v-model="ex_status"
            placeholder="请选择"
            style="width: 140px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="1"></el-option>
            <el-option label="已通过" value="2"></el-option>
            <el-option label="未通过" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" @click="searchinfo">搜索</el-button>
          <el-button @click="dao">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <el-button type="primary" @click="open()" style="margin-bottom: 10px"
      >导出</el-button
    > -->
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="uid" label="提现人id" align="center">
      </el-table-column>
      <el-table-column prop="username" label="用户名" align="center">
        <template slot-scope="scope">
          <el-link @click="upuser(scope.row)" v-if="scope.row.is_red == 0">{{
            scope.row.username
          }}</el-link>
          <el-link type="danger" @click="upuser(scope.row)" v-else>{{
            scope.row.username
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="position" label="用户身份" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.position == 1">租赁商</el-link>
          <el-link v-if="scope.row.position == 2">渠道商</el-link>
          <el-link v-if="scope.row.position == 3">合作渠道租赁商</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="tel" label="手机号" align="center">
      </el-table-column>

      <el-table-column prop="bank" label="银行卡" align="center">
      </el-table-column>
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="price" label="提现金额" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="提现发起时间" align="center">
      </el-table-column>

      <el-table-column label="处理状态" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.ex_status == 2" type="success"
            >已成功</el-link
          >
          <el-link type="warning" v-if="scope.row.ex_status == 3"
            >已拒绝</el-link
          >
          <el-link type="danger" v-if="scope.row.ex_status == 1"
            >待审核</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="驳回理由" prop="remark" align="center">
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-link
            @click="set(scope.row)"
            type="primary"
            style="margin-left: 15px"
            v-if="scope.row.ex_status == 1"
            >处理</el-link
          >
          <el-link
            v-if="scope.row.ex_status == 2"
            style="margin-left: 15px"
            type="success"
            >已完成</el-link
          >
          <el-link
            type="warning"
            @click="set1(scope.row)"
            size="small"
            style="margin-left: 15px"
            v-if="scope.row.ex_status == 1"
            >拒绝</el-link
          >
          <el-link
            type="danger"
            size="small"
            style="margin-left: 15px"
            v-if="scope.row.ex_status == 3"
            >已拒绝</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="审核"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="是否允许该条信息审核通过" prop="role_name">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">取消</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="拒绝理由"
      :visible.sync="dialogVisible1"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        label-width="auto"
        :rules="rules"
        ref="ruleForm"
        :model="ruleForm"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="拒绝理由" prop="remark">
              <el-input
                style="width: 180px"
                v-model="ruleForm.remark"
                clearable
                placeholder="请输入拒绝理由"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse1">取消</el-button>
        <el-button type="primary" @click="submitForm1">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { boxWithlist, boxWithlistex, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],
      ruleForm: { remark: "" },

      uid: "",
      ex_status: "",
      position: "",
      tel: "",
      dialogVisible: false,
      dialogVisible1: false,
      time: "",
      rules: {
        remark: [
          { required: true, message: "请输入拒绝理由", trigger: "blur" },
        ],
      },
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      this.token = sessionStorage.getItem("token");
      if (this.time[1] == undefined) {
        window.location.href =
          "https://y4.wjw.cool/adminApi/box/boxWith/listexport" +
          "?token=" +
          this.token +
          "&uid=" +
          this.uid +
          "&ex_status=" +
          this.ex_status +
          "&tel=" +
          this.tel +
          "&position=" +
          this.position;
      } else {
        console.log(
          "https://y4.wjw.cool/adminApi/box/boxWith/listexport" +
            "?token=" +
            this.token +
            "&uid=" +
            this.uid +
            "&ex_status=" +
            this.ex_status +
            "&tel=" +
            this.tel +
            "&position=" +
            this.position +
            "&s_time=" +
            this.time[0] +
            "&e_time=" +
            this.time[1]
        );
        window.location.href =
          "https://y4.wjw.cool/adminApi/box/boxWith/listexport" +
          "?token=" +
          this.token +
          "&uid=" +
          this.uid +
          "&ex_status=" +
          this.ex_status +
          "&tel=" +
          this.tel +
          "&position=" +
          this.position +
          "&s_time=" +
          this.time[0] +
          "&e_time=" +
          this.time[1];
      }
    },
    submitForm() {
      //console.log("成功");
      let params = {
        token: sessionStorage.getItem("token"),
        ex_status: 2,
        id: this.id,
      };
      boxWithlistex(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        } else {
          this.$message.error(res.data.msg);
          // this.remark = res.data.msg;
          this.dialogVisible = false;
          this.getUserList();
        }
      });
      this.dialogVisible = false;
      this.getUserList();
    },
    upuser(row) {
      console.log(row);
      // console.log(row.uid);
      this.$router.push({
        path: "/userlit",
        query: {
          id: row.uid,
        },
      });
    },
    submitForm1() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            ex_status: 3,
            id: this.id,
            remark: this.ruleForm.remark,
          };
          boxWithlistex(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("操作成功");
              this.getUserList();
            }
          });
          this.dialogVisible = false;
          this.getUserList();
          this.dialogVisible1 = false;
        } else {
          return false;
        }
      });
    },

    refuse() {
      this.dialogVisible = false;
    },
    refuse1() {
      this.dialogVisible = false;
      this.dialogVisible1 = false;
    },
    close() {
      this.dialogVisible = false;
    },
    set1(row) {
      this.dialogVisible1 = true;
      this.id = row.id;
    },
    set(row) {
      this.dialogVisible = true;
      this.id = row.id;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        uid: this.uid,
        ex_status: this.ex_status,
        tel: this.tel,
        position: this.position,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      boxWithlist(params).then((res) => {
        //console.log(res.data.data.data);

        this.page.total = res.data.data.total;
        //console.log(res.data.data.total);
        //console.log("总条数", this.page.total);
        this.page.currentPage = res.data.data.current_page;
        //console.log(res.data.data.current_page);
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        uid: this.uid,
        ex_status: this.ex_status,
        tel: this.tel,
        position: this.position,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      boxWithlist(params).then((res) => {
        //console.log(res.data.data.data);

        this.page.total = res.data.data.total;
        //console.log(res.data.data.total);
        //console.log("总条数", this.page.total);
        this.page.currentPage = res.data.data.current_page;
        //console.log(res.data.data.current_page);
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
