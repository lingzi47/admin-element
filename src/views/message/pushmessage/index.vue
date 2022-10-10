<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item style="float: right">
          <el-button type="primary" @click="editData">添加</el-button>
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
      <el-table-column label="内容" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">{{
            scope.row.content | ellipsis
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="推送对象" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.user_type == 1">C级推广员</el-link>
          <el-link v-if="scope.row.user_type == 2">C级,B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 3">C级,B级,A级推广员</el-link>
          <el-link v-if="scope.row.user_type == 4">B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 5">C级,B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 6">A级推广员</el-link>
          <el-link v-if="scope.row.user_type == 7">普通用户</el-link>
          <el-link v-if="scope.row.user_type == 8">全部用户</el-link>
        </template>
      </el-table-column>

      <el-table-column prop="sta" label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link
            type="warning"
            v-if="scope.row.sta == 10"
            style="margin-left: 10px"
            >待推送</el-link
          >
          <el-link
            type="success"
            v-if="scope.row.sta == 20"
            style="margin-left: 10px"
            >已推送</el-link
          >
          <el-link
            type="danger"
            v-if="scope.row.sta == 30"
            style="margin-left: 10px"
            >已取消</el-link
          >
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
    </page-table>
    <el-dialog
      title="内容"
      :visible.sync="dialogVisible"
      width="600px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="" prop="">
              {{ details }}
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { newsindex } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";

export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      dialogVisible: false,
      details: "",
      userList: [], // 列表
      time: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 5) {
        return value.slice(0, 5) + "...";
      }
      return value;
    },
  },

  watch: {},
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    editData() {
      this.$refs.editData.show();
    },
    handleClick(row) {
      this.details = row.content;
      this.dialogVisible = true;
    },

    close() {
      this.dialogVisible = false;
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
      newsindex(params).then((res) => {
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
