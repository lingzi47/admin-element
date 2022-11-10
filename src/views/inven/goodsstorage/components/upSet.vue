<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="详情"
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
        <!-- 返回字段：
序号id，商品名称，品类，药品成本,出入库数量，总成本
id   |   goods_name  |  type  |  price  |  num  |  sum_price  |  name -->
        <el-table-column prop="goods_name" label="商品名称" align="center">
        </el-table-column>
        <el-table-column prop="type" label="品类" align="center">
        </el-table-column>
        <el-table-column prop="price" label="药品成本" align="center">
        </el-table-column>
        <el-table-column prop="num" label="数量" align="center">
        </el-table-column>
        <el-table-column prop="sum_price" label="总成本" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
import { stockInfo } from "@/request/api";
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
      console.log(row.id);
      this.dialogVisible = true;
      console.log(row);
      this.id = row.id;
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
        oid: this.id,
      };
      stockInfo(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
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
