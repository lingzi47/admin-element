<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="商务团队信息"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
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

        <el-table-column prop="setid" label="设备租赁号" align="center">
        </el-table-column>
        <el-table-column prop="sevid" label="所属租赁人ID" align="center">
        </el-table-column>
        <el-table-column prop="phone" label="租赁人手机号" align="center">
        </el-table-column>
        <el-table-column prop="uid" label="推荐人设备租赁号" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="showtable(scope.row)"
              >商务团队信息</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </el-dialog>
  </div>
</template>

<script>
import { goodsadd, goodseditshow, goodsedit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      moys: "",
      rollover: "",
      diamond: "",
      id: "",
      time: "",
      dialogVisible: false,
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      userList: [
        {
          setid: "1",
          sevid: "11",
          uid: "2",

          phone: 110,
        },
      ], // 列表
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.id = row.id;
    },
    close() {
      this.dialogVisible = false;
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
        moys: this.moys,
        id: this.id,
        s_time: this.buy_time[0],
        e_time: this.buy_time[1],
      };
      goodsListMem(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    showtable() {},
    go() {},
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
