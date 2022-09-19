<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="药房位置">
          <el-cascader
            v-model="form.value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="药房名称" prop="name">
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
                :value="item.name"
                :key="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form-item>
        <el-form-item label="药房联系方式" prop="phone">
          <el-input
            style="width: 180px"
            v-model="phone"
            clearable
            placeholder="请输入药房联系方式"
          ></el-input>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
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
      <el-table-column prop="name" label="药房名称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.big_name }}-{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="药房位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.province }}-{{ scope.row.city }}-{{
              scope.row.area
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="person" label="药房负责人" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column prop="bank" label="拨款银行账户" align="center">
      </el-table-column>
      <el-table-column prop="num" label="合作药箱数量" align="center">
      </el-table-column>
      <el-table-column prop="create_time" label="添加时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
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

          <el-link
            type="success"
            style="margin-left: 10px"
            @click="fenrun(2, scope.row)"
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
    <fen-run ref="fenRun" />
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { pharmacylist, pharmacydel, officinalist } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
import fenRun from "./components/fenRun.vue";
import upSet from "./components/upSet.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    fenRun,
    upSet,
  },
  data() {
    return {
      name: "",
      areaArr: [],
      list: [],
      list1: [],
      officina_id: "",
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
      province: "",
      city: "",
      phone: "",
      big_name: "",
      area: "",
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
      //big_name 改1
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
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
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
    add() {
      this.$refs.editData.show(1, {});
    },
    addup(type, row) {
      let rowData = row;
      this.$refs.upSet.show(1, JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          pharmacydel(params).then((res) => {
            //console.log(res.data);
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
    fenrun(type, row) {
      let rowData = row;

      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
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
        name: this.officina_id,
        phone: this.phone,
        province: this.province,
        city: this.city,
        area: this.area,
        time1: this.time[0],
        time2: this.time[1],
      };
      pharmacylist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
          // page: 1,
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
        name: this.officina_id,
        phone: this.phone,
        province: this.province,
        city: this.city,
        area: this.area,
        time1: this.time[0],
        time2: this.time[1],
      };
      pharmacylist(params).then((res) => {
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
