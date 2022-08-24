<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="审核状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="释放状态" prop="member">
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
        <el-form-item label="释放方式" prop="member">
          <el-select
            v-model="release_type"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部方式" value=""></el-option>
            <el-option label="手动释放" value="10"></el-option>
            <el-option label="系统释放" value="20"></el-option>
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
      >手动释放</el-button
    >
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
      <el-table-column label="封面图" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.banner" width="60" />
        </template>
      </el-table-column>
      <el-table-column prop="people" label="参与人数" align="center">
      </el-table-column>
      <el-table-column prop="xn_people" label="虚拟参与人数" align="center">
      </el-table-column>
      <el-table-column prop="money" label="钻石数" align="center">
      </el-table-column>
      <el-table-column prop="xn_money" label="虚拟钻石数" align="center">
      </el-table-column>
      <el-table-column prop="due_time" label="截止时间" align="center">
      </el-table-column>
      <el-table-column label="释放状态" align="center">
        <template slot-scope="scope">
          <el-tag
            type="warning"
            effect="dark"
            v-if="scope.row.release_sta == 10"
            >未开启
          </el-tag>
          <el-tag
            type="success"
            effect="dark"
            v-if="scope.row.release_sta == 20"
            >已开启</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column label="释放方式" align="center">
        <template slot-scope="scope">
          <el-tag
            type="warning"
            effect="dark"
            v-if="scope.row.release_type == 10"
            >手动释放
          </el-tag>
          <el-tag
            type="success"
            effect="dark"
            v-if="scope.row.release_type == 20"
            >系统释放</el-tag
          >
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="释放时间" align="center">
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column prop="release_time" label="开启时间" align="center">
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
            >查看</el-button
          >
          <el-button @click="dao(scope.row)" type="text" size="small"
            >导出</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { releaselist, userZisu, userStart, userBlm } from "@/request/api";
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
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],

      release_type: "",
      release_sta: "",
      sta: "",
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
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口
    open() {
      this.$refs.editData.show();
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
      console.log(this.time);

      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        release_type: this.release_type,
        sta: this.sta,
        release_sta: this.release_sta,
        time1: this.time[0],
        time2: this.time[1],
      };
      releaselist(params).then((res) => {
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
    getUserList() {
      if (this.time === null) {
        let time = "";
        this.time == time;
        //console.log(this.form.time);
      }
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        release_type: this.release_type,
        sta: this.sta,
        release_sta: this.release_sta,
        time1: this.time[0],
        time2: this.time[1],
      };
      releaselist(params).then((res) => {
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
    handleClick(row) {
      //console.log(row);
      this.$router.push({
        path: "/diamondListshow",
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
            } else {
              this.$message.error(res.data.msg);
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
