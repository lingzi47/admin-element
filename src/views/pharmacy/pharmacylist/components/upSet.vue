<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="药房查看"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="药房名称">
              {{ big_name }}-{{ name }}
            </el-form-item>
          </el-col>

          <el-col :span="10">
            <el-form-item label="药房位置">
              {{ province }}-{{ city }}-{{ area }}
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="药房负责人"> {{ person }} </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="联系方式"> {{ phone }} </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="拨款银行账户"> {{ bank }} </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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

        <el-table-column prop="box_name" label="设备编号" align="center">
        </el-table-column>
        <el-table-column prop="uid" label="设备位置" align="center">
          <template slot-scope="scope">
            <span
              >{{ scope.row.province }}-{{ scope.row.city }}-{{
                scope.row.area
              }}-{{ scope.row.details }}</span
            >
          </template>
        </el-table-column>
      </page-table>
    </el-dialog>
  </div>
</template>

<script>
import { boxread, goodseditshow, goodsedit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      name: "",
      uid: "",
      province: "",
      phone: "",
      city: "",
      big_name: "",
      bank: "",
      area: "",
      person: "",
      arr: [],
      dialogVisible: false,
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      userList: [], // 列表
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.dialogVisible = true;

      this.name = row.name;
      this.big_name = row.big_name;
      this.id = row.id;
      this.phone = row.phone;
      this.bank = row.bank;
      this.person = row.person;
      this.province = row.province;
      this.city = row.city;
      this.area = row.area;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
      this.big_name = "";
      this.name = "";
      this.id = "";
      this.phone = "";
      this.bank = "";
      this.person = "";
      this.city = "";
      this.area = "";
      this.province = "";
      this.userList = [];
    },
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
        id: this.id,
      };
      boxread(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    showtable() {},
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
