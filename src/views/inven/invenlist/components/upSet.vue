<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="库存"
      :visible.sync="dialogVisible"
      width="1200px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-table
        ref="dataTable"
        border
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

        <el-table-column prop="productName" label="商品名称" align="center">
        </el-table-column>
        <el-table-column label="商品图片" width="160" align="center"
          ><template slot-scope="scope">
            <img :src="scope.row.imagesPath" min-width="70" height="70" />
          </template>
        </el-table-column>
        <el-table-column
          prop="productSalePrice"
          label="商品价格"
          align="center"
        >
        </el-table-column>
        <el-table-column prop="aisleCode" label="货道号" align="center">
        </el-table-column>
        <el-table-column prop="aisleStockMax" label="货道容量" align="center">
        </el-table-column>
        <el-table-column prop="aisleStock" label="库存量" align="center">
          <template slot-scope="scope">
            <el-link type="danger" v-if="scope.row.aisleStock == 0">
              缺货</el-link
            >
            <el-link type="primary" v-else>{{ scope.row.aisleStock }}</el-link>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { havegoods } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      dialogVisible: false,
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      userList: [], // 列表
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.dialogVisible = true;

      this.id = row.number;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
    },
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
    showtable() {},
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
