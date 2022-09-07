<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="药房名称" prop="big_name">
          <el-input
            style="width: 180px"
            v-model="big_name"
            clearable
            placeholder="请输入药房名称"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="是否设置分润模式" prop="box_name">
          <el-select
            v-model="is_special"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部" value=""></el-option>
            <el-option label="是" value="10"></el-option>
            <el-option label="否" value="20"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="分润模式" prop="box_uid">
          <el-select v-model="share" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="设备总流水" value="10"></el-option>
            <el-option label="药品售卖差价" value="20"></el-option>
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
      <el-table-column label="药房名称" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.big_name }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="num" label="合作药箱数" align="center">
      </el-table-column>

      <el-table-column label="是否设置分润" align="center">
        <template slot-scope="scope">
          <el-link type="danger" v-if="scope.row.share == null">否</el-link>
          <el-link type="success" v-else>是</el-link>
        </template>
      </el-table-column>

      <el-table-column label="分润模式" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.share == 10">设备总流水</el-link>
          <el-link v-if="scope.row.share == 20">药品售卖差价</el-link>
          <el-link type="danger" v-if="scope.row.share == null">暂无</el-link>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="fenrun(2, scope.row)"
            >编辑</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { sharelist } from "@/request/api";
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
      share: "",
      areaArr: [],
      big_name: "",
      value: "",
      value1: "",
      list: [],
      officina_id: "",
      province: "",
      city: "",
      area: "",
      eprovince: "",
      ecity: "",
      is_special: "",
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
  watch: {},
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    fenrun(type, row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
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
        share: this.share,
        // is_special: this.is_special,
        big_name: this.big_name,
      };
      sharelist(params).then((res) => {
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
        share: this.share,
        // is_special: this.is_special,
        token: sessionStorage.getItem("token"),
        big_name: this.big_name,
      };
      sharelist(params).then((res) => {
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
