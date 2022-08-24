<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="审核状态" prop="member">
          <el-select
            v-model="form.ex_status"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="0"></el-option>
            <el-option label="已通过" value="1"></el-option>
            <el-option label="未通过" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="版本号" prop="member">
          <el-input
            style="width: 180px"
            v-model="form.version"
            clearable
            placeholder="请输入版本号"
          ></el-input>
        </el-form-item>
        <el-form-item label="审核人" prop="member">
          <el-input
            style="width: 180px"
            v-model="form.ex_name"
            clearable
            placeholder="请输入版本号"
          ></el-input>
        </el-form-item>
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
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="getUserList"
            >查询</el-button
          >
          <el-button type="primary" @click="open()" style="margin-bottom: 10px"
            >添加</el-button
          >
        </el-form-item>
      </el-form>
    </div>

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
      <el-table-column prop="version" label="版本号" align="center">
      </el-table-column>
      <el-table-column prop="url" label="版本地址" align="center">
      </el-table-column>

      <el-table-column prop="created_at" label="版本提交时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" prop="ex_status" align="center">
      </el-table-column>
      <el-table-column prop="ex_name" label="审核人" align="center">
      </el-table-column>
      <el-table-column prop="ex_time" label="审核时间" align="center">
      </el-table-column>

      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { versionlist, userZisu, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],
      form: {
        version: "",
        ex_name: "",
        ex_status: "",
        time: "",
        id: "",
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
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    open() {
      this.$refs.editData.show();
    },
    handleClick(row) {
      this.$router.push({
        path: "/versionshow",
        query: {
          id: row.id,
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
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    getUserList() {
      if (this.form.time === null) {
        let time = "";
        this.form.time == time;
        //console.log(this.form.time);
      }
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        version: this.form.version,
        ex_name: this.form.ex_name,
        ex_status: this.form.ex_status,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
      };
      versionlist(params).then((res) => {
        //console.log(res.data.data.member_count);

        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    userShow(row) {
      //console.log(row);
      this.$router.push({
        path: "/userShow",
        query: {
          id: row.id,
        },
      });
    },
    nextUser(row) {
      //console.log(row);
      this.$router.push({
        path: "/nextUser",
        query: {
          id: row.id,
        },
      });
    },
    editData(row) {
      //console.log(row);
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此用户？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await deleteUser({
              id: rowData.id,
            });
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
