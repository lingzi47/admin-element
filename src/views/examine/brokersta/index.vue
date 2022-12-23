<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="租赁商id" prop="uid">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入租赁人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="推荐人租赁号" prop="pid">
          <el-input
            style="width: 180px"
            v-model="pid"
            clearable
            placeholder="请输入推荐人租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item label="购买服务" prop="username">
          <el-select
            v-model="box_type"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="终身" value="3"></el-option>
            <el-option label="三年" value="1"></el-option>
            <el-option label="五年" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <!-- <el-button type="primary">导出</el-button> -->
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="租赁号" align="center">
      </el-table-column>
      <el-table-column prop="uid" label="租赁商id" align="center">
      </el-table-column>
      <el-table-column label="推荐人租赁号" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.pid == null">无</span>
          <span v-else>{{ scope.row.pid }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="use_pid" label="推荐人" align="center">
      </el-table-column>
      <el-table-column label="是否真实购买" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.device_type == 10">是</span>
          <span v-if="scope.row.device_type == 20">否</span>
        </template>
      </el-table-column>
      <el-table-column label="购买药柜租债服务" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.box_type == 1">三年</span>
          <span v-if="scope.row.box_type == 2">五年</span>
          <span v-if="scope.row.box_type == 3">终身</span>
        </template>
      </el-table-column>
      <el-table-column label="购买区域" align="center" :resizable="false">
        <template slot-scope="scope">
          <el-link v-if="scope.row.box_team == 1">全国</el-link>
          <el-link v-if="scope.row.box_team == 2">大连</el-link>
          <el-link v-if="scope.row.box_team == 3">大庆</el-link>
          <el-link v-if="scope.row.box_team == 4">北京</el-link>
          <el-link v-if="scope.row.box_team == 5">本溪</el-link>
          <el-link type="danger" v-if="scope.row.box_team == null"
            >暂无</el-link
          >
        </template></el-table-column
      >
      <el-table-column prop="remark" label="备注" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.ex_status == 2"
            >已通过</el-link
          >
          <el-link type="danger" v-if="scope.row.ex_status == 3"
            >未通过</el-link
          >
          <el-link type="primary" v-if="scope.row.ex_status == 1"
            >待审核</el-link
          >
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.ex_status == 1"
            @click="set(scope.row)"
            style="margin-left: 10px"
            >处理</el-link
          >
          <el-link
            type="success"
            v-if="scope.row.ex_status == 2"
            style="margin-left: 10px"
            >已通过</el-link
          >
          <el-link
            type="danger"
            v-if="scope.row.ex_status == 3"
            style="margin-left: 10px"
            >未通过</el-link
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
  </div>
</template>

<script>
import { doctorlist, doctorlistex } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible: false,

      uid: "",
      tel: "",
      pid: "",
      box_type: "",
      ex_status: "1",
      buy_time: "",
      userList: [], // 列表

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    buy_time(newVal) {
      if (newVal == null) {
        this.buy_time = [];
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
        status: 2,
        id: this.id,
      };
      doctorlistex(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    refuse() {
      let params = {
        token: sessionStorage.getItem("token"),
        status: 3,
        id: this.id,
      };
      doctorlistex(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    close() {
      this.dialogVisible = false;
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
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        pid: this.pid,
        box_type: this.box_type,
        uid: this.uid,
        use_pid: this.use_pid,

        ex_status: this.ex_status,
        time1: this.buy_time[0],
        time2: this.buy_time[1],
      };
      doctorlist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getlist() {
      // page改变
      let params = {
        page: this.page + 1,
        limit: 10,
      };
      getlist(params).then((res) => {
        this.page = this.page + 1;
        //合并数组
      });
    },
    getlist() {
      //limit 改变
      let params = {
        page: this.page,
        limit: this.limit + 10,
      };
      getlist(params).then((res) => {
        this.limit = this.limit + 10;
        //不用合并数组
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),

        pid: this.pid,
        box_type: this.box_type,
        uid: this.uid,
        use_pid: this.use_pid,

        ex_status: this.ex_status,
        time1: this.buy_time[0],
        time2: this.buy_time[1],
      };
      doctorlist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
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
