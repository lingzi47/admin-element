<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">添加</el-button>
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

      <el-table-column prop="uid" label="用户ID" align="center">
      </el-table-column>
      <el-table-column prop="username" label="用户名称" align="center">
      </el-table-column>
      <el-table-column label="限购套餐" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.type == 1" @click="show(2, scope.row)"
            >套餐一</el-link
          >
          <el-link v-if="scope.row.type == 2" @click="show(2, scope.row)"
            >套餐二</el-link
          >
          <el-link v-if="scope.row.type == 3" @click="show(2, scope.row)"
            >套餐三</el-link
          >
        </template>
      </el-table-column>

      <el-table-column label="购买状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.is_buy == 20">已购买</el-link>
          <el-link type="warning" v-if="scope.row.is_buy == 10">未购买</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { goodschooseindex, goodschoosedel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

import editData from "./components/editData.vue";

export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      userList: [], // 列表
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
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    add() {
      this.$refs.editData.show(1, {});
    },
    show(row, type) {
      this.$refs.editData.show(2, {});
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;

          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          goodschoosedel(params).then((res) => {
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {});
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
      goodschooseindex(params).then((res) => {
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
