<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="审核状态" prop="member">
          <el-select
            v-model="es_status"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已通过" value="1"></el-option>
            <el-option label="未通过" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="拨款方式" prop="member">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>

            <el-option label="线上" value="1"></el-option>
            <el-option label="线下" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-button type="primary" @click="open()" style="margin-bottom: 10px"
      >导出</el-button
    >
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
      <el-table-column prop="web_uid" label="提现用户名称" align="center">
      </el-table-column>
      <el-table-column prop="bank_tel" label="联系方式" align="center">
      </el-table-column>
      <el-table-column prop="type" label="收款方式" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.type == 1">线上</span>
          <span v-if="scope.row.type == 2">线下</span>
        </template>
      </el-table-column>
      <el-table-column prop="bank_id" label="银行卡号" align="center">
      </el-table-column>
      <el-table-column prop="bank_name" label="持卡人姓名" align="center">
      </el-table-column>
      <el-table-column prop="money" label="提现金额" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="提现发起时间" align="center">
      </el-table-column>

      <el-table-column label="处理状态" align="center">
        <template slot-scope="scope">
          <el-tag type="warning" effect="dark" v-if="scope.row.ex_status == 0"
            >待审核
          </el-tag>
          <el-tag type="success" effect="dark" v-if="scope.row.ex_status == 1"
            >已通过</el-tag
          >
          <el-tag type="danger" effect="dark" v-if="scope.row.ex_status == 2"
            >已拒绝</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="驳回理由" prop="es_remark" align="center">
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button
            @click="set(scope.row)"
            type="danger"
            size="small"
            v-if="scope.row.es_status == 0"
            >处理</el-button
          >
          <el-button
            @click="set1(scope.row)"
            size="small"
            type="info"
            v-if="scope.row.es_status == 0"
            >拒绝</el-button
          >
          <el-button type="success" size="small" v-if="scope.row.ex_status == 1"
            >已完成</el-button
          >
          <el-button type="warning" size="small" v-if="scope.row.ex_status == 2"
            >已拒绝</el-button
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
        <el-button @click="refuse">拒绝</el-button>
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
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="拒绝理由" prop="member">
              <el-input
                style="width: 180px"
                v-model="ex_remark"
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
import { businesslist, businessadit, userStart, userBlm } from "@/request/api";
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
      es_status: "",
      form: {
        time: "",
      },
      username: "",
      types: "",
      ex_remark: "",
      type: "",
      dialogVisible: false,
      dialogVisible1: false,
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
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        es_status: 1,
        page: this.page.currentPage,
        limit: this.page.pageSize,
        id: this.id,
        type: this.types,
      };
      businessadit(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        } else {
          this.$message(res.data.msg);
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },
    submitForm1() {
      let params = {
        token: sessionStorage.getItem("token"),
        es_status: 2,
        id: this.id,
        type: this.types,
        ex_remark: this.ex_remark,
      };
      businessadit(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        } else {
          this.$message(res.data.msg);
          this.dialogVisible = false;
          this.getUserList();
        }
      });
      this.dialogVisible = false;
      this.dialogVisible1 = false;
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
      this.types = row.type;
    },
    set(row) {
      this.dialogVisible = true;

      this.id = row.id;
      this.types = row.type;
    },

    open() {},
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
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: this.type,
        es_status: this.es_status,
        s_time: this.form.time[0],
        e_time: this.form.time[1],
      };
      businesslist(params).then((res) => {
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: this.type,
        es_status: this.es_status,
        s_time: this.form.time[0],
        e_time: this.form.time[1],
      };
      businesslist(params).then((res) => {
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
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
