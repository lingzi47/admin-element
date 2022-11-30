<template>
  <div class="user">
    <div style="margin-left: 200px">
      <el-form :inline="true">
        <el-form-item style="margin-left: 50px">
          <span style="font-size: 15px">应急箱数量:</span>
          {{ allbox }}台</el-form-item
        >
        <!-- <el-form-item style="margin-left: 50px">
          <span style="font-size: 15px">产生收益设备:</span>
          {{ isserve }}</el-form-item
        >
        <el-form-item style="margin-left: 50px">
          <span style="font-size: 15px">未缴纳通讯服务费设备数量:</span>
          {{ noserve }}</el-form-item
        >
-->
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">渠道药品总收益:</span>
          {{ position }}</el-form-item
        >
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">药品总收益 :</span>
          {{ isprice }}元</el-form-item
        >
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">已提现收益:</span>
          {{ with1 }}元</el-form-item
        >
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">广告总收益 :</span>
          {{ ad_sum }}元</el-form-item
        >
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">广告可提现收益:</span>
          {{ ad_canWith }}元</el-form-item
        >
        <el-form-item style="margin-left: 50px"
          ><span style="font-size: 15px">已提现广告:</span>
          {{ ad_with }}元</el-form-item
        >
      </el-form>
    </div>

    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center" :resizable="false">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="uid"
        label="用户id"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="price"
        label="提现金额"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="bank"
        label="银行卡号"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="tel"
        label="手机号"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="created_at"
        label="提现时间"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="ex_name"
        label="审核人"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="ex_time"
        label="审核时间"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="审核状态"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link type="danger" v-if="scope.row.ex_status == 3"
            >已拒绝</el-link
          >
          <el-link type="success" v-if="scope.row.ex_status == 2"
            >已通过</el-link
          >
          <el-link type="warning" v-if="scope.row.ex_status == 1"
            >待处理</el-link
          >
        </template>
      </el-table-column>
    </page-table>
  </div>
</template>

<script>
import { boxWithInfo } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import { getUserList, deleteUser } from "@/api/user";
import { getRoles } from "@/api/role";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表
      id: "",
      noserve: "",
      allbox: "",
      isprice: "",
      isserve: "",
      noprice: "",
      position: "",
      canWith: "",
      with1: "",
      ad_canwith: "",
      ad_with: "",
      ad_sum: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },

  created() {
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        uid: this.id,
      };
      boxWithInfo(params).then((res) => {
        console.log(res);
        this.allbox = res.data.data.data.allbox;
        this.isprice = res.data.data.data.isprice;
        this.isserve = res.data.data.data.isserve;
        this.noprice = res.data.data.data.noprice;
        this.noserve = res.data.data.data.noserve;
        this.with1 = res.data.data.with;
        this.ad_canwith = res.data.data.ad_canwith;

        this.ad_with = res.data.data.ad_with;
        this.ad_sum = res.data.data.ad_sum;

        this.canWith = res.data.data.canWith;
        this.position = res.data.data.position;
        this.page.total = res.data.data.total;
        this.userList = res.data.data.log;
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
