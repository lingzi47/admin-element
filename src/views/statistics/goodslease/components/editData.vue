<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="订单详情"
      :visible.sync="dialogVisible"
      width="1200px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <div class="block-quote">
        <el-form :inline="true" ref="form1">
          <el-form-item label="订单编号">
            <el-input
              style="width: 180px"
              v-model="uid"
              clearable
              placeholder="请输入订单编号"
            ></el-input>
          </el-form-item>
          <el-form-item label="药品名称">
            <el-input
              style="width: 180px"
              v-model="box_pidname"
              clearable
              placeholder="请输入药品名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="订单是否退款">
            <el-select
              style="width: 180px"
              v-model="orderIsRefund"
              clearable
              placeholder="请选择付款方式"
            >
              <el-option label="否" :value="0"></el-option>
              <el-option label="是" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="付款方式">
            <el-select
              style="width: 180px"
              v-model="orderPayType"
              clearable
              placeholder="请选择付款方式"
            >
              <el-option label="未知" :value="0"></el-option>
              <el-option label="微信" :value="1"></el-option>
              <el-option label="支付宝" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单状态" prop="orderPayStatus">
            <el-select
              style="width: 180px"
              v-model="orderStatus"
              clearable
              placeholder="请选择支付状态"
            >
              <el-option label="已取消" :value="3"></el-option>
              <el-option label="正常" :value="1"></el-option>
              <el-option label="异常" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付状态" prop="orderPayStatus">
            <el-select
              style="width: 180px"
              v-model="orderPayStatus"
              clearable
              placeholder="请选择支付状态"
            >
              <el-option label="未支付" :value="0"></el-option>
              <el-option label="支付中" :value="1"></el-option>
              <el-option label="已支付" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付时间" prop="time">
            <el-date-picker
              v-model="time"
              type="daterange"
              value-format="yyyy-MM-dd "
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>

          <el-form-item style="float: right">
            <el-button type="primary" icon="el-icon-search" @click="search"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <el-table border ref="dataTable" :data="shoporder">
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{ (page - 1) * limit + scope.$index + 1 }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="orderCode"
          label="订单编号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="productName"
          label="商品名称"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="productNum"
          align="center"
          label="购买数量"
        ></el-table-column>
        <el-table-column
          prop="orderMoneyPaid"
          align="center"
          label="订单金额"
        ></el-table-column>
        <el-table-column align="center" label="订单利润">
          <template slot-scope="scope">
            <span>
              {{
                scope.row.productSalePrice - scope.row.productCostPrice
              }}</span
            >
          </template>
        </el-table-column>

        <el-table-column label="付款方式" align="center">
          <template slot-scope="scope">
            <el-link v-if="scope.row.orderPayType == 0">未知</el-link>
            <el-link v-if="scope.row.orderPayType == 1">微信</el-link>
            <el-link v-if="scope.row.orderPayType == 2">支付宝</el-link>
          </template></el-table-column
        >
        <el-table-column label="订单状态" align="center">
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.orderStatus == 1"
              >正常</el-link
            >
            <el-link type="primary" v-if="scope.row.orderStatus == 3"
              >已取消</el-link
            >
            <el-link type="danger" v-if="scope.row.orderStatus == 2"
              >异常</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          prop="orderCreateTime"
          label="支付时间"
          align="center"
        ></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="prev, pager, next, jumper"
          :total="count"
        >
        </el-pagination>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { readinfo, financeindex } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
import axios from "axios";
export default {
  name: "AddDialog",
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible: false,
      uid: "",
      box_pidname: "",
      orderPayType: 1,
      orderStatus: 1,
      allprice: "",
      shoporder: [],
      stime: "",
      etime: "",
      time: "",
      count: 0,
      orderIsRefund: 0,
      deviceCode: "",
      Token: "",
      orderPayStatus: 2,
      userId: "",
      limit: "10",
      page: 1,
    };
  },

  // computed: {
  //   timeDefault() {},
  // },
  mounted() {},
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  created() {
    var date = new Date();
    var s1 =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      (date.getDate() - 1);
    var e1 =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let arr = [];
    arr.push(s1);
    arr.push(e1);
    this.time = arr; //时间段的数组；第一项表示开始时间，第二项表示结束时间
  },
  mounted() {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.page = val;
      this.limit = size;
      this.getUserList();
    },
    search() {
      this.getUserList();
    },
    getUserList() {
      let params = {
        token: sessionStorage.getItem("token"),
        page: this.page,
        pageSize: this.limit,
        pay_status: this.pay_status,
        userId: this.userId,
        orderStatus: this.orderStatus,
        orderIsRefund: this.orderIsRefund,
        deviceCode: this.deviceCode,
        orderPayStatus: this.orderPayStatus,
        startTime: this.time[0],
        endTime: this.time[1],
      };
      readinfo(params).then((res) => {
        console.log(res.data.data.data);
        this.count = res.data.data.data.total;
        console.log(this.count);
        this.shoporder = res.data.data.data.dataList;
        this.allprice = res.data.allprice;
      });
    },

    show(row) {
      this.dialogVisible = true;
      console.log(row);
      this.userId = row.userId;
      this.deviceCode = row.box_number;
      this.getUserList();
    },

    close() {
      this.dialogVisible = false;
      this.uid = "";
      this.box_pidname = "";
      this.allprice = "";
      this.shoporder = [];
      this.deviceCode = "";

      this.userId = "";
    },
  },
};
</script>

<style>
.block {
  margin-top: 20px;
  margin-left: 900px;
}
</style>
