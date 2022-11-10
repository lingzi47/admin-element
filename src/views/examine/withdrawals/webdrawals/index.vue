<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="团队" prop="member">
          <el-select v-model="team" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="全国" value="1"></el-option>
            <el-option label="大连" value="2"></el-option>
            <el-option label="大庆" value="3"></el-option>
            <el-option label="本溪" value="5"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="处理状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="购买价格" prop="box_type">
          <el-select
            v-model="buy_price"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部" value=""></el-option>
            <el-option label="3750" value="3750"></el-option>
            <el-option label="2950" value="2950"></el-option>
            <el-option label="2500" value="2500"></el-option>
            <el-option label="1875" value="1875"></el-option>
            <el-option label="1700" value="1700"></el-option>
            <el-option label="1580" value="1580"></el-option>
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
    <!-- <el-button type="primary" @click="open()" style="margin-bottom: 10px"
      >导出</el-button
    > -->
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
      <el-table-column prop="buy_uid" label="用户id" align="center">
      </el-table-column>
      <el-table-column prop="buy_name" label="购买用户" align="center">
      </el-table-column>
      <el-table-column prop="buy_price" label="购买价格" align="center">
      </el-table-column>
      <el-table-column label="购买区域" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.team == 1">全国</el-link>
          <el-link v-if="scope.row.team == 2">大连</el-link>
          <el-link v-if="scope.row.team == 3">大庆</el-link>
          <el-link v-if="scope.row.team == 4">北京</el-link>
          <el-link v-if="scope.row.team == 5">本溪</el-link>
          <el-link type="danger" v-if="scope.row.team == null">暂无</el-link>
        </template></el-table-column
      >
      <el-table-column
        prop="team_uid"
        width="140px"
        label="团队负责人ID"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="team_phone"
        width="140px"
        label="团队负责人手机"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="team_bank"
        label="团队负责人卡号"
        width="170px"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="team_name"
        width="140px"
        label="团队负责人姓名"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="commission" label="奖金" align="center">
      </el-table-column>
      <el-table-column prop="buy_time" label="购买时间" align="center">
      </el-table-column>
      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.sta == 20">已通过</span>
          <span v-if="scope.row.sta == 30">已拒绝</span>
          <span v-if="scope.row.sta == 10">待审核</span>
        </template>
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button
            @click="set(scope.row)"
            size="small"
            type="danger"
            v-if="scope.row.sta == 10"
            >通过</el-button
          >
          <el-button
            @click="set1(scope.row)"
            size="small"
            type="info"
            v-if="scope.row.sta == 10"
            >拒绝</el-button
          >
          <el-button type="success" size="small" v-if="scope.row.sta == 20"
            >已通过</el-button
          >
          <el-button type="warning" size="small" v-if="scope.row.sta == 30"
            >已拒绝</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="通过"
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
        <el-button @click="refuse">取消</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="拒绝"
      :visible.sync="dialogVisible1"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="是否允许该条信息审核拒绝" prop="role_name">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse1">取消</el-button>
        <el-button type="primary" @click="submitForm1">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { manyboxpaylist, payliststa } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表

      team: "",
      buy_price: "",
      sta: "",
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
    let token = sessionStorage.getItem("token");
    this.token = token;
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
      };
      payliststa(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
      this.dialogVisible = false;
      this.getUserList();
    },
    submitForm1() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 30,
        id: this.id,
      };
      payliststa(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.getUserList();
        }
      });
      this.dialogVisible = false;
      this.getUserList();
      this.dialogVisible1 = false;
    },
    refuse() {
      this.dialogVisible = false;
    },
    refuse1() {
      this.dialogVisible = false;
      this.dialogVisible1 = false;
    },
    close() {
      this.dialogVisible = false;
    },
    set1(row) {
      this.dialogVisible1 = true;
      this.id = row.id;
    },
    set(row) {
      this.dialogVisible = true;
      this.id = row.id;
    },
    checkPermission,
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    getSelection(select) {
      this.tableSelectList = select;
    },
    searchinfo() {
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        team: this.team,
        sta: this.sta,
        buy_price: this.buy_price,
        time1: this.time[0],
        time2: this.time[1],
      };
      manyboxpaylist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        team: this.team,
        sta: this.sta,
        buy_price: this.buy_price,
        time1: this.time[0],
        time2: this.time[1],
      };
      manyboxpaylist(params).then((res) => {
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
