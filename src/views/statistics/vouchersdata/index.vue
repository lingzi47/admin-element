<template>
  <div class="user">
    <p>代金券发放统计</p>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="getUserList"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table ref="dataTable" border :data="userList" style="width: 40%">
      <el-table-column prop="name" label="代金券名称" align="center">
      </el-table-column>
      <el-table-column prop="system" label="系统发放数量" align="center">
      </el-table-column>
      <el-table-column prop="auto" label="手动发放数量" align="center">
      </el-table-column>
      <el-table-column prop="all_count" label="用户领取总计" align="center">
      </el-table-column>
    </el-table>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.timee"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="getList"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table ref="dataTable" border :data="List" style="width: 40%">
      <el-table-column prop="name" label="代金券名称" align="center">
      </el-table-column>

      <el-table-column prop="use" label="使用" align="center">
      </el-table-column>
    </el-table>
    <!-- <p>代金券使用统计</p>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="getUserList"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table
      ref="dataTable"
      style="width: 40%"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{ (page - 1) * page.pageSize + scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="代金券名称" align="center">
      </el-table-column>
      <el-table-column prop="people" label="使用范围" align="center">
      </el-table-column>

      <el-table-column prop="people" label="使用总数" align="center">
      </el-table-column>
    </el-table>
    <p>代金券未使用统计</p>
    <el-table
      ref="dataTable"
      style="width: 40%"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column prop="name" label="代金券名称" align="center">
      </el-table-column>
      <el-table-column prop="people" label="使用范围" align="center">
      </el-table-column>

      <el-table-column prop="people" label="未使用数量" align="center">
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import { daicoup, userZisu, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      rolesList: [], //角色列表
      userList: [], // 用户列表
      List: [], // 用户列表
      arr: [],
      sta: "",

      form: {
        time: "",
        timee: "",
      },
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
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
    "form.timee"(newVal) {
      if (newVal == null) {
        this.form.timee = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
    this.getList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      //console.log("成功");
    },

    refuse() {
      //console.log("拒绝");
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
    searchinfo() {},
    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),

        s_time: this.form.time[0],
        e_time: this.form.time[1],
      };
      daicoup(params).then((res) => {
        console.log(res.data);

        this.userList = res.data.data;
      });
    },
    getList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),

        s_use_time: this.form.timee[0],
        e_use_time: this.form.timee[1],
      };
      daicoup(params).then((res) => {
        console.log(res.data);

        this.List = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
