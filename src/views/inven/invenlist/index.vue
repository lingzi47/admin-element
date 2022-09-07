<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="机器编号" prop="name">
          <el-input
            style="width: 180px"
            v-model="number"
            clearable
            placeholder="请输入药房名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="药房位置">
          <el-cascader
            v-model="value"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change1"
          ></el-cascader>

          <el-form-item prop="officina_id">
            <el-select
              v-model="name"
              placeholder="请选择药房"
              style="width: 160px"
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
              style="width: 160px"
              clearable
            >
              <el-option
                v-for="item in list1"
                :value="item.id"
                :key="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form-item>
        <el-form-item label="缺货状态" prop="type">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="是" value="30"></el-option>
            <el-option label="否" value="20"></el-option>
          </el-select>
        </el-form-item>
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
      <el-table-column prop="number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column label="设备位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.eprovince }}-{{ scope.row.ecity }}-{{
              scope.row.earea
            }}</span
          >
        </template>
      </el-table-column>

      <el-table-column prop="create_time" label="设备供货药房" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.dprovince }}-{{ scope.row.dcity }}-{{
              scope.row.darea
            }}-{{ scope.row.dbig_name }}-{{ scope.row.dname }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="是否缺货" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">否</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">是</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >
          <el-link @click="dao(scope.row)" style="margin-left: 10px"
            >导出</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->

    <up-set ref="upSet" />
  </div>
</template>

<script>
import { boxgoodslist, officinalist } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";

import upSet from "./components/upSet.vue";
export default {
  name: "user",
  components: {
    pageTable,

    upSet,
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
  watch: {
    name(newVal) {
      console.log(newVal);
      this.huolist1();
    },
  },
  created() {
    this.token = sessionStorage.getItem("token");
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
  methods: {
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },
    huolist1() {
      //big_name 改5
      let params = {
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
    dao(row) {
      console.log(row);
      this.num = row.number;
      console.log(this.num);
      console.log(
        (window.location.href =
          " https://y4.wjw.cool/admin/box/expOfficina" +
          "?token=" +
          this.token +
          "&number=" +
          this.num)
      );
      window.location.href =
        " https://y4.wjw.cool/admin/box/expOfficina" +
        "?token=" +
        this.token +
        "&number=" +
        this.num;
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
      this.$refs.upSet.show(JSON.parse(JSON.stringify(rowData)));
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
