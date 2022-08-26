<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="发放方式" prop="member">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="系统发放" value="20"></el-option>
            <el-option label="手动发放" value="10"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="释放总数">{{ all_sum }} </el-form-item>
        <el-form-item label="释放钻石总数"> {{ all_num }}</el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="getUserList"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>

    <el-table ref="dataTable" :data="userList">
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="count" label="释放数量" align="center">
      </el-table-column>
      <el-table-column prop="sum" label="释放钻石数" align="center">
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="set(scope.row)" type="text" size="small"
            >查看详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      class="AddDialog"
      title="钻石雨详情"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
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

        <el-table-column prop="setid" label="钻石雨" align="center">
        </el-table-column>
        <el-table-column prop="sevid" label="钻石池" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="参与人数" align="center">
        </el-table-column>
        <el-table-column prop="uid" label="释放时间" align="center">
        </el-table-column>
        <el-table-column prop="uid" label="释放钻石数" align="center">
        </el-table-column>
      </page-table>
    </el-dialog>
  </div>
</template>

<script>
import { rainCount, userZisu, userStart, userBlm } from "@/request/api";
import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表
      type: "",
      all_num: "",
      all_sum: "",
      dialogVisible: false,
      form: {
        time: "",
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
    var date = new Date();
    var s1 =
      date.getFullYear() +
      "-" +
      (date.getMonth() + 1) +
      "-" +
      (date.getDate() - 1);
    var e1 =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let arr = [];
    arr.push(s1);
    arr.push(e1);
    this.form.time = arr; //时间段的数组；第一项表示开始时间，第二项表示结束时间
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    //监听表格多选
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getList();
    },
    set(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    getUserList() {
      //console.log(this.form.time);

      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: this.type,

        s_time: this.form.time[0],
        e_time: this.form.time[1],
      };
      rainCount(params).then((res) => {
        console.log(res.data);

        this.all_num = res.data.all_data.all_num;
        this.all_sum = res.data.all_data.all_sum;
        this.userList = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
