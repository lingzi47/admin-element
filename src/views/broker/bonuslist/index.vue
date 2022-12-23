<template>
  <div class="user">
    <!-- 废弃页面 -->

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

      <el-table-column prop="uid" label="用户id" align="center">
      </el-table-column>

      <el-table-column prop="box_name" label="租赁号" align="center">
      </el-table-column>
      <el-table-column prop="tid" label="来源id" align="center">
      </el-table-column>
      <el-table-column prop="price" label="钻石数" align="center">
      </el-table-column>
      <el-table-column prop="is_give" label="是否发放" align="center">
        <template slot-scope="scope">
          <el-link type="danger" v-if="scope.row.is_give == 10">未发放</el-link>
          <el-link type="success" v-if="scope.row.is_give == 20"
            >已发放</el-link
          >
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="updated_at" label="发放时间" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.is_give == 10">--</el-link>
          <el-link v-if="scope.row.is_give == 20">{{
            scope.row.updated_at
          }}</el-link>
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { bonuslist, goodsListdel } from "@/request/api";
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
        } else {
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

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      bonuslist(params).then((res) => {
        this.page.total = res.data.count;
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
