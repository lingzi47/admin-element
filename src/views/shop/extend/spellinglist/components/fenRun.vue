<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="公司分红详情"
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

        <el-table-column prop="u_id" label="id" align="center">
        </el-table-column>
        <el-table-column prop="nickname" label="用户名称" align="center">
        </el-table-column>
        <el-table-column prop="num" label="收益钻石数量" align="center">
        </el-table-column>
        <el-table-column prop="create_time" label="收益时间" align="center">
        </el-table-column>
      </page-table>
    </el-dialog>
  </div>
</template>

<script>
import { logpool, goodseditshow, goodsedit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      id: "",
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
      console.log(row);
      this.dialogVisible = true;

      this.id = row.id;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
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
        token: sessionStorage.getItem("token"),
        id: this.id,
      };
      logpool(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
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
