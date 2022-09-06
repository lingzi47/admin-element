<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form1">
          <el-form-item label="租赁商ID">
            <el-input
              style="width: 180px"
              v-model="uid"
              clearable
              placeholder="请输入租赁商ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="推荐人设备租赁号">
            <el-input
              style="width: 180px"
              v-model="box_pidname"
              clearable
              placeholder="请输入推荐人设备租赁号"
            ></el-input>
          </el-form-item>
          <el-form-item label="租赁服务">
            <el-select
              style="width: 180px"
              v-model="box_type"
              clearable
              placeholder="请选择租赁服务"
            >
              <el-option label="三年" :value="1"></el-option>
              <el-option label="五年" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="订单状态" prop="pay_status">
            <el-select
              style="width: 180px"
              v-model="pay_status"
              clearable
              placeholder="请选择订单状态"
            >
              <el-option label="待付款" :value="10"></el-option>
              <el-option label="已付款" :value="20"></el-option>
              <el-option label="付款失败" :value="30"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="支付时间" prop="time">
            <el-date-picker
              v-model="time"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="收入合计:">{{ allprice }} 元</el-form-item>
          <el-form-item style="float: right">
            <el-button
              v-if="checkPermission('usersearch')"
              type="primary"
              icon="el-icon-search"
              @click="search"
              >查询</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <page-table
        ref="dataTable"
        :data="shoporder"
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{
              (page.currentPage - 1) * page.pageSize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="box_name"
          label="设备租赁号"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="box_pidname"
          label="推荐人设备租赁号"
          align="center"
        ></el-table-column>
        <el-table-column label="租赁人数" align="center">
          <template slot-scope="scope">
            <el-link @click="handleClick(scope.row)">{{
              scope.row.count
            }}</el-link>
          </template>
        </el-table-column>
        <el-table-column label="租赁服务时长" align="center">
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.box_type == 1"
              >三年</el-link
            >
            <el-link type="danger" v-if="scope.row.box_type == 2">五年</el-link>
          </template></el-table-column
        >
        <el-table-column label="订单状态" align="center">
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.pay_status == 20"
              >已支付</el-link
            >
            <el-link type="primary" v-if="scope.row.pay_status == 10"
              >未支付</el-link
            >
            <el-link type="danger" v-if="scope.row.pay_status == 30"
              >支付失败</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          prop="pay_time"
          label="支付时间"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="pay_price"
          label="交易金额"
          align="center"
        ></el-table-column>
      </page-table>
      <el-dialog
        title="账户信息"
        :visible.sync="dialogVisible"
        width="600px"
        :close-on-click-modal="false"
        @close="close"
      >
        <el-table ref="dataTable" :data="List" border>
          <el-table-column label="序号" align="center">
            <template slot-scope="scope">
              <span>{{
                (page.currentPage - 1) * page.pageSize + scope.$index + 1
              }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="uid" label="用户id" align="center">
          </el-table-column>

          <el-table-column prop="phone" label="联系方式" align="center">
          </el-table-column>
          <el-table-column prop="share" label="分润占比" align="center">
          </el-table-column>

          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="edit(scope.row)"
                >编辑</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确认</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { orderall, financeindex, shareInfo } from "@/request/api";
import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      uid: "",
      box_pidname: "",
      dialogVisible: false,
      box_type: "",
      pay_status: "",

      allprice: "",
      shoporder: [],
      box_name: "",
      time: "",
      List: [], // 列表
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
    this.getUserList();
  },
  mounted() {},
  methods: {
    handleClick(row) {
      console.log(row);
      this.box_name = row.box_name;
      this.getList();
    },
    getList() {
      let params = {
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
      };
      shareInfo(params).then((res) => {
        console.log(res);
        this.List = res.data.data;
        console.log(this.List);
      });
      this.dialogVisible = true;
    },
    submitForm() {
      this.dialogVisible = false;
    },

    close() {
      this.dialogVisible = false;
    },
    checkPermission,
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    search() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        page: 1,
        limit: this.page.pageSize,
        pay_status: this.pay_status,
        uid: this.uid,
        box_pidname: this.box_pidname,
        box_type: this.box_type,
        time1: this.time[0],
        time2: this.time[1],
      };
      orderall(params).then((res) => {
        this.page.total = res.data.count;
        this.shoporder = res.data.data;
        this.allprice = res.data.allprice;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        page: this.page.currentPage,
        limit: this.page.pageSize,
        pay_status: this.pay_status,
        uid: this.uid,
        box_pidname: this.box_pidname,
        box_type: this.box_type,
        time1: this.time[0],
        time2: this.time[1],
      };
      orderall(params).then((res) => {
        //console.log(res.data.data);
        this.page.total = res.data.count;
        this.shoporder = res.data.data;
        this.allprice = res.data.allprice;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },

    open() {
      11;
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
