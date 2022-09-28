<template>
  <div class="user">
    <el-form :inline="true">
      <el-form-item style="float: right">
        <el-button type="primary" @click="go">返回</el-button>
      </el-form-item>
    </el-form>
    <el-table ref="dataTable" :data="userList" border>
      <el-table-column prop="name" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column prop="uid" label="租赁商id" align="center">
      </el-table-column>
      <el-table-column prop="tel" label="租赁商手机号" align="center">
      </el-table-column>
      <el-table-column prop="number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column prop="officinainfo" label="设备供货药房" align="center">
      </el-table-column>
      <el-table-column prop="positioninfo" label="设备位置" align="center">
      </el-table-column>

      <el-table-column prop="duration" label="收益时长/小时" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.duration }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="have_time" label="租赁服务日期" align="center">
      </el-table-column>
      <el-table-column prop="server_time" label="通讯服务日期" align="center">
      </el-table-column>
      <el-table-column prop="status" label="状态" align="center">
      </el-table-column>
    </el-table>
    <p style="margin: 35px 0px 10px 10px">推广分润</p>

    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="分润事件:">
          <el-select v-model="type1" placeholder="请选择" style="width: 130px">
            <el-option label="推广分润" value="医疗箱收益"></el-option>
            <el-option label="绩效奖金" value="医疗箱绩效"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间:">
          <el-date-picker
            style="width: 260px"
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
        </el-form-item>
      </el-form>
    </div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="钻石收益:">{{ diamond }} </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <page-table ref="dataTable" :data="list" @changeCurrentPage="changeCurrent">
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="details" label="分润" align="center">
      </el-table-column>
      <el-table-column prop="num" label="分润金额" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="获得分润时间" align="center">
      </el-table-column>
    </page-table>
    <p style="margin: 35px 0px 10px 10px">设备收益</p>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="分润事件:">
          <el-select v-model="type" placeholder="请选择" style="width: 130px">
            <el-option label="商品流水收益" value="10"></el-option>
            <el-option label="广告收益" value="20"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间:">
          <el-date-picker
            style="width: 260px"
            v-model="time1"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo1"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="设备流水收益:">{{ diamond }} </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <page-table
      ref="dataTable1"
      :data="list1"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page1.currentPage1 - 1) * page1.pageSize1 + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>

      <el-table-column label="分润" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.type == 20">广告收益</el-link>
          <el-link type="danger" v-if="scope.row.type == 10"
            >商品流水收益</el-link
          >
        </template>
      </el-table-column>
      <el-table-column prop="price" label="分润金额" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="获得分润时间" align="center">
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { usehaveread, zslog, moneylog } from "@/request/api";
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
      type: "",
      type1: "",
      rollover: "",
      diamond: "",
      id: "",
      name: "",
      time: "",
      time1: "",
      list: [], // 列表
      list1: [], // 列表
      userList: [], // 列表

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      page1: {
        //分页信息
        currentPage1: 1, //当前页
        pageSize1: 10, //每页条数
        total1: 0, //总条数
      },
    };
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
    time1(newVal) {
      if (newVal == null) {
        this.time1 = [];
      }
    },
  },
  created() {
    let row = this.$route.query.row;
    // console.log(row);
    this.name = row.name;
    this.getList();
    this.getUserList();
    this.getUserList1();
  },
  mounted() {},
  computed: {},
  methods: {
    go() {
      this.$router.back();
    },
    showtable(row) {
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
    },
    getList() {
      let params = {
        page: this.page.currentPage,
        name: this.name,
        token: sessionStorage.getItem("token"),
      };
      usehaveread(params).then((res) => {
        // console.log(res.data.data);
        let arr = [];
        arr.push(res.data.data);
        // console.log(arr);
        this.userList = arr;
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    searchinfo() {
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        type: this.type1,
        time1: this.time[0],
        time2: this.time[1],
      };
      zslog(params).then((res) => {
        this.page.total = res.data.count;
        this.list = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        type: this.type1,
        time1: this.time[0],
        time2: this.time[1],
      };
      zslog(params).then((res) => {
        this.page.total = res.data.count;
        this.list = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page1.currentPage1 = page;
      this.page1.pageSize1 = size;
      this.getUserList1();
    },
    searchinfo1() {
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        type: this.type,
        s_time: this.time1[0],
        e_time: this.time1[1],
      };
      moneylog(params).then((res) => {
        this.page1.total1 = res.data.data.total;
        this.list1 = res.data.data.data;
        this.$refs.dataTable1.setPageInfo({
          total: this.page1.total1,
        });
      });
    },
    getUserList1() {
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        type: this.type,
        s_time: this.time1[0],
        e_time: this.time1[1],
      };
      moneylog(params).then((res) => {
        console.log(res.data.data);
        this.page1.total1 = res.data.data.total;
        this.list1 = res.data.data.data;
        this.$refs.dataTable1.setPageInfo({
          total: this.page1.total1,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
