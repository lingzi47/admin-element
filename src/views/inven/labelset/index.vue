<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="标签名称" prop="name">
          <el-input
            style="width: 180px"
            v-model="number"
            clearable
            placeholder="请输入标签名称"
          ></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">新增</el-button>
          <el-button type="primary" @click="dao">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
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
      <el-table-column prop="number" label="标签名称" align="center">
      </el-table-column>
      <el-table-column prop="number" label="联系人" align="center">
      </el-table-column>
      <el-table-column prop="number" label="联系方式" align="center">
      </el-table-column>
      <el-table-column prop="number" label="地址" align="center">
      </el-table-column>
      <el-table-column prop="number" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="number" label="备注" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
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
  </div>
</template>

<script>
import { boxgoodslist, officinalist } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
export default {
  name: "user",
  components: {
    pageTable,

    editData,
  },
  data() {
    return {
      officina_id: "",
      province: "",
      type: "",
      city: "",
      number: "",
      name: "",
      token: "",
      phone: "",
      officina_id: "",
      num: "",
      sta: "",
      value: "",
      area: "",
      userList: [], // 列表
      list: [], // 列表
      list1: [],
      time: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {},
  created() {
    this.token = sessionStorage.getItem("token");
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    add() {
      this.$refs.editData.show(1, {});
    },
    dao(row) {
      console.log(row);
      this.num = row.number;
      console.log(this.num);

      window.location.href =
        "https://yujian02.xyz/admin/box/expOfficina" +
        "?token=" +
        this.token +
        "&number=" +
        this.num;
    },

    showtable(row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
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
          delLevel(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.tableshow();
              this.$message.success("删除成功");
            }
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
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        number: this.number,
        officina_id: this.officina_id,
        sta: this.sta,
      };
      boxgoodslist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
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
      };
      boxgoodslist(params).then((res) => {
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
