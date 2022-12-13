<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item label="订单号">
            <el-input
              style="width: 180px"
              v-model="order_no"
              clearable
              placeholder="请输入订单号"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-input
              style="width: 180px"
              v-model="goods_name"
              clearable
              placeholder="请输入商品名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="时间" prop="title">
            <el-date-picker
              v-model="time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button
              v-if="checkPermission('operationsearch')"
              type="primary"
              icon="el-icon-search"
              @click="searchinfo"
              >搜索</el-button
            >
            <el-button @click="dao">导出</el-button>
          </el-form-item>
        </el-form>
      </div>
      <page-table
        ref="dataTable"
        :data="shoporder"
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
        <el-table-column
          prop="uid"
          fixed
          label="用户ID"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="order_no"
          fixed
          label="订单号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="goods_name"
          fixed
          label="商品名称"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="sku"
          fixed
          align="center"
          label="商品规格"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="price"
          fixed
          label="订单金额"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="postage_price"
          fixed
          label="邮费"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="coupon_price"
          fixed
          label="代金券"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="pay_price"
          fixed
          label="支付金额"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="pay_time"
          fixed
          align="center"
          label="支付时间"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          :resizable="false"
          v-if="checkPermission(['useredit', 'userdelete'])"
        >
          <template slot-scope="scope">
            <el-link
              v-if="scope.row.ex_status == 1"
              type="success"
              style="margin-left: 10px"
              >已通过</el-link
            >

            <el-link
              v-if="scope.row.ex_status == 2"
              type="danger"
              style="margin-left: 10px"
              >已拒绝</el-link
            >
            <el-link
              v-if="scope.row.ex_status == 0"
              @click="open(scope.row)"
              style="margin-left: 10px"
              >退款</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </div>
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
import { checkPermission } from "@/utils/permissions";
import { receRefund, refMoney } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "specialorder",
  components: {
    pageTable,
  },
  data() {
    return {
      census: [],
      shoporder: [],
      tableSelectList: [],
      order_no: "",
      goods_name: "",
      id: "",
      time: "",
      dialogVisible: false,
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  created() {
    this.shoporderlist();
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  mounted() {},
  methods: {
    dao() {
      this.token = sessionStorage.getItem("token");
      window.location.href =
        "https://testapi.yujian02.xyz/shopadmin/receRefundExp" +
        "?token=" +
        this.token +
        "&shop_type=" +
        1 +
        "&type=" +
        1 +
        "&goods_name=" +
        this.goods_name +
        "&order_no=" +
        this.order_no +
        "&time1=" +
        this.time[0] +
        "&time2=" +
        this.time[1];
    },
    async searchinfo() {
      this.page.page = 1;
      let res = await receRefund({
        token: sessionStorage.getItem("token"),
        shop_type: 1,
        type: 1,
        goods_name: this.goods_name,
        order_no: this.order_no,
        page: this.page.page,
        limit: this.page.limit,
        time1: this.time[0],
        time2: this.time[1],
      });
      if (res.data.code == 200) {
        this.shoporder = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.data.total,
        });
      }
    },
    async shoporderlist() {
      let res = await receRefund({
        token: sessionStorage.getItem("token"),
        shop_type: 1,
        type: 1,
        goods_name: this.goods_name,
        order_no: this.order_no,
        page: this.page.page,
        limit: this.page.limit,
        time1: this.time[0],
        time2: this.time[1],
      });
      if (res.data.code == 200) {
        this.shoporder = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.data.total,
        });
      }
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shoporderlist();
    },
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      let params = {
        ex_status: 1,
        order_id: this.id,
        token: sessionStorage.getItem("token"),
      };
      refMoney(params).then((res) => {
        let msg = res.data.msg;
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.shoporderlist();
          this.dialogVisible = false;
        } else {
          this.$message(msg);
          this.shoporderlist();
          this.dialogVisible = false;
        }
      });
      this.shoporderlist();
      this.dialogVisible = false;
    },

    refuse() {
      let params = {
        ex_status: 2,
        order_id: this.id,
        token: sessionStorage.getItem("token"),
      };
      refMoney(params).then((res) => {
        let msg = res.data.msg;
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.shoporderlist();
          this.dialogVisible = false;
        } else {
          this.$message(msg);
          this.shoporderlist();
          this.dialogVisible = false;
        }
      });
      this.shoporderlist();
      this.dialogVisible = false;
    },
    open(row) {
      this.id = row.order_id;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
