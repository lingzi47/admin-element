<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="商品名称:" prop="number">
          <el-input
            style="width: 200px"
            v-model="box_name"
            clearable
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备编号:" prop="number">
          <el-input
            style="width: 200px"
            v-model="number"
            clearable
            placeholder="请输入设备编号:"
          ></el-input>
        </el-form-item>

        <!-- <el-form-item label="药房:">
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
        </el-form-item> -->
        <el-form-item label="时间" prop="time">
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
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button @click="dao">导出</el-button>
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
      <el-table-column prop="device" label="设备编号" align="center">
      </el-table-column>

      <el-table-column label="点位位置" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.position }}</span>
        </template>
      </el-table-column>
      <el-table-column label="设备供货药房" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.officina }}</span>
        </template></el-table-column
      >
      <el-table-column prop="goods_name" label="药品名称" align="center">
      </el-table-column>
      <el-table-column prop="num" label="补货数量" align="center">
      </el-table-column>
      <el-table-column prop="sell_price" label="售卖单价" align="center">
      </el-table-column>
      <el-table-column prop="price" label="商品成本" align="center">
      </el-table-column>
      <el-table-column prop="all_price" label="补货成本" align="center">
      </el-table-column>
      <el-table-column prop="time" label="补货时间" align="center">
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { officinalist, repList } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      box_uid: "",
      box_name: "",
      areaArr: [],
      number: "",
      value: "",
      value1: "",
      time: "",
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
      this.huolist1();
    },
  },
  created() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    var s1 = y + "-" + m + "-" + d;
    var y1 = date.getFullYear();
    var m1 = date.getMonth() + 1;
    m1 = m1 < 10 ? "0" + m1 : m1;
    var d1 = date.getDate() - 1;
    d1 = d1 < 10 ? "0" + d1 : d1;
    var e1 = y1 + "-" + m1 + "-" + d1;
    let arr = [];
    arr.push(e1);
    arr.push(s1);

    this.time = arr; //时间段的数组；第一项表示开始时间，第二项表示结束时间
    this.getUserList(); //获取用户列表
    // this.setData(areaListData());
    // this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      if (this.time[1] == undefined) {
        window.location.href =
          "https://y4.wjw.cool/adminApi/box/boxFinance/repExport" +
          "?token=" +
          this.token +
          "&goods_name=" +
          this.box_name +
          "&device=" +
          this.number;
      } else {
        window.location.href =
          "https://y4.wjw.cool/adminApi/box/boxFinance/repExport" +
          "?token=" +
          this.token +
          "&goods_name=" +
          this.box_name +
          "&device=" +
          this.number +
          this.time[0] +
          "&time2=" +
          this.time[1];
      }
    },
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
      this.eprovince = data[0];
      this.ecity = data[1];
      this.earea = data[2];
    },
    change1(data) {
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
      this.page.currentPage = 1;
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        s_time: this.time[0],
        e_time: this.time[1],
        goods_name: this.box_name,
        device: this.number,
      };
      repList(params).then((res) => {
        this.page.total = res.data.data.total;
        let list = res.data.data.dataList;
        // 拿key
        let arr = [];
        for (let prop in list) {
          arr.push(list[prop]);
        }

        this.userList = arr;
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
        s_time: this.time[0],
        e_time: this.time[1],
        goods_name: this.box_name,
        device: this.number,
      };
      repList(params).then((res) => {
        this.page.total = res.data.data.total;
        let list = res.data.data.dataList;
        // 拿key
        let arr = [];
        for (let prop in list) {
          arr.push(list[prop]);
        }

        this.userList = arr;
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
