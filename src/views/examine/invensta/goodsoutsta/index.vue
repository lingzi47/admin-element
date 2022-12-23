<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="单号" prop="name">
          <el-input
            style="width: 310px"
            v-model="order_no"
            clearable
            placeholder="请输入单号"
          ></el-input>
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
      <el-table-column prop="number_no" label="单号" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="入库备注" align="center">
      </el-table-column>
      <el-table-column prop="number" label="数量" align="center">
      </el-table-column>
      <el-table-column prop="sum_price" label="总成本" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="提交时间" align="center">
      </el-table-column>

      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="showtable(scope.row)"
            >查看</el-link
          >
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="set(scope.row)"
            v-if="scope.row.status == 1"
            >处理</el-link
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
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { exList, exStatus } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
import upSet from "./components/upSet.vue";
export default {
  components: {
    pageTable,
    upSet,
  },
  data() {
    return {
      userList: [], // 用户列表
      order_no: "",
      ex_remark: "",
      dialogVisible: false,
      dialogVisible1: false,
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
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
        status: 2,
        id: this.id,
        type: 2,
      };
      exStatus(params).then((res) => {
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

    showtable(row) {
      let rowData = row;
      this.$refs.upSet.show(JSON.parse(JSON.stringify(rowData)));
    },
    submitForm1() {
      let params = {
        token: sessionStorage.getItem("token"),
        status: 3,
        id: this.id,
        remark_sta: this.ex_remark,
        type: 2,
      };
      exStatus(params).then((res) => {
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
      this.dialogVisible1 = true;
    },
    refuse1() {
      this.dialogVisible = false;
      this.dialogVisible1 = false;
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
        order_no: this.order_no,
        type: 2,
      };
      exList(params).then((res) => {
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
        type: 2,
        order_no: this.order_no,
      };
      exList(params).then((res) => {
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
