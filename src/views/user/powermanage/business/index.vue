<template>
  <div class="role">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('roleadd')"
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
        prop="role_name"
        label="角色"
        :resizable="false"
        align="center"
      ></el-table-column>

      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link type="primary" @click="setPermissions(scope.row)"
            >设置权限</el-link
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
    </page-table>
    <!-- 设置权限 -->
    <set-role ref="setRloe"></set-role>
    <!-- 新增或编辑弹窗 -->
    <addOrEdit-dialog ref="addoreditData"></addOrEdit-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";

import { bguserGroup, delGroup } from "@/request/api";
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
      userList: [], //角色列表
      tableSelectList: [],
      page: {
        //分页信息
        currentPage: "1", //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
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
    getRolesList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        u_type: 3,
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      bguserGroup(params).then((res) => {
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    addData() {
      this.$refs.addoreditData.show(1, {}); // 1:新增，2:编辑
    },
    editData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        let rowData = type == 1 ? this.tableSelectList[0] : row;
        // 1:新增，2:编辑
        this.$refs.addoreditData.show(2, JSON.parse(JSON.stringify(rowData)));
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
          delGroup(params, id).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("删除成功");
              this.getRolesList();
            } else {
              this.$message.error(res.data.msg);
              this.getRolesList();
            }
          });
        })
        .catch(() => {});
    },
    setPermissions(row) {
      this.$refs.setRloe.show(row);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
