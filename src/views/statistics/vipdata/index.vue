<template>
  <div class="home">
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>会员统计</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <p style="padding: 10px"></p>
    <table border="1">
      <tr>
        <th style="width: 200px" align="center">会员总数</th>
        <th style="width: 200px" align="center">安卓会员数</th>
        <th style="width: 200px" align="center">ios会员数</th>
        <th style="width: 200px" align="center">未续费会员数</th>
        <th style="width: 200px" align="center">续费会员数</th>
      </tr>
      <tr>
        <th style="width: 200px" align="center">{{ tableData.memCount }}</th>
        <th style="width: 200px" align="center">{{ tableData.andCount }}</th>
        <th style="width: 200px" align="center">{{ tableData.iosCount }}</th>
        <th style="width: 200px" align="center">{{ tableData.overCount }}</th>
        <th style="width: 200px" align="center">{{ tableData.conCount }}</th>
      </tr>
    </table>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          >会员人数增长情况统计</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <p style="padding: 10px"></p>
    <span class="tiao">日期选择 ：</span>
    <el-date-picker
      v-model="time"
      type="datetimerange"
      value-format="yyyy-MM-dd HH:mm:ss"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </el-date-picker>

    <el-button
      type="info"
      round
      style="padding: 8px 20px; margin-left: 10px"
      @click="admin"
      >确认</el-button
    >
    <p style="padding: 10px"></p>
    <table border="1">
      <tr>
        <th style="width: 200px" align="center">渠道</th>
        <th style="width: 200px" align="center">会员新增数</th>
        <th style="width: 200px" align="center">首次会员数</th>
        <th style="width: 200px" align="center">续费会员数</th>
        <th style="width: 200px" align="center">未续费会员数</th>
      </tr>
      <tr>
        <th style="width: 200px" align="center">安卓</th>
        <th style="width: 200px" align="center">{{ tableData.andnewTime }}</th>
        <th style="width: 200px" align="center">
          {{ tableData.andfirstTime }}
        </th>
        <th style="width: 200px" align="center">
          {{ tableData.andconTime }}
        </th>
        <th style="width: 200px" align="center">
          {{ tableData.andoverTime }}
        </th>
      </tr>
      <tr>
        <th style="width: 200px" align="center">ios</th>
        <th style="width: 200px" align="center">{{ tableData.iosnewTime }}</th>
        <th style="width: 200px" align="center">
          {{ tableData.iosfirstTime }}
        </th>
        <th style="width: 200px" align="center">
          {{ tableData.iosconTime }}
        </th>
        <th style="width: 200px" align="center">
          {{ tableData.iosoverTime }}
        </th>
      </tr>
    </table>
  </div>
</template>
<script>
import { memCount } from "@/request/api";
export default {
  data() {
    return {
      tableData: [],
      time: "",
      sta: "",
      client_type: "",
    };
  },
  created() {
    this.list();
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  mounted() {},

  methods: {
    list() {
      let params = {
        token: sessionStorage.getItem("token"),
        s_time: this.time[0],
        e_time: this.time[1],
      };
      memCount(params).then((res) => {
        console.log(res);
        this.tableData = res.data.data;
      });
    },
    admin() {
      this.list();
    },
  },
};
</script>

<style scoped>
.tiao {
  color: rgb(151, 151, 151);
  font-size: 14px;
  padding: 10px;
  margin-bottom: 20px;
}
.home {
  padding: 20px 100px;
}

table {
  border-collapse: collapse;

  text-align: center;
}
table tr,
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

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
</style>