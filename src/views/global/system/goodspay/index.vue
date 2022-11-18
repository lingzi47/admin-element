<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="租赁商id">
          <el-input
            style="width: 180px"
            v-model="lease_id"
            clearable
            placeholder="请输入租赁商id"
          ></el-input>
        </el-form-item>
        <el-form-item label="租赁商手机号">
          <el-input
            style="width: 180px"
            v-model="lease_phone"
            clearable
            placeholder="请输入租赁商手机号"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备编号">
          <el-input
            style="width: 180px"
            v-model="device_num"
            clearable
            placeholder="请输入设备编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="供货药房">
          <el-select
            v-model="name"
            @change="change"
            placeholder="请选择"
            style="width: 160px"
            clearable
          >
            <el-option
              v-for="item in list"
              :value="item.big_name"
              :label="item.big_name"
              :key="item.key"
            ></el-option>
          </el-select>
          <el-select
            v-model="pharmacy_id"
            placeholder="请选择"
            style="width: 160px"
            clearable
          >
            <el-option
              v-for="item in list1"
              :value="item.id"
              :label="item.name"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-select
            v-model="ex_status"
            placeholder="请选择"
            style="width: 160px"
            clearable
          >
            <el-option :value="1" label="待处理"></el-option>
            <el-option :value="2" label="处理中"></el-option>
            <el-option :value="3" label="已处理"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间">
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

      <el-table-column prop="lease_id" label="租赁商ID" align="center">
      </el-table-column>

      <el-table-column prop="lease_phone" label="租赁商手机号" align="center">
      </el-table-column>
      <el-table-column prop="device_num" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column prop="pharmacy_id" label="供货药房" align="center">
      </el-table-column>
      <el-table-column
        prop="pharmacy_phone"
        label="药房联系方式"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="address" label="设备位置" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="申请时间" align="center">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.ex_status == 2"
            >处理中</el-link
          >
          <el-link type="danger" v-if="scope.row.ex_status == 3"
            >已处理</el-link
          >
          <el-link type="primary" v-if="scope.row.ex_status == 1"
            >待处理</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >

          <el-link
            type="success"
            v-if="scope.row.ex_status == 2 || scope.row.ex_status == 1"
            style="margin-left: 10px"
            @click="set(scope.row)"
            >处理</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="处理"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="补货申请处理" prop="role_name"> </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">处理中</el-button>
        <el-button type="primary" @click="submitForm">已处理</el-button>
      </div>
    </el-dialog>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <!-- <fen-run ref="fenRun" />-->
    <!-- <up-set ref="upSet" /> -->
  </div>
</template>

<script>
import { handleEx, BoxReplen, medList, medName } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

import editData from "./components/editData.vue";

import upSet from "./components/upSet.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    // fenRun,
    upSet,
  },
  data() {
    return {
      sta: "",
      dialogVisible: false,
      id: "",
      lease_id: "",
      name: "",
      lease_phone: "",
      device_num: "",
      ex_status: "",
      pharmacy_id: "",
      time: "",
      userList: [], // 列表
      list: [],
      list1: [],
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
    name(value) {
      console.log(value);

      this.xiaolist();
    },
  },
  created() {
    this.getUserList(); //获取用户列表
    this.yaolist();
  },
  mounted() {},
  computed: {},
  methods: {
    yaolist() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      medList(params).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          this.list = res.data.data;
        }
      });
    },
    change() {
      this.xiaolist();
      this.pharmacy_id = "";
    },
    xiaolist() {
      let params = {
        token: sessionStorage.getItem("token"),
        name: this.name,
      };
      medName(params).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data);
          this.list1 = res.data.data;
        }
      });
    },
    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        status: 3,
        id: this.id,
      };
      handleEx(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
      this.dialogVisible = false;
      this.getUserList();
    },
    set(row) {
      this.dialogVisible = true;
      //console.log(row.id);
      this.id = row.id;
    },
    refuse() {
      let params = {
        token: sessionStorage.getItem("token"),
        status: 2,
        id: this.id,
      };
      handleEx(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },
    close() {
      this.dialogVisible = false;
    },

    showtable(row) {
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
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
        // page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        lease_id: this.lease_id,
        lease_phone: this.lease_phone,
        device_num: this.device_num,
        ex_status: this.ex_status,
        pharmacy_id: this.pharmacy_id,
        ex_status: this.ex_status,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      BoxReplen(params).then((res) => {
        this.page.total = res.data.data.total;
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
        lease_id: this.lease_id,
        lease_phone: this.lease_phone,
        device_num: this.device_num,
        ex_status: this.ex_status,
        pharmacy_id: this.pharmacy_id,
        ex_status: this.ex_status,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      BoxReplen(params).then((res) => {
        this.page.total = res.data.data.total;

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
