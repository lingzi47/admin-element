<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="审核状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="释放状态" prop="member">
          <el-select
            v-model="release_sta"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="未开启" value="10"></el-option>
            <el-option label="已开启" value="20"></el-option>
          </el-select>
        </el-form-item>

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
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="open()" style="margin-bottom: 10px"
            >手动释放</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column label="封面图" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.banner" width="60" />
        </template>
      </el-table-column>
      <el-table-column prop="people" label="参与人数" align="center">
      </el-table-column>

      <el-table-column prop="money" label="钻石数" align="center">
      </el-table-column>
      <el-table-column prop="range_num" label="浮动范围" align="center">
      </el-table-column>
      <el-table-column prop="due_time" label="截止时间" align="center">
      </el-table-column>
      <el-table-column label="释放状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.release_sta == 20"
            >已开启</el-link
          >
          <el-link type="danger" v-if="scope.row.release_sta == 10"
            >未开启</el-link
          >
        </template>
      </el-table-column>

      <el-table-column prop="release_time" label="释放时间" align="center">
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column prop="release_time" label="开启时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="warning" v-if="scope.row.sta == 10">待审核</el-link>
          <el-link type="success" v-if="scope.row.sta == 20">通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">拒绝</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <!-- <el-button @click="dao(scope.row)" type="text" size="small"
            >导出</el-button
          > -->
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { zlsreleaselist } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],

      release_sta: "",
      sta: "",
      time: "",

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
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
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    open() {
      this.$refs.editData.show();
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    searchinfo() {
      this.page.currentPage = 1;
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        sta: this.sta,
        release_sta: this.release_sta,
        time1: this.time[0],
        time2: this.time[1],
      };
      zlsreleaselist(params).then((res) => {
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
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

        sta: this.sta,
        release_sta: this.release_sta,
        time1: this.time[0],
        time2: this.time[1],
      };
      zlsreleaselist(params).then((res) => {
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;

        this.page.currentPage = res.data.data.current_page;

        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },

    handleClick(row) {
      this.$router.push({
        path: "/zlsdiamondshow",
        query: {
          id: row.id,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
