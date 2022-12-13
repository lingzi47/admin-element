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
              v-model="officina"
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

        <el-form-item label="设备编号:">
          <el-input
            style="width: 200px"
            v-model="dev_num"
            clearable
            placeholder="请输入设备编号:"
          ></el-input>
        </el-form-item>
        <el-form-item label="物业:">
          <el-input
            style="width: 200px"
            v-model="property"
            clearable
            placeholder="物业"
          ></el-input>
        </el-form-item>
        <el-form-item label="支付时间:">
          <el-date-picker
            v-model="time"
            type="datetimerange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <!-- <el-form-item label="金额总计：">{{ all }} </el-form-item>
        <el-form-item label="利润总计：">{{ profit }} </el-form-item> -->
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
      <el-table-column prop="orderCode" label="订单编号" align="center">
      </el-table-column>
      <el-table-column prop="orderDeviceCode" label="设备编号" align="center">
      </el-table-column>
      <el-table-column prop="productName" label="商品名称" align="center">
      </el-table-column>
      <el-table-column prop="productSalePrice" label="销售价格" align="center">
      </el-table-column>
      <el-table-column prop="orderMoneyPaid" label="支付价格" align="center">
      </el-table-column>
      <el-table-column prop="productCostPrice" label="成本" align="center">
      </el-table-column>
      <el-table-column prop="orderCreateTime" label="支付时间" align="center">
      </el-table-column>
      <el-table-column prop="property" label="物业" align="center">
      </el-table-column>
      <el-table-column prop="orderStatus" label="订单状态" align="center">
      </el-table-column>
      <el-table-column prop="zl_num" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column prop="devAds" label="设备位置" align="center">
      </el-table-column>
      <el-table-column prop="officina" label="药房" align="center">
      </el-table-column>
      <el-table-column prop="cost_price" label="渠道商分润明细" align="center">
      </el-table-column>
      <el-table-column prop="user_price" label="租赁商分润明细" align="center">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)">查看</el-link>
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="600px"
      :close-on-click-modal="false"
      @close="close"
    >
      <p>{{ user_price }}</p>
    </el-dialog>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { officinalist, goodsAll } from "@/request/api";
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
      property: "",
      areaArr: [],
      dialogVisible: false,
      user_price: "",
      dev_num: "",
      value: "",
      value1: "",
      list: [],
      list1: [],
      profit: "",
      all: "",
      name: "",
      officina: "",
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
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
  methods: {
    handleClick(row) {
      this.user_price = row.user_price;
      this.dialogVisible = true;
    },

    close() {
      this.dialogVisible = false;
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
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),

        officina: this.officina,
        property: this.property,
        dev_num: this.dev_num,
        province: this.eprovince,
        city: this.ecity,
        area: this.earea,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      goodsAll(params).then((res) => {
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
        officina: this.officina,
        property: this.property,
        dev_num: this.dev_num,
        province: this.province,
        city: this.city,
        area: this.area,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      goodsAll(params).then((res) => {
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
