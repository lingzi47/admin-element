<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="商品名称" prop="username">
          <el-input
            style="width: 180px"
            v-model="goods_name"
            clearable
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="赠送方式" prop="member">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部方式" value=""></el-option>
            <el-option label="首次赠送" value="2"></el-option>
            <el-option label="重复赠送" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态" prop="member">
          <el-select
            v-model="ex_status"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已通过" value="1"></el-option>
            <el-option label="未通过" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="注册时间" prop="time">
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
          <el-button type="primary" @click="add">新增</el-button>
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
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
      <el-table-column prop="goods_name" label="商品名称" align="center">
      </el-table-column>
      <el-table-column label="赠送会员时长" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.days }}日</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="赠送方式" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="ex_status" label="审核状态" align="center">
      </el-table-column>
      <el-table-column prop="ex_uname" label="审核人" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="editData(2, scope.row)"
            >修改</el-button
          >
          <el-button type="text" size="small" @click="deleteData(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { goodsListMem, goodsListdel } from "@/request/api";
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

    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            id: row.id,
            token: sessionStorage.getItem("token"),
          };
          goodsListdel(params).then((res) => {
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
