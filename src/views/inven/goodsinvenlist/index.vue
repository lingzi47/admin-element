<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="商品名称" prop="name">
          <el-input
            style="width: 250px"
            v-model="goods_name"
            clearable
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="name">
          <el-input
            style="width: 180px"
            v-model="id"
            clearable
            placeholder="请输入商品编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="name">
          <el-input
            style="width: 180px"
            v-model="name"
            clearable
            placeholder="请输入"
          ></el-input>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button
            type="primary"
            @click="dao(scope.row)"
            style="margin-left: 10px"
            >导出</el-button
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
      <el-table-column prop="id" label="商品编号" align="center">
      </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" align="center">
      </el-table-column>
      <el-table-column prop="number" label="仓库库存" align="center">
      </el-table-column>
      <el-table-column prop="price" label="进货单价" align="center">
      </el-table-column>
      <el-table-column prop="all_price" label="进货总价" align="center">
      </el-table-column>
      <el-table-column prop="name" label="供应商" align="center">
      </el-table-column>
    </page-table>
  </div>
</template>

<script>
import { goodsWare } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 列表
      name: "",
      id: "",
      goods_name: "",

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
    this.token = sessionStorage.getItem("token");
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    dao(row) {
      window.location.href =
        "https://y4.wjw.cool/admin/box/expOfficina" +
        "?token=" +
        this.token +
        "&number=" +
        this.num;
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
        tag_name: this.name,
        goods_name: this.goods_name,
        gid: this.id,
      };
      goodsWare(params).then((res) => {
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
        tag_name: this.name,
        goods_name: this.goods_name,
        gid: this.id,
      };
      goodsWare(params).then((res) => {
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
