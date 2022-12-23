<template>
  <div class="user">
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
      <el-table-column prop="release_peo" label="释放人" align="center">
      </el-table-column>
      <el-table-column label="封面图" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.banner" alt="" srcset="" width="60" />
        </template>
      </el-table-column>
      <el-table-column prop="people" label="参与人数" align="center">
      </el-table-column>
      <el-table-column prop="money" label="钻石数" align="center">
      </el-table-column>
      <el-table-column prop="range_num" label="浮动范围" align="center">
      </el-table-column>
      <el-table-column prop="due_time" label="截止时间" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="释放时间" align="center">
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="set(scope.row)" type="text" size="small"
            >处理</el-button
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
import { zlsreleaselist, zlsreleExamine } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible: false,
      userList: [], // 用户列表
      id: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {},
  created() {
    this.getUserList();
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      let params = {
        sta: 20,
        id: this.id,
        token: sessionStorage.getItem("token"),
      };
      zlsreleExamine(params).then((res) => {
        if (res.status == 200) {
          this.getUserList();
          this.$message.success("操作成功");
          this.dialogVisible = false;
        }
      });
    },

    refuse() {
      let params = {
        sta: 30,
        id: this.id,
        token: sessionStorage.getItem("token"),
      };
      zlsreleExamine(params).then((res) => {
        if (res.status == 200) {
          this.getUserList();
          this.$message.success("操作成功");
          this.dialogVisible = false;
        }
      });
    },
    close() {
      this.dialogVisible = false;
    },

    set(row) {
      this.id = row.id;
      this.dialogVisible = true;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        sta: 10,
      };
      zlsreleaselist(params).then((res) => {
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
