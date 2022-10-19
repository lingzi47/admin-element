<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="pk值区间:" prop="id">
          <el-input
            style="width: 90px"
            clearable
            v-model="low_num"
            placeholder="请输入"
          ></el-input
          >--
          <el-input
            style="width: 90px"
            clearable
            v-model="high_num"
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item label="加减" prop="member">
          <el-select
            style="width: 180px"
            v-model="type"
            clearable
            placeholder="请选择加减"
          >
            <el-option label="加" :value="1"></el-option>
            <el-option label="减" :value="2"></el-option>
          </el-select>
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
      <el-table-column prop="pk" label="pk值" align="center" :resizable="false">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="时间"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="type_info"
        label="来源"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="details"
        label="添加pk值描述"
        align="center"
        :resizable="false"
      ></el-table-column>
    </page-table>
  </div>
</template>

<script>
import { pklog } from "@/request/api";
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
      low_num: "",
      high_num: "",
      type: "",
      time: "",
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
    this.id = this.$route.query.id;
    console.log(this.id);
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
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
        uid: this.id,
        time1: this.time[0],
        time2: this.time[1],
        low_num: this.low_num,
        high_num: this.high_num,
        type: this.type,
      };
      pklog(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
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
        uid: this.id,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        time1: this.time[0],
        time2: this.time[1],
        low_num: this.low_num,
        high_num: this.high_num,
        type: this.type,
      };
      pklog(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
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
