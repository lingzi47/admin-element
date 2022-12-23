<template>
  <div>
    <el-table :data="list">
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="pk" label="pk值" align="center"> </el-table-column>

      <el-table-column prop="gl" label="概率" align="center"> </el-table-column>
    </el-table>

    <div class="btn" v-if="id">
      <el-button type="danger" @click="admin1"> 拒绝</el-button>
      <el-button type="primary" @click="admin2">通过</el-button>
    </div>
  </div>
</template>
<script>
import { luckstalist, lucksta } from "@/request/api";

export default {
  data() {
    return {
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      list: [],
      name: "",
      id: "",
    };
  },
  created() {
    this.huo();
  },
  computed: {},
  methods: {
    huo() {
      let params = {
        token: sessionStorage.getItem("token"),
        // sta: 10,
      };
      luckstalist(params).then((res) => {
        this.id = res.data.data.id;
        var jsonStr = res.data.data.luckjson;
        var jsonObj = JSON.parse(jsonStr);
        this.list = jsonObj;
      });
    },
    admin1() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 30,
        id: this.id,
      };
      lucksta(params).then((res) => {
        if (res.status == 200) {
          this.$message.success("提交成功！");

          this.huo();
        }
      });
    },
    admin2() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
      };
      lucksta(params).then((res) => {
        if (res.status == 200) {
          this.$message.success("提交成功！");
          this.huo();
        }
      });
    },
  },
};
</script>
<style  scoped>
.btn {
  margin-top: 20px;
  margin-left: 400px;
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
