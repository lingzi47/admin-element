<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="id" prop="uid">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入id"
          ></el-input>
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
      <el-table-column
        label="序号"
        align="center"
        width="130"
        fixed
        :resizable="false"
      >
        <template slot-scope="scope">
          <span>{{ (page.page - 1) * page.limit + scope.$index + 1 }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="uid" label="id" align="center" fixed>
      </el-table-column>

      <el-table-column
        prop="nickname"
        fixed
        label="用户名称"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="phone"
        fixed
        align="center"
        label="联系方式"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="price"
        fixed
        label="价格"
        align="center"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="buy_time"
        fixed
        label="购买时间"
        align="center"
        :resizable="false"
      ></el-table-column>

      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
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
  </div>
</template>

<script>
import { tuilist, tuiliststa } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible: false,

      uid: "",
      id: "",
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
  watch: {
    buy_time(newVal) {
      if (newVal == null) {
        this.buy_time = [];
      }
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
      tuiliststa(params).then((res) => {
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
      tuiliststa(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    close() {
      this.dialogVisible = false;
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
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        uid: this.uid,
        sta: 10,
      };
      tuilist(params).then((res) => {
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
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        uid: this.uid,
        sta: 10,
      };
      tuilist(params).then((res) => {
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
