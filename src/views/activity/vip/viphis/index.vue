<template>
  <div class="user">
    <el-button type="primary" @click="go()">返回上一级</el-button>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>历史</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column
        label="序号"
        align="center"
        width="80"
        fixed
        :resizable="false"
      >
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="活动" align="center">
        <template slot-scope="scope"
          ><span
            >普通会员商城消费单笔满({{ scope.row.money }})元赠送MT黑卡会员({{
              scope.row.days
            }})日</span
          >
        </template>
      </el-table-column>
      <el-table-column label="活动时间" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.at_start_time }}---{{ scope.row.at_end_time }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="提交时间" align="center">
      </el-table-column>
      <el-table-column prop="ex_uname" label="审核人" align="center">
      </el-table-column>
      <el-table-column prop="ex_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column prop="ex_status" label="审核状态" align="center">
      </el-table-column>
    </page-table>
  </div>
</template>

<script>
import { paylist, paydel } from "@/request/api";
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

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },

  created() {
    this.getlist(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    go() {
      this.$router.go(-1);
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getlist();
    },

    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
        type: 2,
      };
      paylist(params).then((res) => {
        //console.log(res.data.data.data);
        this.userList = res.data.data.data;
        this.page.total = res.data.data.total;
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
