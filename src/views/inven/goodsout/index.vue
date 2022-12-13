<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="商品编号" prop="name">
          <el-input
            style="width: 180px"
            v-model="gid"
            clearable
            placeholder="请输入商品编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input
            style="width: 180px"
            v-model="goods_name"
            clearable
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="出库单号" prop="name">
          <el-input
            style="width: 310px"
            v-model="order_no"
            clearable
            placeholder="请输入出库单号"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="name">
          <el-input
            style="width: 180px"
            v-model="tag_name"
            clearable
            placeholder="请输入标签"
          ></el-input>
        </el-form-item>
        <el-form-item label="出库状态" prop="status">
          <el-select
            v-model="status"
            placeholder="请选择出库状态"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="通过" value="2"></el-option>
            <el-option label="待审核" value="1"></el-option>
            <el-option label="拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="danger" @click="del">删除</el-button>
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column
        type="selection"
        fixed
        width="40"
        :resizable="false"
      ></el-table-column>
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="number_no"
        width="310px"
        label="出库单号"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="remark" label="出库备注" align="center">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.remark"
            @change="onInputChange(scope.row)"
          >
          </el-input>
        </template>
      </el-table-column>

      <el-table-column prop="status" label="出库状态" align="center">
        <template slot-scope="scope">
          <el-link type="warning" v-if="scope.row.status == 1">待审核</el-link>
          <el-link type="success" v-if="scope.row.status == 2">通过</el-link>
          <el-link type="danger" v-if="scope.row.status == 3">拒绝</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="remark_sta" label="备注" align="center">
      </el-table-column>
      <el-table-column prop="time_sta" label="审核时间" align="center">
      </el-table-column>

      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="showtable(scope.row)"
            >查看</el-link
          >
          <el-link
            @click="edit(scope.row)"
            style="margin-left: 10px"
            v-if="scope.row.status != 2"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { orderList, orderDel, savRemark } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";

import upSet from "./components/upSet.vue";
import editData from "./components/editData.vue";
export default {
  name: "user",
  components: {
    pageTable,

    upSet,
    editData,
  },
  data() {
    return {
      gid: "",
      goods_name: "",
      order_no: "",
      tag_name: "",
      status: "",
      userList: [], // 列表

      tableSelectList: [],

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },

  created() {
    this.token = sessionStorage.getItem("token");
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    onInputChange(row) {
      console.log(row.remark);
      let params = {
        token: sessionStorage.getItem("token"),
        type: 2,
        id: row.id,
        remark: row.remark,
      };
      savRemark(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("修改成功");
        } else {
          this.$message.dannger(res.data.msg);
        }
        this.getUserList();
      });
    },
    getSelection(select) {
      this.tableSelectList = select;
      var ids = this.tableSelectList.map((i) => i.id).toString();
      console.log(ids);
    },
    del() {
      var ids = this.tableSelectList.map((i) => i.id).toString();
      console.log(ids);
      this.$confirm("是否删这些信息(多删)？", "提示", {
        type: "warning",
      })
        .then(async () => {
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: ids,
          };
          orderDel(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.$message.success("删除成功");
            } else {
              this.$message.dannger(res.data.msg);
            }
            this.getUserList();
          });
        })
        .catch(() => {});
    },
    dao(row) {
      console.log(row);
      this.num = row.number;
      console.log(this.num);

      window.location.href =
        "https://testapi.yujian02.xyz/admin/box/expOfficina" +
        "?token=" +
        this.token +
        "&number=" +
        this.num;
    },

    showtable(row) {
      let rowData = row;
      this.$refs.upSet.show(JSON.parse(JSON.stringify(rowData)));
    },
    edit(row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    add() {
      this.$refs.editData.show(1, {});
    },
    deleteData(row) {
      console.log(row);
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          orderDel(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.$message.success("删除成功");
            } else {
              this.$message.dannger(res.data.msg);
            }
            this.getUserList();
          });
        })
        .catch(() => {});
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    searchinfo() {
      this.page.currentPage = 1;

      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: 2,
        gid: this.gid,
        goods_name: this.goods_name,
        order_no: this.order_no,
        tag_name: this.tag_name,
        status: this.status,
      };
      orderList(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        type: 2,
        gid: this.gid,
        goods_name: this.goods_name,
        order_no: this.order_no,
        tag_name: this.tag_name,
        status: this.status,
      };
      orderList(params).then((res) => {
        this.page.total = res.data.data.total;
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
