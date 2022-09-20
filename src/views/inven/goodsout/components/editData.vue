<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="出库商品信息"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
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
        <el-table-column prop="number" label="产品名称" align="center">
        </el-table-column>
        <el-table-column prop="number" label="产品编号" align="center">
        </el-table-column>
        <el-table-column prop="number" label="成本价" align="center">
        </el-table-column>
        <el-table-column prop="number" label="入库数" align="center">
        </el-table-column>
        <el-table-column prop="number" label="成本总价" align="center">
        </el-table-column>
        <el-table-column prop="number" label="标签" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="danger" @click="deleteData(scope.row)">删除</el-link>
          </template>
        </el-table-column>
      </page-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      class="AddDialog"
      title="选择商品"
      :visible.sync="isDisable"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="closee"
    >
      <el-form label-width="auto">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
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
        <el-table-column prop="number" label="产品名称" align="center">
        </el-table-column>
        <el-table-column prop="number" label="产品编号" align="center">
        </el-table-column>
        <el-table-column prop="number" label="成本价" align="center">
        </el-table-column>
        <el-table-column prop="number" label="入库数" align="center">
        </el-table-column>
        <el-table-column prop="number" label="成本总价" align="center">
        </el-table-column>
        <el-table-column prop="number" label="标签" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="danger" @click="deleteData(scope.row)">删除</el-link>
          </template>
        </el-table-column>
      </page-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDisable = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { pharmacyadd, pharmacyedit, goodsedit } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      dialogVisible: false,
      isDisable: false,
      userList: [],
    };
  },
  created() {},
  mounted() {},
  methods: {
    add() {
      this.isDisable = true;
    },
    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        console.log(row);
        this.id = row.id;
      } else {
        this.tittle = "添加";
      }
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
      boxgoodslist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    close() {
      this.dialogVisible = false;

      this.isDisable = false;
    },
    closee() {
      this.dialogVisible = true;

      this.isDisable = false;
    },

    submitForm() {
      if (this.type == 1) {
        let params = {
          token: sessionStorage.getItem("token"),
        };
        pharmacyadd(params).then((res) => {
          if (res.data.code == 200) {
            this.$message.success("新增成功");
            this.$parent.getUserList();
            this.close();
            this.isDisable = false;
          } else {
            this.$message.error(res.data.msg);
            this.$parent.getUserList();
            this.close();
            this.isDisable = false;
          }
        });
      } else {
        let params = {
          token: sessionStorage.getItem("token"),
        };
        pharmacyedit(params).then((res) => {
          if (res.data.code == 200) {
            this.$message.success("编辑成功");
            this.$parent.getUserList();
            this.close();
            this.isDisable = false;
          } else {
            this.$message.error(res.data.msg);
            this.$parent.getUserList();
            this.close();
            this.isDisable = false;
          }
        });
      }
    },
  },
};
</script>

<style>
.yao {
  margin-left: -75px !important;
}
</style>
