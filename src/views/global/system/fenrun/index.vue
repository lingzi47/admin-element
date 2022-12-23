<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">添 加</el-button>
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
      <el-table-column prop="name" label="名称" align="center">
      </el-table-column>
      <el-table-column prop="is_special" label="分润模式" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="创建时间" align="center">
      </el-table-column>
      <el-table-column prop="device_num" label="绑定设备租赁号" align="center">
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
            @click="editup(scope.row)"
            >编辑</el-link
          >
          <!-- <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          > -->
        </template>
      </el-table-column>
    </page-table>
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { BoxProfitdel, boxProfitlist, configdelete } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import upSet from "./components/upSet.vue";

export default {
  name: "user",
  components: {
    pageTable,
    upSet,
  },
  data() {
    return {
      userList: [], // 列表

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
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          BoxProfitdel(params).then((res) => {
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
    add() {
      this.$refs.upSet.show(1, {});
    },
    showtable(row) {
      this.$router.push({
        path: "/fenrunshow",
        query: {
          type: 1,
          row: row,
        },
      });
    },
    editup(row) {
      this.$router.push({
        path: "/fenrunadd",
        query: {
          type: 1,
          row: row,
        },
      });
    },
    changeSwitch(row) {
      let params = {
        token: sessionStorage.getItem("token"),
        status: row.status,
        id: row.id,
      };
      userStart(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("修改成功");
          this.getUserList();
        } else {
          this.$message.error("修改失败");
        }
      });
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
      boxProfitlist(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
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
