<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <el-table
        ref="dataTable"
        :data="shoporder"
        @changeCurrentPage="changeCurrent"
        border
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
          prop="user_id"
          label="用户id"
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
          prop="pay_price"
          label="支付金额"
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
          prop="coupon_price"
          label="使用代金券金额"
          align="center"
          :resizable="false"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";

import { listHisOrder, orderrefund, selfSign, refund } from "@/request/api";
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
    this.form.uid = this.$route.query.id;
    this.shoporderlist();
    this.token = sessionStorage.getItem("token");
  },

  mounted() {},
  methods: {
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shoporderlist();
    },

    shoporderlist() {
      this.token = sessionStorage.getItem("token");
      let params = {
        page: this.page.page,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        id: this.form.uid,
      };
      listHisOrder(params).then((res) => {
        console.log(res.data.data);
        this.shoporder = res.data.data;
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
