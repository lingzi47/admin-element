<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item label="用户ID" prop="uid">
            <el-input
              style="width: 180px"
              v-model="form.uid"
              clearable
              placeholder="请输入用户ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="nickname">
            <el-input
              style="width: 170px"
              v-model="form.nickname"
              clearable
              placeholder="请输入收件人姓名"
            ></el-input>
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
          label="序号"
          align="center"
          width="130"
          fixed
          :resizable="false"
        >
          <template slot-scope="scope">
            <span>{{ (page.page - 1) * page.limit + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="uid"
          label="购买者id"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="nickname"
          label="收货人"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="order_no"
          width="220"
          label="订单号"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="pay_price"
          label="订单金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="pay_time"
          label="支付时间"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="sign_time"
          label="自提发货时间"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column label="支付状态" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.order_status == 1"
              >待付款</el-link
            >
            <el-link type="danger" v-if="scope.row.order_status == 2"
              >已付款</el-link
            >
            <el-link type="danger" v-if="scope.row.order_status == 3"
              >已取消</el-link
            >
            <el-link type="danger" v-if="scope.row.order_status == 4"
              >退款</el-link
            >
          </template>
        </el-table-column>

        <el-table-column
          label="操作"
          width="120"
          align="center"
          :resizable="false"
          v-if="checkPermission(['useredit', 'userdelete'])"
        >
          <template slot-scope="scope">
            <el-link
              v-if="scope.row.order_status == 2"
              type="danger"
              style="margin-left: 10px"
              @click="fa(scope.row)"
              >自提发货</el-link
            >
            <el-link
              v-if="scope.row.order_status == 2"
              type="danger"
              style="margin-left: 10px"
              @click="refund(scope.row)"
              >退款</el-link
            >
            <el-link
              v-if="scope.row.order_status == 4"
              type="danger"
              style="margin-left: 10px"
              >已退款</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </div>

    <el-dialog
      title="商品退款"
      :visible.sync="Visible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-form-item label="是否退款"> </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">取消</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="自提发货"
      :visible.sync="Visible1"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-form-item label="是否发货"> </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse1">取消</el-button>
        <el-button type="primary" @click="submitForm1">通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";

import { promoter, orderrefund, selfSign, refund } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "specialorder",
  components: {
    pageTable,
  },
  data() {
    return {
      shoporder: [],
      tableSelectList: [],
      arr: [],

      Visible: false,
      Visible1: false,
      time: "",
      form: {
        uid: "",
        order_no: "",
        time: "",
        nickname: "",
        phone: "",
        order_status: "",
      },

      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
      id: "",
      money: "",
      token: "",
    };
  },
  watch: {},
  created() {
    this.shoporderlist();
    this.token = sessionStorage.getItem("token");
  },

  mounted() {},
  methods: {
    dao() {
      console.log(this.token);
      console.log(
        "https://y4.wjw.cool/adminApi/order/export" +
          "?token=" +
          this.token +
          "&uid=" +
          this.form.uid +
          "&nickname=" +
          this.form.nickname
      );
      window.location.href =
        "https://y4.wjw.cool/adminApi/order/export" +
        "?token=" +
        this.token +
        "&uid=" +
        this.form.uid +
        "&nickname=" +
        this.form.nickname;
    },
    fa(row) {
      this.id = row.id;
      this.Visible1 = true;
    },
    close1() {
      this.Visible1 = false;
    },
    refuse1() {
      this.Visible1 = false;
    },
    submitForm1() {
      let params = {
        id: this.id,
        token: sessionStorage.getItem("token"),
      };
      selfSign(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("发货成功");
          this.Visible1 = false;
          this.shoporderlist();
        } else {
          this.$message(msg);
          this.Visible1 = false;
          this.shoporderlist();
        }
      });
    },
    close() {
      this.Visible = false;
    },
    refuse() {
      this.Visible = false;
    },
    submitForm() {
      let params = {
        id: this.id,
        token: sessionStorage.getItem("token"),
        order_status: 4,
      };
      orderrefund(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("退款成功");
          this.Visible = false;
          this.shoporderlist();
        } else {
          this.$message(msg);
          this.Visible = false;
          this.shoporderlist();
        }
      });
    },
    refund(row) {
      this.id = row.id;
      this.Visible = true;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shoporderlist();
    },
    searchinfo() {
      this.page.page = 1;
      this.token = sessionStorage.getItem("token");
      let params = {
        page: 1,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        uid: this.form.uid,
        nickname: this.form.nickname,
      };
      promoter(params).then((res) => {
        console.log(res.data.data.data);
        this.shoporder = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.data.total,
        });
      });
    },
    shoporderlist() {
      this.token = sessionStorage.getItem("token");
      let params = {
        page: this.page.page,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        uid: this.form.uid,
        nickname: this.form.nickname,
      };
      promoter(params).then((res) => {
        console.log(res.data.data.data);
        this.shoporder = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.data.total,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
