<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="名称" prop="username">
          <el-input
            v-model="form.username"
            clearable
            placeholder="请输入名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input
            v-model="form.tel"
            clearable
            placeholder="请输入手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="所属角色组" prop="roles">
          <el-select v-model="form.roles" clearable placeholder="请选择角色">
            <el-option
              v-for="item in rolesList"
              :value="item.id"
              :label="item.role_name"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
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
        fixed
        label="用户id"
        :resizable="false"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="nickname"
        fixed
        label="管理员名称"
        :resizable="false"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="uname"
        fixed
        label="管理员账号"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column
        prop="tel"
        label="手机号"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column
        prop="role_name"
        label="所属角色组"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column
        label="操作"
        :resizable="false"
        align="center"
        v-if="checkPermission(['useredit', 'userdelete'])"
      >
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('useredit')"
            type="primary"
            @click="editData(2, scope.row)"
            >修改</el-link
          >
          <el-link
            v-if="checkPermission('userdelete')"
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <add-dialog ref="addData" />
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { bguserList, userRoles, delUser } from "@/request/api";

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
      token: "",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      form: {
        username: "",
        tel: "",
        roles: "",
      },
      page: {
        //分页信息
        currentPage: "1", //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  created() {
    this.getRolesList(); //获取角色
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
    //获取角色组
    getRolesList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        u_type: 2,
        token: sessionStorage.getItem("token"),
      };
      userRoles(params).then((res) => {
        //console.log(res.data.data);
        this.rolesList = res.data.data;
      });
    },
    searchinfo() {
      //console.log(sessionStorage);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        u_type: 2,
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        nickname: this.form.username,
        tel: this.form.tel,
        role: this.form.roles,
      };
      bguserList(params).then((res) => {
        this.page.total = res.data.data.total;

        this.page.currentPage = res.data.data.current_page;

        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    //获取用户列表
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        u_type: 2,
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        nickname: this.form.username,
        tel: this.form.tel,
        role: this.form.roles,
      };
      bguserList(params).then((res) => {
        this.page.total = res.data.data.total;

        this.page.currentPage = res.data.data.current_page;

        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
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
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
          };
          delUser(params, id).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
              this.getUserList();
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
