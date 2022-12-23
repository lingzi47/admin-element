<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="库存"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form>
        <el-row :gutter="24">
          <el-col :span="5">
            <el-form-item label="机器编号:">{{ robotid }} </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="机器位置:">{{ place }} </el-form-item>
          </el-col>
          <el-col :span="9">
            <el-form-item label="详细地址:">{{ located }} </el-form-item>
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

        <el-table-column prop="place" label="药品位置" align="center">
        </el-table-column>
        <el-table-column prop="goods_name" label="药品名称" align="center">
        </el-table-column>
        <el-table-column prop="num" label="药品库存" align="center">
          <template slot-scope="scope">
            <el-link type="danger" v-if="scope.row.num == 0">已空</el-link>
            <el-link type="success" v-else>{{ scope.row.num }}</el-link>
          </template>
        </el-table-column>
        <el-table-column prop="cap" label="容量(最大值)" align="center">
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
      robotid: "",
      place: "",
      located: "",

      dialogVisible: false,
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      userList: [
        {
          place: "沈阳",
          goods_name: "口罩",

          num: "0",
          cap: 10,
        },
      ], // 列表
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.robotid = row.robotid;
      this.place = row.place;
      this.located = row.located;
      this.dialogVisible = true;
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
        setid: this.setid,
        sev_id: this.sev_id,
        phone: this.phone,
        uid: this.uid,
        buy_serve: this.buy_serve,
        status: this.status,
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
    go() {
      this.$router.back();
    },
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
