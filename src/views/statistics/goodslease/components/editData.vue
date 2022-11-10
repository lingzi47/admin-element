<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="订单详情"
      :visible.sync="dialogVisible"
      width="1800px"
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
              value-format="yyyy-MM-dd"
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
          prop="box_name"
          label="设备租赁号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="zls_id"
          label="租赁商id"
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
                (
                  Number(scope.row.productSalePrice) -
                  Number(scope.row.productCostPrice)
                ).toFixed(2)
              }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          prop="yf_price"
          label="药房收益"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="user_price"
          label="租赁商收益"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="cost_price"
          label="渠道商收益"
          align="center"
        ></el-table-column>
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
import * as math from "mathjs";
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
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var s1 = y + "-" + m + "-" + d;
    var y1 = date.getFullYear();
    var m1 = date.getMonth() + 1;
    m1 = m1 < 10 ? "0" + m1 : m1;
    var d1 = date.getDate() - 1;
    d1 = d1 < 10 ? "0" + d1 : d1;
    var e1 = y1 + "-" + m1 + "-" + d1;
    let arr = [];
    arr.push(e1);
    arr.push(s1);

    this.time = arr; //时间段的数组；第一项表示开始时间，第二项表示结束时间
  },
  mounted() {},
  methods: {
    printFn(value) {
      const precision = 14;
      return Number(math.format(value, precision));
    },
    handleSizeChange(val) {},
    handleCurrentChange(val) {
      this.page = val;
      this.limit = size;
      this.getUserList();
    },
    numSub(arg1, arg2) {
      let r1, r2, m;
      let precision; // 精度
      try {
        r1 = arg1.toString().split(".")[1].length; // 获取arg1小数位的长度
      } catch (e) {
        r1 = 0;
      }
      try {
        r2 = arg2.toString().split(".")[1].length; // 获取arg2小数位的长度
      } catch (e) {
        r2 = 0;
      }
      m = Math.pow(10, Math.max(r1, r2));
      precision = r1 > r2 ? r1 : r2; // 获取精度，
      return ((arg1 * m - arg2 * m) / m).toFixed(precision);
    },
    search() {
      let params = {
        token: sessionStorage.getItem("token"),
        page: 1,
        pageSize: this.limit,
        pay_status: this.pay_status,
        userId: this.userId,
        orderStatus: this.orderStatus,
        orderIsRefund: this.orderIsRefund,
        deviceCode: this.deviceCode,
        orderPayStatus: this.orderPayStatus,
        startTime: this.time[0],
        endTime: this.time[1],
        orderPayType: this.orderPayType,
      };
      readinfo(params).then((res) => {
        this.count = res.data.data.data.total;
        this.shoporder = res.data.data.data.dataList;
        this.allprice = res.data.allprice;
      });
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
        orderPayType: this.orderPayType,
      };
      readinfo(params).then((res) => {
        this.count = res.data.data.data.total;
        this.shoporder = res.data.data.data.dataList;
        this.allprice = res.data.allprice;
      });
    },

    show(row) {
      this.dialogVisible = true;
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
