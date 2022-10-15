<template>
  <div class="menu">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <span style="color: red">* 注: 专区商城为三级分类</span>
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
      :data="menuList"
      :paging="false"
      row-key="id"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
    >
      <el-table-column
        prop="id"
        label="编号ID"
        width="160"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="name"
        label="分类名称"
        width="220"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="weigh"
        label="排序(大->小)"
        width="140"
        :resizable="false"
      ></el-table-column>
      <el-table-column label="显示状态" width="150" :resizable="false">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.is_show == 10"
            size="mini"
            type="success"
            @click="isShwo(20, scope.row)"
            >显示</el-button
          >
          <el-button
            v-else
            size="mini"
            type="danger"
            @click="isShwo(10, scope.row)"
            >隐藏</el-button
          >
        </template>
      </el-table-column>

      <el-table-column prop="icon" label="图标" width="240" :resizable="false">
        <template slot-scope="scope">
          <img :src="scope.row.icon" min-width="70" height="70" />
        </template>
      </el-table-column>

      <el-table-column
        prop="brief"
        label="简介"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="240"
        :resizable="false"
        v-if="checkPermission(['useradd', 'useredit', 'userdelete'])"
      >
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('useradd')"
            type="primary"
            @click="addtypeData(3, scope.row)"
            >新增</el-link
          >
          &nbsp;
          <el-link
            v-if="checkPermission('useredit')"
            type="primary"
            @click="editData(2, scope.row)"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(2, scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增或编辑弹窗 -->
    <addOrEdit-dialog ref="addoreditData"></addOrEdit-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { shoptype, shopTypedel, shopTypeisshow } from "@/api/shop";
import pageTable from "@/components/pageTable.vue";
import addOrEditDialog from "./addOrEditDialog.vue";
export default {
  name: "menuPage",
  components: {
    pageTable,
    addOrEditDialog,
  },
  data() {
    return {
      token: "",
      menuList: [],
      tableSelectList: [],
      form: {
        type: "1",
      },
    };
  },
  created() {
    this.token = sessionStorage.getItem("token");
    this.getlist();
  },
  mounted() {},
  methods: {
    checkPermission,
    async getlist() {
      let res = await shoptype({
        token: sessionStorage.getItem("token"),
        shop_type: 4,
      });
      if (res.status == 200) {
        this.menuList = res.data.data;
      }
    },
    menuChange(val) {
      this.showMenuLevel2 = this.menuLevel2.filter((item) => item.pid == val);
    },

    addData() {
      this.$refs.addoreditData.show(1, {}); // 1:新增，2:编辑，3:分类新增
    },

    addtypeData(type, row) {
      // 1:新增，2:编辑，3:分类新增
      this.$refs.addoreditData.show(3, JSON.parse(JSON.stringify(row)));
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

    //显示隐藏
    isShwo(type, row) {
      if (type == 10 || type == 20) {
        this.$confirm("是否操作此分类？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let res = await shopTypeisshow({
              id: row.id,
              is_show: type,
              shop_type: 4,
              token: sessionStorage.getItem("token"),
            });
            if (res.status == 200) {
              this.getlist();
              this.$message.success("操作成功");
            }
          })
          .catch(() => {});
      }
    },
    //删除
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此分类？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await shopTypedel({
              id: rowData.id,
              shop_type: 4,
              token: sessionStorage.getItem("token"),
            });
            if (res.status == 200) {
              this.getlist();
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
