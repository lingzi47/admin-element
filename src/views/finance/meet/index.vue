<template>
  <div>
    <!-- 数据统计 -->
    <div>
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item label="支付时间" prop="title">
            <el-date-picker
              v-model="form.time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" icon="el-icon-search" @click="ordercensus"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <el-descriptions title="订单数据" :column="4" class="census">
        <el-descriptions-item label="已支付订单数">{{
          orderall
        }}</el-descriptions-item>
        <el-descriptions-item label="待发货订单数">{{
          deliver0
        }}</el-descriptions-item>
        <el-descriptions-item label="已发货订单数">{{
          deliver1
        }}</el-descriptions-item>
        <el-descriptions-item label="已收货订单数">{{
          deliver2
        }}</el-descriptions-item>
        <el-descriptions-item label="已支付订单金额">{{
          orderprice
        }}</el-descriptions-item>
        <el-descriptions-item label="待发货订单金额">{{
          deliver0price
        }}</el-descriptions-item>
        <el-descriptions-item label="已发货订单金额">{{
          deliver1price
        }}</el-descriptions-item>
        <el-descriptions-item label="已收货订单金额">{{
          deliver2price
        }}</el-descriptions-item>
        <el-descriptions-item label="快递费用总金额">{{
          postageprice
        }}</el-descriptions-item>
        <el-descriptions-item label="代金券使用总额">{{
          postageprice
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <hr />
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form1">
          <el-form-item label="订单号">
            <el-input
              style="width: 180px"
              v-model="form1.order_no"
              clearable
              placeholder="请输入订单号"
            ></el-input>
          </el-form-item>

          <el-form-item label="订单状态" prop="pay_status">
            <el-select
              style="width: 180px"
              v-model="form1.pay_status"
              clearable
              placeholder="请选择订单状态"
            >
              <el-option label="未付款" :value="1"></el-option>
              <el-option label="已付款" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付时间" prop="time">
            <el-date-picker
              v-model="form1.time"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button
              v-if="checkPermission('usersearch')"
              type="primary"
              icon="el-icon-search"
              @click="getUserList"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <page-table
        ref="dataTable"
        :data="shoporder"
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column
          type="index"
          fixed
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="id"
          fixed
          label="ID"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="order_no"
          fixed
          label="订单号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="goods_id"
          fixed
          label="商品名称"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="sku_id"
          fixed
          align="center"
          label="商品规格"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="order_price"
          fixed
          label="订单金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="postage_price"
          fixed
          label="邮费"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="coupon_price"
          fixed
          label="代金券使用金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="pay_price"
          fixed
          label="支付金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          fixed
          label="支付状态"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-tag
              type="warning"
              effect="dark"
              v-if="scope.row.pay_status == 1"
              >未付款
            </el-tag>
            <el-tag
              type="success"
              effect="dark"
              v-if="scope.row.pay_status == 2"
              >已付款</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column
          fixed
          label="订单状态"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-tag
              type="warning"
              effect="dark"
              v-if="scope.row.deliver_status == 1"
            >
              已发货
            </el-tag>
            <el-tag
              type="success"
              effect="dark"
              v-if="scope.row.deliver_status == 2"
              >已评价</el-tag
            >
            <el-tag
              type="danger"
              effect="dark"
              v-if="scope.row.deliver_status == 3"
              >未发货</el-tag
            >
            <el-tag effect="dark" v-if="scope.row.deliver_status == 0"
              >已确认</el-tag
            >
          </template></el-table-column
        >
        <el-table-column
          prop="pay_time"
          fixed
          align="center"
          label="支付时间"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="expect"
          fixed
          align="center"
          label="预计收入"
          :resizable="false"
        >
        </el-table-column>
      </page-table>
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { financeInfo, financeindex } from "@/request/api";
import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      census: [],
      shoporder: [],
      tableSelectList: [],
      deliver0: "",
      deliver0price: "",
      deliver1: "",
      deliver1price: "",
      deliver2: "",
      deliver2price: "",
      orderall: "",
      orderprice: "",
      postageprice: "",
      form: {
        time: "",
      },
      form1: {
        pay_status: "",
        time: "",
        order_no: "",
      },
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: "",
    };
  },
  watch: {
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
    "form1.time"(newVal) {
      if (newVal == null) {
        this.form1.time = [];
      }
    },
  },
  created() {
    this.getUserList();
    this.ordercensus();
  },
  mounted() {},
  methods: {
    checkPermission,
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    ordercensus() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        shop_type: 2,
        time1: this.form.time[0],
        time2: this.form.time[1],
      };
      financeInfo(params).then((res) => {
        this.deliver0 = res.data.data.deliver0;
        this.deliver0price = res.data.data.deliver0price;
        this.deliver1 = res.data.data.deliver1;
        this.deliver1price = res.data.data.deliver1price;
        this.deliver2 = res.data.data.deliver2;
        this.deliver2price = res.data.data.deliver2price;
        this.orderall = res.data.data.orderall;
        this.orderprice = res.data.data.orderprice;
        this.postageprice = res.data.data.postageprice;
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        shop_type: 2,
        page: this.page.currentPage,
        limit: this.page.pageSize,
        pay_status: this.form1.pay_status,
        order_no: this.form1.order_no,
        time1: this.form1.time[0],
        time2: this.form1.time[1],
      };
      financeindex(params).then((res) => {
        this.page.total = res.data.count;
        this.shoporder = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },

    open() {
      11;
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
