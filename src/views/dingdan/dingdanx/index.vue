<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item label="交易时间" prop="username">
          <el-date-picker
            style="width: 380px"
            v-model="time"
            value-format="yyyy-MM-dd HH:mm:ss"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="设备编号" prop="tel">
          <el-input
            v-model="orderDeviceCode"
            clearable
            placeholder="请输入设备编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="成本价格 :" style="margin-left: 20px"
          >{{ cost_price }}元
        </el-form-item>
        <el-form-item label="合计金额 :" style="margin-left: 20px"
          >{{ price }}元
        </el-form-item>
        <el-form-item label="订单总数" style="margin-left: 40px"
          >{{ number }}
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="editData">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
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
      <el-table-column label="商品名称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.productName }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="productCostPrice" label="成本价" align="center">
      </el-table-column>

      <el-table-column prop="orderMoneyPaid" label="销售价" align="center">
      </el-table-column>
      <el-table-column prop="orderDeviceCode" label="设备编号" align="center">
      </el-table-column>

      <el-table-column prop="orderCreateTime" label="交易时间" align="center">
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { xunilist } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";

export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      userList: [], // 列表
      time: "",
      price: "",
      cost_price: "",
      number: "",
      orderDeviceCode: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    editData() {
      this.$refs.editData.show();
    },
    deleteData(row) {
      //console.log(row);
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            id: row.id,
            token: sessionStorage.getItem("token"),
          };
          xunnidel(params).then((res) => {
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
              this.getUserList();
            }
          });
        })
        .catch(() => {});
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    search() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        token: sessionStorage.getItem("token"),
        limit: this.page.pageSize,
        orderDeviceCode: this.orderDeviceCode,
        time1: this.time[0],
        time2: this.time[1],
      };
      xunilist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.number = res.data.info.number;
        this.price = res.data.info.price;
        this.cost_price = res.data.info.cost_price;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        page: this.page.currentPage,
        limit: this.page.pageSize,
        orderDeviceCode: this.orderDeviceCode,
        time1: this.time[0],
        time2: this.time[1],
      };
      xunilist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.number = res.data.info.number;
        this.price = res.data.info.price;
        this.cost_price = res.data.info.cost_price;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
