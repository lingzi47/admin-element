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

      <el-table ref="dataTable" :data="userList" border>
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{
              (page.currentPage - 1) * page.pageSize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>

        <el-table-column prop="box_pid_uid" label="推荐人id" align="center">
        </el-table-column>
        <el-table-column prop="box_pid" label="推荐人设备租赁号" align="center">
        </el-table-column>
        <el-table-column prop="box_id" label="设备租赁号" align="center">
        </el-table-column>

        <el-table-column label="租赁商id" align="center">
          <template slot-scope="scope">
            <el-link
              v-for="(v, k) in scope.row.userinfo"
              :key="k"
              style="margin-left: 10px"
              @click="nextUser(v, scope.row)"
              >{{ v }}</el-link
            >
          </template>
        </el-table-column>
      </el-table>
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
      arr1: [],
      box_pid_uid: "",
      pid: "",
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
    nextUser(v, row) {
      console.log(v);
      this.box_pid_uid = v;
      this.box_pid = row.box_id;
      let idarr = [];
      let idarr1 = [];
      idarr.push(row.box_pid_uid);
      idarr1.push(row.box_pid);
      this.arr.push(idarr);
      this.arr1.push(idarr1);
      console.log(this.arr);
      console.log(this.arr1);
      this.getUserList();
    },
    go() {
      if (this.arr.length < 1) {
        console.log("我不显示");
        this.dialogVisible = false;
      } else {
        //取box_pid_uid
        let a = this.arr[this.arr.length - 1];
        this.box_pid_uid = a.toString();
        console.log(this.box_pid_uid);
        //取box_pid
        let b = this.arr1[this.arr1.length - 1];
        this.box_pid = b.toString();
        console.log(this.box_pid);
        //请求
        this.getUserList();
        //  删除最后box_pid_uid
        var m = this.arr.slice(0);
        m.splice(m.length - 1, 1);
        // 删除最后box_pid
        var n = this.arr1.slice(0);
        n.splice(n.length - 1, 1);
      }
      this.arr = m;
      this.arr1 = n;
    },
    show(row) {
      console.log(row);
      this.dialogVisible = true;
      // this.box_pid_uid = row.uid;
      this.box_pid = row.name;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
      this.arr = [];
      this.arr1 = [];
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
        token: sessionStorage.getItem("token"),
        box_pid: this.box_pid,
        box_pid_uid: this.box_pid_uid,
      };
      usehaveteam(params).then((res) => {
        this.userList = res.data.data;
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
