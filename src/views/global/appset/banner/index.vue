<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="审核状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="banner位置" prop="member">
          <el-select
            v-model="release_sta"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="未开启" value="10"></el-option>
            <el-option label="已开启" value="20"></el-option>
          </el-select>
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
      <el-table-column prop="name" label="banner位置" align="center">
      </el-table-column>
      <el-table-column prop="people" label="banner图片" align="center">
      </el-table-column>
      <el-table-column prop="people" label="排序" align="center">
      </el-table-column>
      <el-table-column prop="people" label="跳转页面" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-tag type="warning" effect="dark" v-if="scope.row.sta == 10"
            >待审核
          </el-tag>
          <el-tag type="success" effect="dark" v-if="scope.row.sta == 20"
            >已通过</el-tag
          >
          <el-tag type="danger" effect="dark" v-if="scope.row.sta == 30"
            >已拒绝</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
        </template>
      </el-table-column>
    </page-table>
  </div>
</template>

<script>
import { appuserList, userZisu, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],
      form: {
        username: "",
        member: "",
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
        username: this.form.username,
        id: this.form.id,
        member: this.form.member,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
      };
      appuserList(params).then((res) => {
        //console.log(res.data.data.member_count);
        this.arr = res.data.data.member_count;
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
