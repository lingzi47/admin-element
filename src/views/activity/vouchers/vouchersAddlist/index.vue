<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>消费送会员活动</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <el-form :inline="true">
      <el-form-item style="float: right">
        <el-button type="primary" @click="add()">添加</el-button>
        <el-button type="primary" @click="lishi()">历史列表</el-button>
      </el-form-item>
    </el-form>
    <table border="1" class="tab">
      <tr>
        <th style="width: 500px">任务</th>
      </tr>
      <tr>
        <td>
          钻石累计提现获得提现数值的千分之({{ num }})张
          {{ coupon_name }}
        </td>
      </tr>
    </table>

    <edit-data ref="editData" />
  </div>
</template>
<script>
import editData from "./components/editData.vue";
import { coupontaskindex, couponlist } from "@/request/api";

export default {
  components: {
    editData,
  },
  data() {
    return {
      userList: [],
      num: "",
      need_num: "",
      id: "",
      dai: "",
      coupon_name: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: "", //总条数
      },
    };
  },
  created() {
    this.getlist();
  },
  computed: {},
  methods: {
    lishi() {
      this.$router.push({
        path: "/vouhis",
      });
    },

    add() {
      this.$refs.editData.show();
    },
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      coupontaskindex(params).then((res) => {
        this.num = res.data.data.num;
        this.coupon_name = res.data.data.coupon_name;
      });
      let params1 = {
        coupon_id: this.coupon_id,
      };
      couponlist(params1).then((res) => {});
    },
  },
};
</script>
<style  scoped>
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
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

.tab {
  margin-left: 200px;
}
</style>
