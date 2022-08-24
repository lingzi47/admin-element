<template>
  <div class="user">
    页面暂无
    <!-- <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{ (page - 1) * page.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="banner位置" align="center">
      </el-table-column>
      <el-table-column prop="people" label="banner图片" align="center">
      </el-table-column>
      <el-table-column prop="people" label="排序" align="center">
      </el-table-column>
      <el-table-column prop="people" label="跳转界面" align="center">
      </el-table-column>

      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="set(scope.row)" type="text" size="small"
            >处理</el-button
          >
        </template>
      </el-table-column>
    </page-table> -->
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
import { appuserList, userZisu, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表
      dialogVisible: false,
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
      //console.log("成功");
      this.dialogVisible = false;
    },

    refuse() {
      //console.log("拒绝");
      this.dialogVisible = false;
    },
    close() {
      this.dialogVisible = false;
    },

    set(row) {
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
      };
      appuserList(params).then((res) => {
        //console.log(res.data.data.member_count);
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
