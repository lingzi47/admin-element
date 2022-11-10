<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('useradd')"
            type="primary"
            icon="el-icon-plus"
            @click="addData"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table
      ref="dataTable"
      border
      :data="userList"
      row-key="id"
      :tree-props="{ children: 'children' }"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column
        prop="m_name"
        fixed
        label="权限名称"
        :resizable="false"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="route"
        fixed
        label="路由地址"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column
        prop="type"
        label="类型"
        :resizable="false"
        align="center"
      >
        <template slot-scope="scope">
          <el-tag v-if="scope.row.type == 1">菜单</el-tag>
          <el-tag type="success" v-if="scope.row.type == 2">按钮</el-tag>
        </template></el-table-column
      >

      <el-table-column
        prop="sort"
        label="排序"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column label="操作" :resizable="false" align="center">
        <template slot-scope="scope">
          <el-link type="primary" @click="add2Data(3, scope.row)"
            >添加子权限</el-link
          >
          <el-link
            type="warning"
            style="margin-left: 10px"
            @click="editData(2, scope.row)"
            >修改</el-link
          >

          <el-link
            type="danger"
            style="margin-left: 20px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增编辑弹窗 -->
    <add-dialog ref="addData" />
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { menuList, delMenu } from "@/request/api";

import pageTable from "@/components/pageTable.vue";
import addDialog from "./components/addOrEditDialog.vue";
export default {
  name: "user",
  components: {
    pageTable,
    addDialog,
  },
  data() {
    return {
      page: {
        //分页信息
        currentPage: "1", //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      token: "",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      form: {
        username: "",
        tel: "",
        roles: "",
      },
    };
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    //获取用户列表
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      menuList(params).then((res) => {
        this.page.total = res.data.total;
        this.page.currentPage = res.data.current_page;
        this.userList = res.data.data;
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    add2Data(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 3) {
        let rowData = type == 1 ? this.tableSelectList[0] : row;
        // 1:新增，2:编辑
        this.$refs.addData.show(3, JSON.parse(JSON.stringify(rowData)));
      }
    },
    editData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        let rowData = type == 1 ? this.tableSelectList[0] : row;
        // 1:新增，2:编辑
        this.$refs.addData.show(2, JSON.parse(JSON.stringify(rowData)));
      } else {
        this.$message.warning("请选择一条数据编辑");
      }
    },
    deleteData(row) {
      this.$confirm("是否删除此用户？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;

          let params = {
            token: sessionStorage.getItem("token"),
          };
          delMenu(params, id).then((res) => {
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
  },
};
</script>

<style lang="scss" scoped>
</style>
