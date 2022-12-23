<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="位置">
          <el-cascader
            v-model="form.value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="小区名" prop="name">
          <el-input
            style="width: 180px"
            v-model="name"
            clearable
            placeholder="请输入小区名"
          ></el-input>
        </el-form-item>

        <el-form-item label="物业" prop="property">
          <el-input
            style="width: 180px"
            v-model="property"
            clearable
            placeholder="请输入物业"
          ></el-input>
        </el-form-item>

        <el-form-item label="经纬度" prop="phone">
          <el-input
            style="width: 180px"
            v-model="position"
            clearable
            placeholder="请输入经纬度"
          ></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="phone">
          <el-select v-model="status" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="已安装" value="10"></el-option>
            <el-option label="待安装" value="20"></el-option>
            <el-option label="待查验" value="30"></el-option></el-select
        ></el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">添加</el-button>
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

      <el-table-column label="位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.province }}-{{ scope.row.city }}-{{
              scope.row.area
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="name" label="小区" align="center">
      </el-table-column>
      <el-table-column prop="property" label="物业" align="center">
      </el-table-column>
      <el-table-column prop="position" label="经纬度" align="center">
      </el-table-column>
      <el-table-column prop="num" label="设备数" align="center">
      </el-table-column>

      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.status == 10">已安装</el-link>
          <el-link type="warning" v-if="scope.row.status == 20">待安装</el-link>
          <el-link type="info" v-if="scope.row.status == 30">待查验</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="edit(2, scope.row)"
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
import { propertylist, propertydel } from "@/request/api";
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
      form: {
        value1: "",
      },
      name: "",
      property: "",
      position: "",
      num: "",
      status: "",
      province: "",
      city: "",
      area: "",
      userList: [], // 列表
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
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
  methods: {
    change(data) {
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
    },
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },

    add() {
      this.$refs.editData.show(1, {});
    },
    edit(type, row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;

          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          propertydel(params).then((res) => {
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
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
        name: this.name,
        province: this.province,
        city: this.city,
        area: this.area,
        property: this.property,
        position: this.position,
        status: this.status,
      };
      propertylist(params).then((res) => {
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
        name: this.name,
        province: this.province,
        city: this.city,
        area: this.area,
        property: this.property,
        position: this.position,
        status: this.status,
      };
      propertylist(params).then((res) => {
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
