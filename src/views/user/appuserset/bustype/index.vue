<template>
  <div class="user">
    <!-- <el-button type="primary" @click="go()">返回上一级</el-button> -->
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            @click="addData"
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center" fixed :resizable="false">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        align="center"
        :resizable="false"
      ></el-table-column>

      <el-table-column
        prop="place"
        label="区域"
        align="center"
        :resizable="false"
      ></el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('useredit')"
            type="danger"
            style="margin-left: 10px"
            @click="editData(2, scope.row)"
            >修改</el-link
          >
          <el-link
            v-if="checkPermission('useredit')"
            type="primary"
            style="margin-left: 10px"
            @click="showtype(scope.row)"
            >查看</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <show-data ref="showData" />
  </div>
</template>

<script>
import { placeindex } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import { getUserList, deleteUser } from "@/api/user";
import { getRoles } from "@/api/role";
import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
import showData from "./components/showData.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    showData,
  },
  data() {
    return {
      baseUrl: "http://y6.wjw.cool/",

      userList: [], // 用户列表

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  created() {
    this.getUserList();
  },

  mounted() {},

  methods: {
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
      placeindex(params).then((res) => {
        this.page.total = res.data.count;
        // this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.editData.show(1, {});
    },
    editData(type, row) {
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(row)));
    },
    showtype(row) {
      this.$refs.showData.show(JSON.parse(JSON.stringify(row)));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
