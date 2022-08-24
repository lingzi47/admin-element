<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="form.username"
            clearable
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色" prop="roles">
          <el-select v-model="form.roles" clearable placeholder="请选择角色">
            <el-option
              v-for="item in rolesList"
              :value="item.name"
              :label="item.title"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="getUserList"
            >查询</el-button
          >
          <el-button
            v-if="checkPermission('useradd')"
            type="primary"
            icon="el-icon-plus"
            @click="addData"
            >新增</el-button
          >
          <el-button
            v-if="checkPermission('useredit')"
            type="primary"
            icon="el-icon-edit"
            @click="editData(1)"
            >编辑</el-button
          >
          <el-button
            v-if="checkPermission('userdelete')"
            type="danger"
            icon="el-icon-delete"
            @click="deleteData(1)"
            >删除</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column
        type="selection"
        fixed
        width="40"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        type="index"
        fixed
        width="40"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="username"
        fixed
        label="账号"
        width="90"
        :resizable="false"
      ></el-table-column>
      <el-table-column label="用户姓名" fixed width="100" :resizable="false">
        <template slot-scope="scope">
          <span>{{ scope.row.name }}</span>
          <i
            :class="scope.row.sex == 0 ? 'el-icon-male' : 'el-icon-female'"
            style="margin-left: 5px; font-weight: bold"
            :style="{ color: scope.row.sex == 0 ? '#05A7F0' : '#F783BF' }"
          ></i>
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="110"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="birth"
        label="日期"
        width="100"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        show-overflow-tooltip
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="addr"
        label="住址"
        show-overflow-tooltip
        :resizable="false"
      ></el-table-column>
      <el-table-column label="角色" width="130" :resizable="false">
        <template slot-scope="scope">
          <template v-for="(item, index) in scope.row.roles">
            <el-tag :key="index" size="mini" style="margin-right: 5px">{{
              getRole(item)
            }}</el-tag>
          </template>
        </template>
      </el-table-column>
      <el-table-column label="是否启用" width="100" :resizable="false">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.state" size="mini" type="success"
            >启用</el-tag
          >
          <el-tag v-else size="mini" type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
        :resizable="false"
        v-if="checkPermission(['useredit', 'userdelete'])"
      >
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('useredit')"
            type="primary"
            @click="editData(2, scope.row)"
            >编辑</el-link
          >
          <el-link
            v-if="checkPermission('userdelete')"
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(2, scope.row)"
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
import { getUserList, deleteUser } from "@/api/user";
import { getRoles } from "@/api/role";
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
      rolesList: [], //角色列表
      userList: [], // 用户列表
      form: {
        username: "",
        roles: "",
      },
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
    this.getRolesList(); //获取角色
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {
    getRole() {
      return (role) => {
        return this.rolesList.filter((item) => item.name == role)[0].title;
      };
    },
  },
  methods: {
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
    async getRolesList() {
      let res = await getRoles();
      if (res.status == 200) {
        this.rolesList = res.data;
      }
    },
    async getUserList() {
      let res = await getUserList({
        page: this.page.page,
      });
      if (res.status == 200) {
        this.page.total = res.total;
        this.userList = res.data;
        this.$refs.dataTable.setPageInfo({
          total: res.total,
        });
      }
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
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此用户？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await deleteUser({
              id: rowData.id,
            });
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
