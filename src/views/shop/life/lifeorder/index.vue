<template>
  <div>
    <!-- 数据统计 -->
    <div>
      <div class="block-quote">
        <el-form :inline="true">
          <el-form-item label="支付时间" prop="title">
            <el-date-picker
              v-model="time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button
              v-if="checkPermission('operationsearch')"
              type="primary"
              icon="el-icon-search"
              @click="fond"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <el-descriptions title="订单数据" :column="4" class="census">
        <el-descriptions-item label="已支付订单数">{{
          census.orderall
        }}</el-descriptions-item>
        <el-descriptions-item label="待发货订单数">{{
          census.deliver0
        }}</el-descriptions-item>
        <el-descriptions-item label="已发货订单数">{{
          census.deliver1
        }}</el-descriptions-item>
        <el-descriptions-item label="已收货订单数">{{
          census.deliver2
        }}</el-descriptions-item>
        <el-descriptions-item label="已支付订单金额">{{
          census.orderprice
        }}</el-descriptions-item>
        <el-descriptions-item label="待发货订单金额">{{
          census.deliver0price
        }}</el-descriptions-item>
        <el-descriptions-item label="已发货订单金额">{{
          census.deliver1price
        }}</el-descriptions-item>
        <el-descriptions-item label="已收货订单金额">{{
          census.deliver2price
        }}</el-descriptions-item>
        <el-descriptions-item label="快递费用总金额">{{
          census.postageprice
        }}</el-descriptions-item>
        <el-descriptions-item label="代金券使用总额">{{
          census.postageprice
        }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <hr />
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item label="订单号" prop="order_no">
            <el-input
              style="width: 170px"
              v-model="form.order_no"
              clearable
              placeholder="请输入订单号"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="goods_name">
            <el-input
              style="width: 170px"
              v-model="form.goods_name"
              clearable
              placeholder="请输入商品名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input
              style="width: 170px"
              v-model="form.phone"
              clearable
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="收件人姓名" prop="name">
            <el-input
              style="width: 170px"
              v-model="form.name"
              clearable
              placeholder="请输入收件人姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="订单状态" prop="order_status">
            <el-select
              style="width: 170px"
              v-model="form.order_status"
              clearable
              placeholder="请选择订单状态"
            >
              <el-option label="全部状态" :value="0"></el-option>
              <el-option label="待付款" :value="1"></el-option>
              <el-option label="已付款" :value="2"></el-option>
              <el-option label="已取消" :value="3"></el-option>
              <el-option label="退款" :value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="标签" prop="label">
            <el-input
              style="width: 170px"
              v-model="form.label"
              clearable
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="time">
            <el-date-picker
              v-model="form.time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" icon="el-icon-search" @click="searchinfo"
              >搜索</el-button
            >
            <el-button @click="dao">导出</el-button>
          </el-form-item>
        </el-form>
      </div>
      <page-table
        ref="dataTable"
        :data="shoporder"
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column
          prop="user_id"
          label="用户ID"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="user_name"
          label="用户名"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="buy_user"
          label="收件人"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="buy_address"
          label="收货地址"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="buy_phone"
          label="手机号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="order_no"
          label="订单号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="goods_name"
          label="商品名称"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="sku_id"
          align="center"
          label="商品规格"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="number"
          align="center"
          label="购买数量"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="order_price"
          label="订单金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="commission"
          label="佣金"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="postage_price"
          label="邮费"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="coupon_price"
          label="代金券"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="pay_price"
          label="支付金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column label="支付状态" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.pay_status == '已付款'"
              >已付款</el-link
            >
            <el-link type="primary" v-if="scope.row.pay_status == '未付款'"
              >未付款</el-link
            >
            <el-link type="warning" v-if="scope.row.pay_status == '退款'"
              >退款</el-link
            >
            <el-link type="danger" v-if="scope.row.pay_status == '退款中'"
              >退款中</el-link
            >
          </template>
        </el-table-column>

        <el-table-column
          prop="deliver_status"
          label="发货状态"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.deliver_status == '已确认'"
              >已确认</el-link
            >
            <el-link type="danger" v-if="scope.row.deliver_status == '未发货'"
              >未发货</el-link
            >
            <el-link type="primary" v-if="scope.row.deliver_status == '已发货'"
              >已发货</el-link
            >
            <el-link v-if="scope.row.deliver_status == '已评价'"
              >已评价</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          prop="pay_time"
          align="center"
          label="支付时间"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="buy_remarks"
          align="center"
          label="备注"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          align="center"
          width="120px"
          label="快递"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-select
              size="mini"
              v-model="scope.row.delivery"
              @change="display"
            >
              <el-option
                v-for="item in arr"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select>
            <!-- <el-select
              v-else
              :disabled="true"
              size="mini"
              v-model="scope.row.delivery"
              @change="display"
            >
              <el-option
                v-for="item in arr"
                :key="item.code"
                :label="item.name"
                :value="item.code"
              >
              </el-option>
            </el-select> -->
          </template>
        </el-table-column>
        <el-table-column
          label="快递单号"
          align="center"
          width="140"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.express"
              @change="onInputChange(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          width="120"
          align="center"
          :resizable="false"
          v-if="checkPermission(['useredit', 'userdelete'])"
        >
          <template slot-scope="scope">
            <el-link
              type="primary"
              v-if="scope.row.deliver_status == '未发货'"
              @click="open(scope.row)"
              >发货</el-link
            >
            <el-link
              type="primary"
              v-if="scope.row.deliver_status == '已发货'"
              @click="open(scope.row)"
              >修改物流</el-link
            >
            <el-link
              style="margin-left: 10px"
              v-if="scope.row.deliver_status == '已发货'"
              @click="delivery(scope.row)"
              >查看物流</el-link
            >

            <el-link
              v-if="scope.row.pay_status == '已付款'"
              type="danger"
              style="margin-left: 10px"
              @click="refund(scope.row)"
              >退款</el-link
            >
            <el-link
              type="primary"
              v-if="scope.row.deliver_status == '已发货'"
              style="margin-left: 10px"
              @click="queren(scope.row)"
              >确认收货</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </div>
    <el-dialog
      title="物流信息"
      :visible.sync="dialogVisible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-table ref="dataTable" :data="userList">
        <el-table-column prop="time" width="200px" label="时间" align="center">
        </el-table-column>
        <el-table-column prop="context" label="内容" align="center">
        </el-table-column>
      </el-table>
    </el-dialog>
    <el-dialog
      title="商品退款"
      :visible.sync="Visible"
      width="800px"
      :close-on-click-modal="false"
      @close="closee"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="退款金额">
              <el-input
                style="width: 180px"
                v-model="money"
                clearable
                placeholder="请输入退款金额"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">取消</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { shopordercensus, shoporderindex } from "@/api/shop";
import { conGoods } from "@/request/api";
import {
  merchant,
  sendGoods,
  express,
  refund,
  exportOrder,
} from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "specialorder",
  components: {
    pageTable,
  },
  data() {
    return {
      census: [],
      userList: [],
      shoporder: [],
      tableSelectList: [],
      arr: [],
      dialogVisible: false,
      Visible: false,
      time: "",

      form: {
        goods_name: "",
        order_no: "",
        time: "",
        label: "",
        name: "",
        phone: "",
        order_status: "",
      },
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
      order_id: "",
      money: "",
    };
  },
  watch: {
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  created() {
    this.shoporderlist();
    this.fond();
    this.merchant();
  },

  mounted() {},
  methods: {
    queren(row) {
      this.$confirm("是否确认收货？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            oid: row.id,
          };
          conGoods(params).then((res) => {
            if (res.data.code == 200) {
              this.shoporderlist();
              this.$message.success("操作成功");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        })
        .catch(() => {});
    },
    dao() {
      if (this.form.time[1] == undefined) {
        window.location.href =
          "https://yujian02.xyz/shopadmin/exportOrder" +
          "?token=" +
          this.token +
          "&shop_type=" +
          3 +
          "&order_no=" +
          this.form.order_no +
          "&goods_name=" +
          this.form.goods_name +
          "&name=" +
          this.form.name +
          "&phone=" +
          this.form.phone +
          "&label=" +
          this.form.label +
          "&order_status=" +
          this.form.order_status;
      } else {
        window.location.href =
          "https://yujian02.xyz/shopadmin/exportOrder" +
          "?token=" +
          this.token +
          "&shop_type=" +
          3 +
          "&order_no=" +
          this.form.order_no +
          "&goods_name=" +
          this.form.goods_name +
          "&name=" +
          this.form.name +
          "&phone=" +
          this.form.phone +
          "&label=" +
          this.form.label +
          "&order_status=" +
          this.form.order_status +
          "&pay_time_two=" +
          this.form.time[1] +
          "&pay_time_one=" +
          this.form.time[0];
      }
    },
    close() {
      this.dialogVisible = false;
    },
    closee() {
      this.Visible = false;
    },
    refuse() {
      this.Visible = false;
    },
    submitForm() {
      if (this.money == "") {
        this.$message("请填写完整信息");
      }
      let params = {
        token: sessionStorage.getItem("token"),
        money: this.money,
        order_id: this.order_id,
      };
      refund(params).then((res) => {
        let msg = res.data.msg;
        if (res.data.code == 200) {
          this.$message.success("退款成功，等待审核");
        } else {
          this.$message(msg);
        }
        this.Visible = false;
        this.shoporderlist();
      });
    },
    refund(row) {
      this.order_id = row.id;
      this.Visible = true;
    },
    onInputChange(row) {},
    display(value) {},
    delivery(row) {
      let params = {
        token: sessionStorage.getItem("token"),
        id: row.id,
      };
      express(params).then((res) => {
        this.userList = res.data.data;
      });
      this.dialogVisible = true;
    },
    merchant() {
      let params = {
        token: sessionStorage.getItem("token"),
      };

      merchant(params).then((res) => {
        this.arr = res.data.data;
      });
    },
    checkPermission,
    async fond() {
      let res = await shopordercensus({
        token: sessionStorage.getItem("token"),
        shop_type: 3,
        time1: this.time[0],
        time2: this.time[1],
      });
      if (res.status == 200) {
        this.census = res.data.data;
        this.shoporderlist();
      }
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shoporderlist();
    },
    async searchinfo() {
      this.page.page = 1;
      let res = await shoporderindex({
        token: sessionStorage.getItem("token"),
        shop_type: 3,
        order_no: this.form.order_no,
        goods_name: this.form.goods_name,
        name: this.form.name,
        phone: this.form.phone,
        label: this.form.label,
        order_status: this.form.order_status,
        pay_time_two: this.form.time[1],
        pay_time_one: this.form.time[0],
        page: 1,
        limit: this.page.limit,
      });
      if (res.status == 200) {
        this.shoporder = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      }
    },
    async shoporderlist() {
      this.token = sessionStorage.getItem("token");
      let res = await shoporderindex({
        token: sessionStorage.getItem("token"),
        shop_type: 3,
        order_no: this.form.order_no,
        goods_name: this.form.goods_name,
        name: this.form.name,
        phone: this.form.phone,
        label: this.form.label,
        order_status: this.form.order_status,
        pay_time_two: this.form.time[1],
        pay_time_one: this.form.time[0],
        page: this.page.page,
        limit: this.page.limit,
      });
      if (res.status == 200) {
        this.shoporder = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      }
    },

    open(row) {
      if (row.express == null) {
        this.$message.error("请填写完整信息");
      } else if (row.delivery == null) {
        this.$message.error("请填写完整信息");
      } else {
        let params = {
          token: sessionStorage.getItem("token"),
          delivery: row.delivery,
          express: row.express,
          order_id: row.id,
        };
        sendGoods(params).then((res) => {
          if (res.data.status == 200) {
            this.shoporderlist();
            this.$message.success("发货成功");
            this.shoporderlist();
          }
        });
      }
      this.shoporderlist();
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
