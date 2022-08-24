<template>
  <div class="role">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item label="角色名称" prop="title">
          <el-input
            v-model="form.title"
            clearable
            placeholder="请输入角色名称"
          ></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('rolesearch')"
            type="primary"
            icon="el-icon-search"
            @click="getRolesList"
            >查询</el-button
          >
          <el-button
            v-if="checkPermission('roleadd')"
            type="primary"
            icon="el-icon-plus"
            @click="addData"
            >新增</el-button
          >
          <el-button
            v-if="checkPermission('roleedit')"
            type="primary"
            icon="el-icon-edit"
            @click="editData"
            >编辑</el-button
          >
          <el-button
            v-if="checkPermission('roledelete')"
            type="danger"
            icon="el-icon-delete"
            @click="deleteData"
            >删除</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="rolesList"
      :paging="false"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column
        type="selection"
        fixed
        width="40"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        type="index"
        label="序号"
        fixed
        width="50"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="角色"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="角色名称"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="角色描述"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200"
        :resizable="false"
        v-if="checkPermission('rolepermissions')"
      >
        <template slot-scope="scope">
          <el-link
            type="primary"
            :disabled="scope.row.id == '001' ? true : false"
            @click="setPermissions(scope.row)"
            >设置权限</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 设置权限 -->
    <set-role ref="setRloe"></set-role>
    <!-- 新增或编辑弹窗 -->
    <addOrEdit-dialog ref="addoreditData"></addOrEdit-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { getRoles, deleteRoles } from "@/api/role";
import pageTable from "@/components/pageTable.vue";
import setRole from "./components/setRole.vue";
import addOrEditDialog from "./components/addOrEditDialog.vue";
export default {
  name: "role",
  components: {
    pageTable,
    setRole,
    addOrEditDialog,
  },
  data() {
    return {
      rolesList: [], //角色列表
      tableSelectList: [],
      form: {
        title: "",
      },
    };
  },
  created() {
    this.getRolesList(); //获取角色
  },
  mounted() {},
  methods: {
    checkPermission,
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getRolesList();
    },

    async getRolesList() {
      let res = await getRoles(this.form);
      if (res.status == 200) {
        this.rolesList = res.data;
      }
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    addData() {
      this.$refs.addoreditData.show(1, {}); // 1:新增，2:编辑
    },
    editData() {
      if (this.tableSelectList.length == 1) {
        this.$refs.addoreditData.show(
          2,
          JSON.parse(JSON.stringify(this.tableSelectList[0]))
        ); // 1:新增，2:编辑
      } else if (this.tableSelectList.length == 0) {
        this.$message.warning("请选择一条数据编辑");
      } else {
        this.$message.warning("暂不支持批量编辑");
      }
    },
    deleteData() {
      if (this.tableSelectList.length == 1) {
        this.$confirm("是否删除此角色？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let res = await deleteRoles({
              id: this.tableSelectList[0].id,
            });
            if (res.status == 200) {
              this.getRolesList();
              this.$message.success(res.message);
            }
          })
          .catch(() => {});
      } else if (this.tableSelectList.length == 0) {
        this.$message.warning("请选择一条数据删除");
      } else {
        this.$message.warning("暂不支持批量删除");
      }
    },
    setPermissions(row) {
      this.$refs.setRloe.show(row);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
