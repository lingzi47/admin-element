<template>
  <div class="user">
    <table border="1" class="tab">
      <tr>
        <th style="width: 500px">任务</th>
      </tr>
      <tr v-if="id">
        <td>
          钻石累计提现获得提现数值的千分之({{ num }})张
          {{ coupon_name }}
        </td>
      </tr>
      <tr v-else>
        <td>暂无数据</td>
      </tr>
    </table>
    <div class="btn" v-if="id">
      <el-button type="danger" @click="refuse"> 拒绝</el-button>
      <el-button type="primary" @click="submitForm">通过</el-button>
    </div>
  </div>
</template>

<script>
import { coupontaskstalist, coupontasksta } from "@/requestw/api";

export default {
  components: {},
  data() {
    return {
      userList: [], // 用户列表
      num: "",
      id: "",

      coupon_name: "",
    };
  },
  watch: {},
  created() {
    this.getUserList();
  },
  mounted() {},
  computed: {},
  methods: {
    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
      };
      coupontasksta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("提交成功！");
          this.getUserList();
          location.reload();
        }
      });
      this.getUserList();
    },

    refuse() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 30,
        id: this.id,
      };
      coupontasksta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("提交成功！");
          this.getUserList();
          location.reload();
        }
      });
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
    },

    set(row) {
      this.dialogVisible = true;
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      coupontaskstalist(params).then((res) => {
        //console.log(res);
        this.num = res.data.data.num;
        this.coupon_name = res.data.data.coupon_name;
        this.id = res.data.data.id;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
  margin-left: 600px;
}
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
</style>
