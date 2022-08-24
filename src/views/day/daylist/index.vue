<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="日志类型" prop="member">
          <el-select v-model="status" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已通过" value="1"></el-option>
            <el-option label="未通过" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间" prop="time">
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
      >导出</el-button
    >
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="日志级别" align="center">
      </el-table-column>
      <el-table-column prop="type" label="日志类型" align="center">
      </el-table-column>
      <el-table-column prop="module" label="日志模块" align="center">
      </el-table-column>
      <el-table-column prop="route" label="访问路由" align="center">
      </el-table-column>
      <el-table-column prop="old_data" label="修改前历史数据" align="center">
      </el-table-column>
      <el-table-column label="日志描述" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="operator" label="操作人" align="center">
      </el-table-column>
      <el-table-column prop="ip" label="操作人ip" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
      </el-table-column>
    </page-table>
    <el-dialog
      title="日志描述"
      :visible.sync="dialogVisible"
      width="600px"
      :close-on-click-modal="false"
      @close="close"
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
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { userlog, diaExamine, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],
      ex_remark: "",
      uname: "",
      details: "",
      status: "",
      dialogVisible: false,
      dialogVisible1: false,
      time: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
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
    handleClick(row) {
      //console.log(row.details);
      this.details = row.details;
      this.dialogVisible = true;
    },
    submitForm() {
      this.dialogVisible = false;
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
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    searchinfo() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        // uname: this.username,
        // status: this.status,
        // s_time: this.time[0],
        // e_time: this.time[1],
      };
      userlog(params).then((res) => {
        //console.log(res.data.data.data);

        this.page.total = res.data.data.total;
        //console.log(res.data.data.total);
        //console.log("总条数", this.page.total);
        this.page.currentPage = res.data.data.current_page;
        //console.log(res.data.data.current_page);
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        // uname: this.username,
        // status: this.status,
        // s_time: this.time[0],
        // e_time: this.time[1],
      };
      userlog(params).then((res) => {
        //console.log(res.data.data.data);

        this.page.total = res.data.data.total;
        //console.log(res.data.data.total);
        //console.log("总条数", this.page.total);
        this.page.currentPage = res.data.data.current_page;
        //console.log(res.data.data.current_page);
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
