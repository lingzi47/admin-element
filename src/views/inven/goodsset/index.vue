<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="商品名称" prop="name">
          <el-input
            style="width: 180px"
            v-model="goods_name"
            clearable
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品编号" prop="name">
          <el-input
            style="width: 180px"
            v-model="id"
            clearable
            placeholder="请输入商品编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="name">
          <el-select v-model="name" placeholder="请选择标签">
            <el-option
              v-for="item in list"
              :value="item.id"
              :key="item.id"
              :label="item.name"
            ></el-option>
          </el-select>
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
      <el-table-column prop="goods_name" label="商品名称" align="center">
      </el-table-column>
      <el-table-column prop="id" label="商品编号" align="center">
      </el-table-column>
      <el-table-column prop="type" label="品类" align="center">
      </el-table-column>
      <el-table-column prop="buy_price" label="销售价" align="center">
      </el-table-column>
      <el-table-column prop="price" label="成本价" align="center">
      </el-table-column>
      <el-table-column prop="number" label="仓库库存" align="center">
      </el-table-column>
      <el-table-column prop="all_price" label="库存总价" align="center">
      </el-table-column>
      <el-table-column prop="name" label="标签" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center">
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
import { goodsList, tagList, goodsDel } from "@/request/api";
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
      goods_name: "",
      id: "",
      tag_id: "",
      name: "",
      userList: [], // 列表
      list: [],

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
    this.getlist();
  },
  mounted() {},
  computed: {},
  methods: {
    add() {
      this.$refs.editData.show(1, {});
    },
    dao(row) {
      this.num = row.number;

      window.location.href =
        "https://yujian02.xyz/adminApi/box/boxStock/goodsExp" +
        "?token=" +
        this.token +
        "&goods_name=" +
        this.goods_name +
        "&tag_id=" +
        this.name +
        "&id=" +
        this.id;
    },

    showtable(row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          goodsDel(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("删除成功");
              this.getUserList();
            } else {
              this.$message.error(res.data.msg);
              this.getUserList();
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
      this.page.currentPage = 1;

      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        goods_name: this.goods_name,
        id: this.id,
        tag_id: this.name,
      };
      goodsList(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      tagList(params).then((res) => {
        this.list = res.data.data;
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        goods_name: this.goods_name,
        id: this.id,
        tag_id: this.name,
      };
      goodsList(params).then((res) => {
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
