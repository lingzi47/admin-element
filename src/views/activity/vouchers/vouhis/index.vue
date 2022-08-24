<template>
  <div class="user">
    <el-button type="primary" @click="go()">返回上一级</el-button>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="任务" align="center">
        <template slot-scope="scope">
          <span
            >钻石提现获得钻石体现数值的千分之{{ scope.row.num }}张{{
              scope.row.coupon_name
            }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="created_at" label="提交时间" align="center">
      </el-table-column>

      <el-table-column prop="sta_name" label="审核人" align="center">
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-tag type="warning" effect="dark" v-if="scope.row.sta == 10"
            >待审核
          </el-tag>
          <el-tag type="success" effect="dark" v-if="scope.row.sta == 20"
            >已通过</el-tag
          >
          <el-tag type="danger" effect="dark" v-if="scope.row.sta == 30"
            >已拒绝</el-tag
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { coupontasklist, userZisu, userStart, userBlm } from "@/requestw/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      arr: [],
      name: "",
      sta: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  watch: {},
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    go() {
      this.$router.go(-1);
    },
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口
    open() {
      this.$refs.editData.show();
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      coupontasklist(params).then((res) => {
        //console.log(res.data.data);
        this.page.total = res.data.count;

        //console.log(res.data.data.current_page);
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    userShow(row) {
      //console.log(row);
      this.$router.push({
        path: "/userShow",
        query: {
          id: row.id,
        },
      });
    },
    nextUser(row) {
      //console.log(row);
      this.$router.push({
        path: "/nextUser",
        query: {
          id: row.id,
        },
      });
    },
    editData(row) {
      //console.log(row);
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此用户？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await deleteUser({
              id: rowData.id,
            });
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
