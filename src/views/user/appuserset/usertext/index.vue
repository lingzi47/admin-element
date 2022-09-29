<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="来源" prop="member">
          <el-input
            style="width: 180px"
            v-model="form.details"
            clearable
            placeholder="请输入来源"
          ></el-input>
        </el-form-item>
        <el-form-item label="钻石区间:" prop="id">
          <el-input
            style="width: 90px"
            clearable
            v-model="form.low_num"
            placeholder="请输入"
          ></el-input
          >--
          <el-input
            style="width: 90px"
            clearable
            v-model="form.high_num"
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item label="加减" prop="member">
          <el-select
            style="width: 180px"
            v-model="form.type"
            clearable
            placeholder="请选择加减"
          >
            <el-option label="加" :value="1"></el-option>
            <el-option label="减" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div style="margin-left: 500px">
      <el-form :inline="true" style="margin-top: 20px">
        <el-form-item label="老系统:"></el-form-item>
        <el-form-item label="累计获得:"> {{ oldadd }}</el-form-item>
        <el-form-item label="累计消耗:" style="margin-left: 50px">
          {{ oldcut }}</el-form-item
        >
        <el-form-item label="剩余:" style="margin-left: 50px">
          {{ oldadd - oldcut }}</el-form-item
        >
      </el-form>
    </div>
    <div style="margin-left: 500px">
      <el-form :inline="true">
        <el-form-item label="新系统:"></el-form-item>
        <el-form-item label="累计获得:"> {{ alladd }}</el-form-item>
        <el-form-item label="累计消耗:" style="margin-left: 50px">
          {{ allcut }}</el-form-item
        >
        <el-form-item label="剩余:" style="margin-left: 50px">
          {{ alladd - allcut }}</el-form-item
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
        prop="nickname"
        label="名称"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="head_img"
        label="头像"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <img :src="scope.row.head_img" class="table-img" width="60px" />
        </template>
      </el-table-column>
      <el-table-column
        prop="type"
        label="加减"
        align="center"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link type="danger" v-if="scope.row.type == 2">减</el-link>
          <el-link type="success" v-if="scope.row.type == 1">加</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="num"
        label="分利钻石"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="details"
        label="来源"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="member"
        label="用户身份"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="create_time"
        label="时间"
        align="center"
        :resizable="false"
      ></el-table-column>
    </page-table>
  </div>
</template>

<script>
import { shareMoney, userZisu, userStart, userBlm } from "@/request/api";
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
      alladd: "",
      allcut: "",
      oldcut: "",
      oldadd: "",
      form: {
        low_num: "",
        high_num: "",
        type: "",
        time: "",
        details: "",
      },
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
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
    getSelection(select) {
      this.tableSelectList = select;
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        low_num: this.form.low_num,
        high_num: this.form.high_num,
        type: this.form.type,
        details: this.form.details,
        uid: this.id,
        time1: this.form.time[0],
        time2: this.form.time[1],
      };
      shareMoney(params).then((res) => {
        console.log(res);
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.alladd = res.data.data.num.alladd;
        this.allcut = res.data.data.num.allcut;
        this.oldadd = res.data.data.oldnum.oldadd;
        this.oldcut = res.data.data.oldnum.oldcut;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        low_num: this.form.low_num,
        high_num: this.form.high_num,
        type: this.form.type,
        details: this.form.details,
        uid: this.id,
        time1: this.form.time[0],
        time2: this.form.time[1],
      };
      shareMoney(params).then((res) => {
        console.log(res);
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;
        this.alladd = res.data.data.num.alladd;
        this.allcut = res.data.data.num.allcut;
        this.oldadd = res.data.data.oldnum.oldadd;
        this.oldcut = res.data.data.oldnum.oldcut;
        this.userList = res.data.data.data;
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
