<template>
  <div class="user">
    <el-button type="primary" @click="go()">返回上一级</el-button>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>抽奖列表历史</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <div class="block-quote">
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

        <el-table-column prop="create_time" label="提交时间" align="center">
        </el-table-column>
        <el-table-column prop="sta_name" label="审核人" align="center">
        </el-table-column>
        <el-table-column prop="sta_time" label="审核时间" align="center">
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
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
          </template>
        </el-table-column>
      </page-table>
      <!-- 新增编辑弹窗 -->
    </div>
  </div>
</template>

<script>
import { luckhislist } from "@/requestw/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
export default {
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: "", //总条数
      },
    };
  },

  created() {
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
    go() {
      this.$router.go(-1);
    },
    getUserList() {
      //console.log(this.form.time);

      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      luckhislist(params).then((res) => {
        //console.log(res.data.data);
        this.userList = res.data.data;
        //console.log(this.userList);
        this.page.total = res.data.count;
        //console.log(res.data.count);
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },

    handleClick(row) {
      //console.log(row);
      this.$router.push({
        path: "/lotteryhisshow",
        query: {
          list: row.luckjson,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
