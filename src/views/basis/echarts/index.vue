<template>
  <div class="echarts">
    <basis-layout title="eCharts图表" style="margin-top: 10px">
      <div class="explain">
        详细配置见官网：<a
          href="https://echarts.apache.org/zh/index.html"
          target="_blank"
          >https://echarts.apache.org/zh/index.html</a
        >
      </div>
      <el-row :gutter="20">
        <el-col :lg="12" :md="24">
          <div
            class="chart"
            id="lineScore"
            style="background-color: #fff; height: 500px"
          ></div>
        </el-col>
        <el-col :lg="12" :md="24">
          <div
            class="chart"
            id="barScore"
            style="background-color: #fff; height: 500px"
          ></div>
        </el-col>
      </el-row>
    </basis-layout>
  </div>
</template>

<script>
import basisLayout from "@/components/basisLayout.vue";
import * as echarts from "echarts";
import { getechartsData } from "@/api/echarts";
export default {
  name: "echarts",
  components: {
    basisLayout,
  },
  data() {
    return {
      sales: [],
      //   lineScoreChart: null, //折线图
      barScoreChart: null, //柱状图
      month: [], //月份
      subject: [], //人
      mSalesVolume: [],
      mSalesAmount: [],
    };
  },
  created() {
    this.getechartsData(); //获取图标数据
  },
  mounted() {
    let self = this;
    window.onresize = function () {
      //   if (self.lineScoreChart) self.lineScoreChart.resize();
      if (self.barScoreChart) self.barScoreChart.resize();
    };
  },
  methods: {
    async getechartsData() {
      let res = await getechartsData();
      if (res.status == 200) {
        //console.log(JSON.parse(JSON.stringify(res.data)));
        let data = res.data;
        this.sales = res.data;
        //console.log(this.sales);
        let month = [];
        let subject = [];
        let mSalesVolume = [[], [], [], []];
        let mSalesAmount = [[], [], [], []];
        data.map((d, i) => {
          month.push(d.date);
          d.personnel.map((p, j) => {
            if (subject.indexOf(p.name) == -1) subject.push(p.name);
            mSalesVolume[j].push(p.salesVolume);
            mSalesAmount[j].push(p.salesAmount);
          });
        });
        this.month = month;
        this.subject = subject;
        this.mSalesVolume = mSalesVolume;
        this.mSalesAmount = mSalesAmount;
        // this.setLineScore();
        this.setBarScore();
      }
    },
    setLineScore() {
      //设置折线图
      this.lineScoreChart = echarts.init(document.getElementById("lineScore"));
      var series = [];
      this.mSalesVolume.map((item, index) => {
        series.push({
          type: "line",
          name: this.subject[index],
          data: item,
          smooth: true,
        });
      });
      let option = {
        title: {
          text: "平滑折线图",
          left: "center",
        },
        tooltip: {
          //鼠标悬停提示
          trigger: "axis",
        },
        legend: {
          bottom: 10,
          data: this.subject,
        },
        xAxis: {
          data: this.month,
        },
        yAxis: {
          min: 8,
        },
        series: series,
      };
      // 使用刚指定的配置项和数据显示图表。
      this.lineScoreChart.setOption(option);
    },
    setBarScore() {
      //设置柱状图
      this.barScoreChart = echarts.init(document.getElementById("barScore"));
      let series = [];
      this.mSalesAmount.map((item, index) => {
        series.push({
          type: "bar",
          name: this.subject[index],
          emphasis: {
            focus: "series",
          },
          data: item,
        });
      });
      let subject = JSON.parse(JSON.stringify(this.subject));
      let option = {
        title: {
          text: "柱状图",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          bottom: 70,
          left: 70,
          right: 30,
        },
        legend: {
          bottom: 10,
          data: subject,
        },
        xAxis: {
          data: this.month,
          type: "category",
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        series: series,
      };
      this.barScoreChart.setOption(option);
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
</style>
