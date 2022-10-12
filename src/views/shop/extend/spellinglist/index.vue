<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item label="id">
            <el-input
              style="width: 180px"
              v-model="id"
              clearable
              placeholder="请输入id"
            ></el-input>
          </el-form-item>
          <el-form-item label="购买价格" prop="box_type">
            <el-select
              v-model="price"
              placeholder="请选择"
              style="width: 150px"
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="2500" value="2500"></el-option>
              <el-option label="1875" value="1875"></el-option>
              <el-option label="1700" value="1700"></el-option>
              <el-option label="1580" value="1580"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="购买方式" prop="box_type">
            <el-select
              v-model="buy_type"
              placeholder="请选择"
              style="width: 150px"
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="前台购买" value="10"></el-option>
              <el-option label="后台购买" value="20"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核状态" prop="box_type">
            <el-select v-model="sta" placeholder="请选择" style="width: 150px">
              <el-option label="全部" value=""></el-option>
              <el-option label="待审核" value="10"></el-option>
              <el-option label="通过" value="20"></el-option>
              <el-option label="拒绝" value="30"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="拼单状态" prop="box_type">
            <el-select
              v-model="is_pin"
              placeholder="请选择"
              style="width: 150px"
            >
              <el-option label="全部" value=""></el-option>
              <el-option label="已拼成" value="10"></el-option>
              <el-option label="未拼成" value="20"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button
              v-if="checkPermission('operationsearch')"
              type="primary"
              icon="el-icon-search"
              @click="searchinfo"
              >搜索</el-button
            >
            <el-button type="primary" @click="add">添加</el-button>
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
          label="id"
          align="center"
          :resizable="false"
        ></el-table-column>
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
          fixed
          label="所属团队"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link v-if="scope.row.box_team == 1">全国</el-link>
            <el-link v-if="scope.row.box_team == 2">大连</el-link>
            <el-link v-if="scope.row.box_team == 3">大庆</el-link>
            <el-link type="danger" v-if="scope.row.box_team == null"
              >暂无</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          fixed
          label="拼单状态"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.is_pin == 10"
              >已拼成</el-link
            >
            <el-link type="danger" v-if="scope.row.is_pin == 20"
              >未拼成</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          prop="price"
          fixed
          label="价格"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="box_name"
          fixed
          label="设备租赁号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="buy_type"
          fixed
          label="购买方式"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link type="success" v-if="scope.row.buy_type == 10"
              >前台购买</el-link
            >
            <el-link type="danger" v-if="scope.row.buy_type == 20"
              >后台购买</el-link
            >
          </template></el-table-column
        >
        <el-table-column
          prop="buy_time"
          fixed
          label="购买时间"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          fixed
          label="审核状态"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
            <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
            <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          </template></el-table-column
        >
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          :resizable="false"
          width="180px"
        >
          <template slot-scope="scope">
            <el-link
              type="success"
              v-if="scope.row.hetong == 2"
              style="margin-left: 10px"
              @click="fenrun(1, scope.row)"
              >上传合同</el-link
            >
            <el-link
              type="danger"
              v-if="scope.row.hetong == 1"
              style="margin-left: 10px"
              @click="fenrun(2, scope.row)"
              >修改合同</el-link
            >
            <el-link
              type="primary"
              v-if="scope.row.hetong == 1"
              style="margin-left: 10px"
              @click="fenrun(3, scope.row)"
              >查看合同</el-link
            >
          </template>
        </el-table-column>
      </page-table>
      <edit-data ref="editData" />
      <fen-run ref="fenRun" />
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { tuilist, refMoney } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
import fenRun from "./components/fenRun.vue";
export default {
  name: "specialorder",
  components: {
    pageTable,
    editData,
    fenRun,
  },
  data() {
    return {
      shoporder: [],
      buy_type: "",
      is_pin: "",
      sta: "",
      id: "",
      price: "",
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
  mounted() {},
  methods: {
    shoporderlist() {
      let params = {
        token: sessionStorage.getItem("token"),
        uid: this.id,
        sta: this.sta,
        is_pin: this.is_pin,
        buy_type: this.buy_type,
        price: this.price,
        page: this.page.page,
        limit: this.page.limit,
      };
      tuilist(params).then((res) => {
        this.shoporder = res.data.data;
        this.page.total = res.data.count;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    searchinfo() {
      let params = {
        token: sessionStorage.getItem("token"),
        uid: this.id,
        sta: this.sta,
        is_pin: this.is_pin,
        buy_type: this.buy_type,
        price: this.price,
        page: 1,
        limit: this.page.limit,
      };
      tuilist(params).then((res) => {
        this.shoporder = res.data.data;
        this.page.total = res.data.count;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shoporderlist();
    },
    add() {
      this.$refs.editData.show(1, {});
    },
    fenrun(type, row) {
      let rowData = row;
      this.$refs.fenRun.show(type, JSON.parse(JSON.stringify(rowData)));
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
