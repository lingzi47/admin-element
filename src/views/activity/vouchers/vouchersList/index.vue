<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="代金券名称" prop="name">
          <el-select v-model="name" placeholder="请选择" style="width: 150px">
            <el-option
              v-for="item in list"
              :value="item.name"
              :key="item.value"
              :label="item.name"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="面值" prop="price">
          <el-input
            v-model="price"
            clearable
            placeholder="请输入面值"
          ></el-input>
        </el-form-item>
        <el-form-item label="审核状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="float: right">
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
    <el-button type="primary" @click="open()" style="margin-bottom: 10px"
      >代金券添加</el-button
    >
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
      <el-table-column prop="name" label="代金券名称" align="center">
      </el-table-column>
      <el-table-column label="可使用商品" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.good == 99999">全部</span>
          <span v-if="scope.row.good == 1">预见专区</span>
          <span v-if="scope.row.good == 2">预见商城</span>
          <span v-if="scope.row.good == 3">本地生活</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="面值" align="center">
      </el-table-column>

      <el-table-column prop="overdue" label="有效期" align="center">
        <template slot-scope="scope">
          <span effect="dark" v-if="scope.row.overdue == 99999">永久</span>
          <span effect="dark" v-else>{{ scope.row.overdue }}</span>
        </template>
      </el-table-column>

      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-tag type="warning" effect="dark" v-if="scope.row.sta == 10"
            >待审核</el-tag
          >
          <el-tag type="success" effect="dark" v-if="scope.row.sta == 20"
            >已通过</el-tag
          >
          <el-tag type="danger" effect="dark" v-if="scope.row.sta == 30"
            >未通过</el-tag
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { couponlist } from "@/request/api";
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
      arr: [],
      list: [],
      name: "",
      price: "",
      sta: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {},
  created() {
    let params = {
      token: sessionStorage.getItem("token"),
      sta: 20,
    };
    couponlist(params).then((res) => {
      this.list = res.data.data;
    });
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口
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
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        sta: this.sta,
        price: this.price,
      };
      couponlist(params).then((res) => {
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
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        sta: this.sta,
        price: this.price,
      };
      couponlist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    userShow(row) {
      this.$router.push({
        path: "/userShow",
        query: {
          id: row.id,
        },
      });
    },
    nextUser(row) {
      this.$router.push({
        path: "/nextUser",
        query: {
          id: row.id,
        },
      });
    },
    editData(row) {
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此用户？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await deleteUser({
              id: rowData.id,
            });
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
