<template>
  <div class="user">
    <p>钻石新增统计</p>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="充值时间" prop="time">
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
        <el-form-item>
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="serch1"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <table border="1">
      <tr>
        <th style="width: 300px" align="center">钻石充值数据统计</th>
        <th style="width: 300px" align="center">收入</th>
      </tr>
      <tr>
        <th style="width: 300px" align="center">{{ num }}钻</th>
        <th style="width: 300px" align="center">{{ price }}元</th>
      </tr>
    </table>
    <p>充值记录</p>
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="用户id" prop="username">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入用户id"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="member">
          <el-input
            style="width: 180px"
            v-model="nickname"
            clearable
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>

        <el-form-item label="充值时间" prop="time">
          <el-date-picker
            v-model="timee"
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
            @click="serch"
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
      <el-table-column prop="uid" label="用户id" align="center">
      </el-table-column>

      <el-table-column prop="name" label="用户名" align="center">
      </el-table-column>
      <el-table-column prop="pay_time" label="充值时间" align="center">
      </el-table-column>
      <el-table-column prop="money" label="充值金额" align="center">
      </el-table-column>
      <el-table-column prop="number" label="充值钻石" align="center">
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
  </div>
</template>

<script>
import { diamonds, goodsListdel } from "@/request/api";
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

      nickname: "",
      uid: "",

      time: "",
      timee: "",
      num: "",
      price: "",

      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
    timee(newVal) {
      if (newVal == null) {
        this.timee = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    serch() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        nickname: this.nickname,
        uid: this.uid,

        s_time: this.time[0],
        e_time: this.time[1],
        s_re_time: this.timee[0],
        e_re_time: this.timee[1],
      };
      diamonds(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.price = res.data.count.price;
        this.num = res.data.count.num;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    serch1() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        nickname: this.nickname,
        uid: this.uid,

        s_time: this.time[0],
        e_time: this.time[1],
        s_re_time: this.timee[0],
        e_re_time: this.timee[1],
      };
      diamonds(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.price = res.data.count.price;
        this.num = res.data.count.num;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        nickname: this.nickname,
        uid: this.uid,

        s_time: this.time[0],
        e_time: this.time[1],
        s_re_time: this.timee[0],
        e_re_time: this.timee[1],
      };
      diamonds(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.price = res.data.count.price;
        this.num = res.data.count.num;
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
