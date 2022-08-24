<template>
  <div class="user">
    <!-- 废弃页面 -->
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="租赁人id" prop="username">
          <el-input
            style="width: 180px"
            v-model="goods_name"
            clearable
            placeholder="请输入租赁人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="租赁人手机号" prop="username">
          <el-input
            style="width: 180px"
            v-model="goods_name"
            clearable
            placeholder="请输入租赁人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="购买服务" prop="is_show">
          <el-select v-model="goods_name" clearable placeholder="请选择">
            <el-option label="全部" value=""></el-option>
            <el-option label="三年租赁人" value="10"></el-option>
            <el-option label="五年租赁人" value="20"></el-option>
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
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="goods_name" label="租赁人id" align="center">
      </el-table-column>

      <el-table-column prop="type" label="租赁人手机号" align="center">
      </el-table-column>
      <el-table-column
        prop="created_at"
        label="推荐人设备租赁号"
        align="center"
      >
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { goodsListMem, goodsListdel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表

      goods_name: "",
      type: "",
      time: "",
      ex_status: "",

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
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    add() {
      this.$refs.editData.show(1, {});

      if (pid !== 0) {
        if (zid == x) {
          console.log("不可绑定");
        } else {
          console.log("zid=y", 可以绑定);
        }
      } else {
        return;
      }
    },
    editData(type, row) {
      let rowData = row;
      // 1:新增，2:编辑
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
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
        goods_name: this.goods_name,
        type: this.type,
        ex_status: this.ex_status,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      goodsListMem(params).then((res) => {
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
        goods_name: this.goods_name,
        type: this.type,
        ex_status: this.ex_status,
      };
      goodsListMem(params).then((res) => {
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
