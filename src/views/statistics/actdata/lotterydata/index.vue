<template>
  <div>
    <el-row :gutter="20" style="margin-let: 1500px">
      <el-col :lg="12" :md="24">
        <span class="tiao">参加活动人数统计 ：</span>
        <table border="1">
          <tr>
            <th style="width: 200px" align="center">参与活动总人数</th>
            <th style="width: 200px" align="center">今日参加活动人数</th>
            <th style="width: 200px" align="center">7日参加活动人数</th>
          </tr>
          <tr>
            <th style="width: 200px" align="center">
              {{ list.userall }} 人（次）
            </th>
            <th style="width: 200px" align="center">
              {{ list.userday }} 人（次）
            </th>
            <th style="width: 200px" align="center">
              {{ list.user7 }} 人（次）
            </th>
          </tr>
        </table>
        <p style="padding: 10px"></p>

        <span class="tiao">渠道人数划分 ：</span>
        <table border="1">
          <tr>
            <th style="width: 200px" align="center">ios端参加活动人数</th>
            <th style="width: 200px" align="center">安卓端参加活动总人数</th>
          </tr>
          <tr>
            <th style="width: 200px" align="center">{{ list.ios }} 人（次）</th>
            <th style="width: 200px" align="center">
              {{ list.android }} 人（次）
            </th>
          </tr>
        </table>
        <p style="padding: 10px"></p>
        <span class="tiao">时间区间选择 ：</span>
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
            <th style="width: 200px" align="center">参加活动人数</th>
            <th style="width: 200px" align="center">消耗钻石数</th>
            <th style="width: 200px" align="center">ios端参加活动总人数</th>
            <th style="width: 200px" align="center">安卓端参加活动总人数</th>
            <th style="width: 200px" align="center">
              当日钻石抽奖时段最高次数
            </th>
          </tr>
          <tr>
            <th style="width: 200px" align="center">
              {{ list.usertimeall }} 人（次）
            </th>
            <th style="width: 200px" align="center">人（次）</th>
            <th style="width: 200px" align="center">
              {{ list.usertimeios }} 人（次）
            </th>
            <th style="width: 200px" align="center">
              {{ list.usertimeaz }} 人（次）
            </th>
            <th style="width: 200px" align="center">人（次）</th>
          </tr>
        </table>
      </el-col>
    </el-row>
    <p style="padding: 10px"></p>
    <span class="tiao">抽奖奖品中奖人数统计</span>
    <p style="padding: 10px"></p>
    <span class="tiao">时间区间选择 ：</span>
    <el-date-picker
      v-model="timee"
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
      @click="admin1"
      >确认</el-button
    >
    <p style="padding: 10px"></p>
    <el-table
      :data="tableData"
      border
      style="width: 30%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="name" label="奖品" align="center">
      </el-table-column>

      <el-table-column prop="num" label="获奖人数" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { luckAll, userZisu, userStart, userBlm } from "@/request/api";

export default {
  data() {
    return {
      tableData: [],
      time: "",
      timee: "",
      list: [],
      list: [],
      sales: [],

      barScoreChart: null, //柱状图
      month: [], //月份
      subject: [], //人
      mSalesVolume: [],
      mSalesAmount: [],
    };
  },
  mounted() {},
  created() {
    this.admin();
    this.admin1();
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
  methods: {
    admin() {
      let params = {
        token: sessionStorage.getItem("token"),
        time1: this.time[0],
        time2: this.time[1],
      };
      luckAll(params).then((res) => {
        this.list = res.data.data;
      });
    },
    admin1() {
      let params = {
        token: sessionStorage.getItem("token"),
        lucktime1: this.timee[0],
        lucktime2: this.timee[1],
      };
      luckAll(params).then((res) => {
        this.tableData = res.data.data.luckinfo;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts {
  .explain {
    margin-bottom: 10px;

    a {
      color: #409eff;
    }

    a:hover {
      color: #66b1ff;
      text-decoration: underline;
    }
  }

  .chart {
    margin-bottom: 20px;
  }
}
.tiao {
  color: rgb(151, 151, 151);
  font-size: 14px;
  padding: 10px;
  margin-bottom: 20px;
}
.btn {
  margin-top: 20px;
  margin-bottom: 20px;
}
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