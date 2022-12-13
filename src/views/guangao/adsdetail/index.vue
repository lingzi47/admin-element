<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="用户ID" prop="name">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入用户ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备号" prop="use_pid">
          <el-input
            style="width: 180px"
            v-model="device"
            clearable
            placeholder="请输入设备号"
          ></el-input>
        </el-form-item>

        <el-form-item label="购买服务" prop="box_type">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="物业" value="3"></el-option>
            <el-option label="渠道" value="1"></el-option>
            <el-option label="管理" value="2"></el-option>
            <el-option label="租赁商" value="4"></el-option>
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
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >

          <el-button @click="dao">导出</el-button>
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
      <el-table-column prop="device" label="设备号" align="center">
      </el-table-column>
      <el-table-column prop="name" label="收益名称" align="center">
      </el-table-column>
      <el-table-column prop="all_price" label="总收益" align="center">
      </el-table-column>
      <el-table-column prop="price" label="收益金额" align="center">
      </el-table-column>
      <el-table-column prop="uid" label="用户id" align="center">
      </el-table-column>
      <el-table-column prop="time" label="收益时间" align="center">
      </el-table-column>
      <el-table-column prop="type" label="身份类型" align="center">
      </el-table-column>
    </page-table>
  </div>
</template>

<script>
import { fakeInfoList } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      uid: "",
      type: "",
      device: "",
      time: "",
      userList: [], // 列表

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
        this.time[0] = "";
        this.time[1] = "";
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      window.location.href =
        "https://testapi.yujian02.xyz/admin/box/exportList" +
        "?token=" +
        this.token +
        "&type=" +
        this.type +
        "&device=" +
        this.device +
        "&uid=" +
        this.uid +
        "&s_time=" +
        this.time[0] +
        "&e_time=" +
        this.time[1];
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
        type: this.type,
        uid: this.uid,
        device: this.device,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      fakeInfoList(params).then((res) => {
        this.page.total = res.data.total;
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
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: this.type,
        uid: this.uid,
        device: this.device,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      fakeInfoList(params).then((res) => {
        this.page.total = res.data.total;
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
