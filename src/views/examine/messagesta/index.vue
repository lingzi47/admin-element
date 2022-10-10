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
      <el-table-column label="内容" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">{{
            scope.row.content | ellipsis
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="推送对象" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.user_type == 1">C级推广员</el-link>
          <el-link v-if="scope.row.user_type == 2">C级,B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 3">C级,B级,A级推广员</el-link>
          <el-link v-if="scope.row.user_type == 4">B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 5">C级,B级推广员</el-link>
          <el-link v-if="scope.row.user_type == 6">A级推广员</el-link>
          <el-link v-if="scope.row.user_type == 7">普通用户</el-link>
          <el-link v-if="scope.row.user_type == 8">全部用户</el-link>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.sta == 10"
            @click="set(scope.row)"
            style="margin-left: 10px"
            >处理</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
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
    </el-dialog>
    <el-dialog
      title="内容"
      :visible.sync="dialogVisible1"
      width="600px"
      :close-on-click-modal="false"
      @close="close1"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="" prop="">
              {{ details }}
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { newsindex, newssta } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible1: false,
      details: "",
      dialogVisible: false,
      uid: "",
      tel: "",
      pid: "",
      box_type: "",
      ex_status: "1",
      buy_time: "",
      userList: [], // 列表
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {},
  filters: {
    ellipsis(value) {
      if (!value) return "";
      if (value.length > 5) {
        return value.slice(0, 5) + "...";
      }
      return value;
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      //console.log("成功");
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
      };
      newssta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    refuse() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 30,
        id: this.id,
      };
      newssta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },
    handleClick(row) {
      this.details = row.content;
      this.dialogVisible1 = true;
    },

    close() {
      this.dialogVisible = false;
    },
    close1() {
      this.dialogVisible1 = false;
    },
    set(row) {
      this.dialogVisible = true;
      //console.log(row.id);
      this.id = row.id;
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
        sta: 10,
      };
      newsindex(params).then((res) => {
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
