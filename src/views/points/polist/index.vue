<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="点位位置">
          <el-cascader
            v-model="form.value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="设备租赁号" prop="box_name">
          <el-input
            style="width: 180px"
            v-model="box_name"
            clearable
            placeholder="请输入设备租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">添加</el-button>
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
      <el-table-column prop="id" label="点位名称" align="center">
      </el-table-column>
      <el-table-column label="点位位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.province }}-{{ scope.row.city }}-{{
              scope.row.area
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="绑定设备数" align="center">
      </el-table-column>
      <el-table-column prop="box_number" label="合作日期" align="center">
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
  </div>
</template>

<script>
import { positionindex, positiondelete, shareInfo } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
import fenRun from "./components/fenRun.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    fenRun,
  },
  data() {
    return {
      token: "",
      box_name: "",
      id: "",
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
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
  created() {
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
    this.token = sessionStorage.getItem("token");
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      window.location.href =
        "https://testapi.yujian02.xyz/admin/box/posExport" +
        "?token=" +
        this.token +
        "&box_name=" +
        this.box_name +
        "&uid=" +
        this.box_uid +
        "&id=" +
        this.id +
        "&province=" +
        this.province +
        "&type=" +
        this.type +
        "&city=" +
        this.city +
        "&bind=" +
        this.sta +
        "&area=" +
        this.area +
        "&time1=" +
        this.time[0] +
        "&time2=" +
        this.time[1];
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
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
    },
    add() {
      this.$refs.editData.show(1, {});
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
          positiondelete(params).then((res) => {
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
    showtable(row) {
      let rowData = row;
      this.$refs.fenRun.show(JSON.parse(JSON.stringify(rowData)));
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
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
        province: this.province,
        type: this.type,
        city: this.city,
      };
      positionindex(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
        province: this.province,
        type: this.type,
        city: this.city,
      };
      positionindex(params).then((res) => {
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
