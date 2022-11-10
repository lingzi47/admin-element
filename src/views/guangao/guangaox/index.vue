<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <!-- 在投设备数
投放金额
租赁商收益
渠道商收益 
物业收益
管理收益 -->
        <el-form-item label="在线设备数 :"> {{ count }}</el-form-item>
        <el-form-item label="投放金额 :" style="margin-left: 30px">
          {{ all_price }}</el-form-item
        >
        <el-form-item label="租赁商收益 :" style="margin-left: 30px">
          {{ zls_price }}</el-form-item
        >
        <el-form-item label="渠道商收益 :" style="margin-left: 30px">
          {{ qds_price }}</el-form-item
        >
        <el-form-item label="物业收益 :" style="margin-left: 30px">
          {{ gl_price }}</el-form-item
        >
        <el-form-item label="管理收益 :" style="margin-left: 30px">
          {{ wy_price }}</el-form-item
        >
        <el-form-item style="float: right">
          <el-button type="primary" @click="editData">添加</el-button>
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
      <el-table-column label="设备租赁号" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.device }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="每日分润" align="center">
      </el-table-column>
      <el-table-column label="点位来源" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.type == 1">汇置物业</el-link>
          <el-link v-if="scope.row.type == 3">三盛</el-link>
          <el-link v-if="scope.row.type == 2">宋氏集团</el-link>
          <el-link v-if="scope.row.type == 4">银河城</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="start_time" label="投放开始" align="center">
      </el-table-column>
      <el-table-column prop="end_time" label="投放结束" align="center">
      </el-table-column>
      <el-table-column label="详情" align="center">
        <template slot-scope="scope">
          <span
            >租赁商{{ scope.row.zls }}元,渠道商{{ scope.row.qds }},物业{{
              scope.row.wy
            }},管理{{ scope.row.gl }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('userdelete')"
            type="warning"
            style="margin-left: 10px"
            @click="edit(scope.row)"
            >编辑</el-link
          >
          <el-link
            v-if="checkPermission('userdelete')"
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
    <edit-fen ref="editFen" />
  </div>
</template>

<script>
import { fakelist, fakedel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
import editFen from "./components/editFen.vue";

export default {
  name: "user",
  components: {
    pageTable,
    editData,
    editFen,
  },
  data() {
    return {
      count: "",
      all_price: "",
      zls_price: "",
      qds_price: "",
      gl_price: "",
      wy_price: "",
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
    editData() {
      this.$refs.editData.show();
    },
    edit(row) {
      let rowData = row;
      this.$refs.editFen.show(JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      //console.log(row);
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            id: row.id,
            token: sessionStorage.getItem("token"),
          };
          fakedel(params).then((res) => {
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
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

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      fakelist(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.count = res.data.title_data.count;
        this.all_price = res.data.title_data.all_price;
        this.zls_price = res.data.title_data.zls_price;
        this.qds_price = res.data.title_data.qds_price;
        this.gl_price = res.data.title_data.gl_price;
        this.wy_price = res.data.title_data.wy_price;
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
