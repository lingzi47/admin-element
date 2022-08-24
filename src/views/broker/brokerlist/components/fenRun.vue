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
      <el-button
        type="primary"
        style="margin: 10px 10px 10px 10px"
        @click="go()"
        >返回</el-button
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

        <el-table-column prop="box_id" label="设备租赁号" align="center">
        </el-table-column>
        <el-table-column prop="uid" label="所属租赁人ID" align="center">
        </el-table-column>
        <el-table-column prop="tel" label="租赁人手机号" align="center">
        </el-table-column>
        <el-table-column prop="pid" label="推荐人设备租赁号" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="primary" @click="nextUser(scope.row)"
              >商务团队信息</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </el-dialog>
  </div>
</template>

<script>
import { usehaveteam, goodseditshow, goodsedit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      name: "",
      uid: "",
      arr: [],
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
    nextUser(row) {
      this.name = row.box_id;
      this.uid = row.pid;
      let idarr = [];
      idarr.push(this.uid);
      this.arr.push(idarr);
      console.log(this.arr);
      this.getUserList();
    },
    go() {
      if (this.arr.length < 1) {
        console.log("我不显示");
        this.dialogVisible = false;
      } else {
        let a = this.arr[this.arr.length - 1];
        this.name = a.toString();
        this.getUserList();
        var m = this.arr.slice(0);
        m.splice(m.length - 1, 1);
      }
      this.arr = m;
      return m;
    },
    show(row) {
      console.log(row.id);
      this.dialogVisible = true;
      this.name = row.name;
      console.log(this.name);
      this.getUserList();
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
        name: this.name,
      };
      usehaveteam(params).then((res) => {
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
