<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="申请补货详情"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="设备租赁号：">{{ device_num }} </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="机器位置：">{{ address }} </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <el-table
        ref="dataTable"
        :data="userList"
        border
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{
              (page.currentPage - 1) * page.pageSize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="setid" label="药品位置" align="center">
          <template slot-scope="scope">
            <span>{{ scope.row.aisleRow }}行{{ scope.row.aisleColumn }}列</span>
          </template>
        </el-table-column>
        <el-table-column prop="productName" label="药品名称" align="center">
        </el-table-column>
        <el-table-column label="申请补货数量" align="center">
          <template slot-scope="scope">
            <span>{{
              scope.row.aisleStockMax - scope.row.aisleStockLock
            }}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { havegoods, configedit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      id: "",
      device_num: "",
      address: "",
      dialogVisible: false,
      userList: [],
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        number: this.id,
      };
      havegoods(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
      });
    },
    show(row) {
      this.dialogVisible = true;

      this.id = row.number;
      this.address = row.address;
      this.device_num = row.device_num;
      this.getUserList();
    },

    close() {
      this.dialogVisible = false;
    },
  },
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>