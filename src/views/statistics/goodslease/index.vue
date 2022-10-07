<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="位置:">
          <el-cascader
            v-model="value"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="药房:">
          <el-cascader
            v-model="value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change1"
          ></el-cascader>
          <el-form-item prop="officina_id">
            <el-select
              v-model="name"
              placeholder="请选择药房:"
              style="width: 180px"
              clearable
            >
              <el-option
                v-for="item in list"
                :value="item.big_name"
                :key="item.big_name"
                :label="item.big_name"
              ></el-option>
            </el-select>
            <el-select
              v-model="officina_id"
              placeholder="请选择药房"
              style="width: 180px"
              clearable
            >
              <el-option
                v-for="item in list1"
                :value="item.name"
                :key="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form-item>

        <el-form-item label="设备编号:" prop="number">
          <el-input
            style="width: 200px"
            v-model="number"
            clearable
            placeholder="请输入设备编号:"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备租赁号:" prop="number">
          <el-input
            style="width: 200px"
            v-model="box_name"
            clearable
            placeholder="请输入设备租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item label="金额总计：">{{ all }} </el-form-item>
        <el-form-item label="利润总计：">{{ profit }} </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
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
      <el-table-column prop="box_number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column prop="box_name" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column label="点位位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.eprovince }}-{{ scope.row.ecity }}-{{
              scope.row.earea
            }}--{{ scope.row.edetails }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="设备供货药房" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.dprovince }}-{{ scope.row.dcity }}-{{
              scope.row.darea
            }}--{{ scope.row.ddetails }}--{{ scope.row.dbigname }}--{{
              scope.row.dname
            }}</span
          >
        </template></el-table-column
      >

      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import {
  officinalist,
  goodsAll,
  positiondeletet,
  positiondelete,
} from "@/request/api";
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
      box_uid: "",
      box_name: "",
      areaArr: [],
      number: "",
      value: "",
      value1: "",
      list: [],
      list1: [],
      profit: "",
      all: "",
      name: "",
      officina_id: "",
      province: "",
      city: "",
      area: "",
      eprovince: "",
      ecity: "",
      earea: "",
      userList: [], // 列表
      time: "",
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
    name(newVal) {
      console.log(newVal);
      this.huolist1();
    },
  },
  created() {
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
  methods: {
    huolist1() {
      let params = {
        //big_name 改3
        token: sessionStorage.getItem("token"),
        big_name: this.name,
        province: this.province,
        city: this.city,
        area: this.area,
      };
      officinalist(params).then((res) => {
        console.log(res.data.data);
        this.list1 = res.data.data;
      });
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
    change(data) {
      console.log(data);
      this.eprovince = data[0];
      this.ecity = data[1];
      this.earea = data[2];
    },
    change1(data) {
      console.log(data);
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
      this.get();
    },
    get() {
      let params = {
        token: sessionStorage.getItem("token"),
        province: this.province,
        city: this.city,
        area: this.area,
      };
      officinalist(params).then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },

    showtable(row) {
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
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
        box_number: this.number,
        officina_name: this.officina_id,
        position_area: this.earea,
        box_name: this.box_name,
      };
      goodsAll(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.all = res.data.allprice.all;
        this.profit = res.data.allprice.profit;
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
        box_number: this.number,
        officina_name: this.officina_id,
        position_area: this.earea,
        box_name: this.box_name,
      };
      goodsAll(params).then((res) => {
        this.page.total = res.data.count;
        this.all = res.data.allprice.all;
        this.profit = res.data.allprice.profit;
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
