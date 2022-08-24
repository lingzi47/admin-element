<template>
  <div class="user">
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

      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>

      <el-table-column prop="created_at" label="创建时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.ex_status == 2"
            >已通过</el-link
          >
          <el-link type="danger" v-if="scope.row.ex_status == 3"
            >未通过</el-link
          >
          <el-link type="primary" v-if="scope.row.ex_status == 1"
            >待审核</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.ex_status == 1"
            @click="set(scope.row)"
            style="margin-left: 10px"
            >处理</el-link
          >
          <el-link
            type="success"
            v-if="scope.row.ex_status == 2"
            style="margin-left: 10px"
            >已通过</el-link
          >
          <el-link
            type="danger"
            v-if="scope.row.ex_status == 3"
            style="margin-left: 10px"
            >未通过</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- <el-dialog
      title="审核"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="是否允许该条信息审核通过" prop="role_name">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">拒绝</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog> -->
  </div>
</template>

<script>
import { boxProfitexList, configsta } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";

export default {
  name: "user",
  components: {
    pageTable,
    // editData,
    // fenRun,
    // upSet,
  },
  data() {
    return {
      sta: "",
      time: "",
      dialogVisible: false,
      userList: [], // 列表
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
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    // submitForm() {
    //   //console.log("成功");
    //   let params = {
    //     token: sessionStorage.getItem("token"),
    //     sta: 20,
    //     id: this.id,
    //   };
    //   configsta(params).then((res) => {
    //     if (res.data.code == 200) {
    //       this.$message.success("操作成功");
    //       this.dialogVisible = false;
    //       this.getUserList();
    //     }
    //   });
    // },

    // refuse() {
    //   let params = {
    //     token: sessionStorage.getItem("token"),
    //     sta: 30,
    //     id: this.id,
    //   };
    //   configsta(params).then((res) => {
    //     if (res.data.code == 200) {
    //       this.$message.success("操作成功");
    //       this.dialogVisible = false;
    //       this.getUserList();
    //     }
    //   });
    // },
    close() {
      this.dialogVisible = false;
    },

    set(row) {
      this.$router.push({
        path: "/fenrunstadt",
        query: {
          type: 1,
          row: row,
        },
      });
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
      boxProfitexList(params).then((res) => {
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
