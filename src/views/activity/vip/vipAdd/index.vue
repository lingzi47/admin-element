<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>消费送会员活动</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <el-form :inline="true">
      <el-form-item style="float: right">
        <el-button type="primary" @click="add()">添加</el-button>
        <el-button type="primary" @click="lishi()">历史列表</el-button>
      </el-form-item>
    </el-form>

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

      <el-table-column label="活动" align="center">
        <template slot-scope="scope">
          <span
            >普通用户商城消费单笔满{{ scope.row.money }}元赠送黑卡会员{{
              scope.row.days
            }}日</span
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

      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.ex_status == 1" type="success">已通过</el-tag>
          <el-tag v-if="scope.row.ex_status == 2" type="danger">已拒绝</el-tag>
          <el-tag v-if="scope.row.ex_status == 0" type="info">待审核</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="open(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <edit-data ref="editData" />
  </div>
</template>
<script>
import editData from "./components/editData.vue";
import { paylist, paydel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
export default {
  components: {
    editData,
    pageTable,
  },
  data() {
    return {
      userList: [],
      num: "",
      need_num: "",
      id: "",
      coupon_id: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: "", //总条数
      },
    };
  },
  created() {
    this.getlist();
  },
  computed: {},
  methods: {
    lishi() {
      this.$router.push({
        path: "/viphis",
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getlist();
    },
    add() {
      this.$refs.editData.show();
    },
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
        type: 1,
      };
      paylist(params).then((res) => {
        this.userList = res.data.data.data;
        this.page.total = res.data.data.total;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    open(row) {
      this.$confirm("此操作将永久删除, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          let params = {
            token: sessionStorage.getItem("token"),
            id: id,
          };
          paydel(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("删除成功");
              this.getlist();
            } else {
              this.$message.error(res.data.msg);
              this.getlist();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
};
</script>
<style  scoped>
.xun {
  font-size: 14px;
  color: rgb(151, 151, 151);
  padding-bottom: 5px;
  padding-top: 10px;
  margin-left: 200px;
}
.tab {
  margin-left: 50px;
}
.bt {
  padding: 10px 30px;
  margin-top: 100px;
  margin-left: 600px;
}

.xunre {
  margin: 50px 400px;
}
.tijiao {
  margin-top: 110px;
}
</style>
