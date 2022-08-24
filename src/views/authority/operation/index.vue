<template>
  <div class="operation">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item label="操作名称" prop="title">
          <el-input
            v-model="form.title"
            clearable
            placeholder="请输入操作名称"
          ></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('operationsearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
          <el-button
            v-if="checkPermission('operationedit')"
            type="primary"
            icon="el-icon-edit"
            @click="operationData()"
            >编辑</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="operationList"
      :paging="false"
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
        label="序号"
        fixed
        width="50"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="操作"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="title"
        label="操作名称"
        width="200"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="describe"
        label="角色描述"
        :resizable="false"
      ></el-table-column>
    </page-table>

    <!-- 编辑弹窗 -->
    <edit-dialog ref="operationData"></edit-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { getOperation } from "@/api/operation";
import pageTable from "@/components/pageTable.vue";
import editDialog from "./components/editDialog.vue";
export default {
  name: "operation",
  components: {
    pageTable,
    editDialog,
  },
  data() {
    return {
      operationList: [],
      tableSelectList: [],
      form: {
        title: "",
      },
    };
  },
  created() {
    this.getOperation();
  },
  mounted() {},
  methods: {
    checkPermission,
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    async searchinfo() {
      let res = await getOperation(this.form);
      if (res.status == 200) {
        this.operationList = res.data;
      }
    },
    operationData() {
      if (this.tableSelectList.length == 1) {
        this.$refs.operationData.show(
          JSON.parse(JSON.stringify(this.tableSelectList[0]))
        );
      } else if (this.tableSelectList.length == 0) {
        this.$message.warning("请选择一条数据编辑");
      } else {
        this.$message.warning("暂不支持批量编辑");
      }
    },
    async getOperation() {
      let res = await getOperation(this.form);
      if (res.status == 200) {
        this.operationList = res.data;
      }
    },
    operationData() {
      if (this.tableSelectList.length == 1) {
        this.$refs.operationData.show(
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
