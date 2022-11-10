<template>
  <div class="menu">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item label="一级菜单" prop="menuId1">
          <el-select
            v-model="form.menuId1"
            clearable
            filterable
            placeholder="请选择一级菜单"
            @change="menuChange"
          >
            <el-option
              v-for="item in menuLevel1"
              :value="item.id"
              :label="item.title"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级菜单" prop="menuId2">
          <el-select
            v-model="form.menuId2"
            clearable
            filterable
            placeholder="请选择二级菜单"
          >
            <el-option
              v-for="item in showMenuLevel2"
              :value="item.id"
              :label="item.title"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('menusearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
          <el-button
            v-if="checkPermission('menuedit')"
            type="primary"
            icon="el-icon-edit"
            @click="editData()"
            >编辑</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="menuList"
      :paging="false"
      row-key="id"
      @selection-change="getSelection"
    >
      <el-table-column
        type="selection"
        fixed
        width="40"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="id"
        label="编号"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="菜单"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="菜单名称"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="path"
        label="菜单路径"
        :resizable="false"
      ></el-table-column>
    </page-table>

    <!-- 编辑弹窗 -->
    <edit-dialog ref="editData"></edit-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { getMenu, getLevelMenu } from "@/api/operation";
import pageTable from "@/components/pageTable.vue";
import editDialog from "./components/editDialog.vue";
export default {
  name: "menuPage",
  components: {
    pageTable,
    editDialog,
  },
  data() {
    return {
      menuList: [],
      tableSelectList: [],
      form: {
        menuId1: "",
        menuId2: "",
      },
      menuLevel1: [], //一级菜单
      menuLevel2: [], //二级菜单
      showMenuLevel2: [],
    };
  },
  created() {
    this.getMenu();
    this.getLevelMenu();
  },
  mounted() {},
  methods: {
    checkPermission,
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    async searchinfo() {
      let res = await getMenu(this.form);
      if (res.status == 200) {
        this.menuList = res.data;
      }
    },
    async getLevelMenu() {
      let res = await getLevelMenu();
      if (res.status == 200) {
        this.menuLevel1 = res.data.menuLevel1;
        this.menuLevel2 = res.data.menuLevel2;
        this.showMenuLevel2 = [];
      }
    },
    async getMenu() {
      let res = await getMenu(this.form);
      if (res.status == 200) {
        this.menuList = res.data;
      }
    },
    async getLevelMenu() {
      let res = await getLevelMenu();
      if (res.status == 200) {
        this.menuLevel1 = res.data.menuLevel1;
        this.menuLevel2 = res.data.menuLevel2;
        this.showMenuLevel2 = [];
      }
    },
    menuChange(val) {
      this.showMenuLevel2 = this.menuLevel2.filter((item) => item.pid == val);
    },
    editData() {
      if (this.tableSelectList.length == 1) {
        this.$refs.editData.show(
          JSON.parse(JSON.stringify(this.tableSelectList[0]))
        );
      } else if (this.tableSelectList.length == 0) {
        this.$message.warning("请选择一条数据编辑");
      } else {
        this.$message.warning("暂不支持批量编辑");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
