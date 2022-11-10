<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>历史提交详情</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <el-table
      :data="list"
      border
      style="width: 40%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column label="pk值" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.pk == 0">再来一次</span>
          <span v-else>{{ scope.row.pk }}pk值</span>
        </template>
      </el-table-column>
      <el-table-column prop="gl" label="概率" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.gl }}%</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      luckjson: [],
    };
  },
  created() {
    this.luckjson = this.$route.query.list;
    var jsonObj = JSON.parse(this.luckjson);
    this.list = jsonObj;
  },
  computed: {},
  methods: {},
};
</script>
<style  scoped>
.btn {
  margin-left: 1030px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
