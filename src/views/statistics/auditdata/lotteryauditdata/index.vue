<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="审核事件选择" prop="username">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="系统发放" value="10"></el-option>
            <el-option label="手动发放" value="20"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态" prop="member">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="系统发放" value="10"></el-option>
            <el-option label="手动发放" value="20"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="注册时间" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="getUserList"
            >查询</el-button
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
      <el-table-column prop="goods_name" label="审核事件" align="center">
      </el-table-column>

      <el-table-column prop="type" label="审核人" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="审核时间" align="center">
      </el-table-column>
      <el-table-column prop="ex_status" label="审核状态" align="center">
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { goodsListMem, goodsListdel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表

      goods_name: "",
      type: "",
      time: "",
      ex_status: "",

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    add() {
      this.$refs.editData.show(1, {});
    },
    editData(type, row) {
      let rowData = row;
      // 1:新增，2:编辑
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    getUserList() {
      if (this.time === null) {
        let time = "";
        this.form.time == time;
        //console.log(this.time);
      }

      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        goods_name: this.goods_name,
        type: this.type,
        ex_status: this.ex_status,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      goodsListMem(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
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
          goodsListdel(params).then((res) => {
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
  },
};
</script>

<style lang="scss" scoped>
table {
  border-collapse: collapse;

  text-align: center;
}
table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
  font-size: 12px;
}
table thead th {
  background-color: #cce8eb;
  width: 100px;
}
table tr:nth-child(odd) {
  background: #fff;
}
table tr:nth-child(even) {
  background: #f5fafa;
}
</style>
