<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>抽奖列表</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <el-button type="info" class="btn" @click="lishi">历史列表</el-button>
    <el-table
      :data="list"
      border
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column
        prop="id"
        label="顺序（左上角为起点顺时针排序）"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="pk" label="PK值" align="center"> </el-table-column>
      <el-table-column prop="gl" label="概率" align="center">
        <template slot-scope="scope"> {{ scope.row.gl }}% </template>
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <el-tag type="success" effect="dark" v-if="state == 20">已通过</el-tag>
        <el-tag type="danger" effect="dark" v-if="state == 30">未通过</el-tag>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { lucklist } from "@/request/api";
export default {
  data() {
    return {
      list: [],
      state: "",
    };
  },
  created() {
    let params = {
      token: sessionStorage.getItem("token"),
    };
    lucklist(params).then((res) => {
      this.state = res.data.data.sta;
      var jsonStr = res.data.data.luckjson;
      var jsonObj = JSON.parse(jsonStr);
      this.list = jsonObj;
    });
  },
  computed: {},
  methods: {
    lishi() {
      this.$router.push({
        path: "/lotteryhis",
      });
    },
  },
};
</script>
<style  scoped>
.btn {
  margin-left: 1030px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
