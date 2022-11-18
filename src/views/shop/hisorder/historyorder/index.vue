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

          <el-form-item style="float: right">
            <el-button type="primary" icon="el-icon-search" @click="searchinfo"
              >搜索</el-button
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
          prop="id"
          label="购买者id"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="sum_price"
          label="总消费金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="sum_coupon"
          label="使用代金券总额"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column label="操作" align="center" :resizable="false">
          <template slot-scope="scope">
            <el-link type="danger" @click="fa(scope.row)">查看详情</el-link>
          </template>
        </el-table-column>
      </page-table>
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";

import { hisOrder, orderrefund, selfSign, refund } from "@/request/api";
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
    fa(row) {
      this.$router.push({
        path: "/ordershow",
        query: {
          id: row.id,
        },
      });
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
        id: this.form.uid,
      };
      hisOrder(params).then((res) => {
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
        id: this.form.uid,
      };
      hisOrder(params).then((res) => {
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
