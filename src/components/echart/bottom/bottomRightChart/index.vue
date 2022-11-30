<template>
  <div
    class="echart"
    id="mychart"
    style="width: 1000px; height: 300px; margin-left: 0px"
  ></div>
</template>

<script>
import * as echarts from "echarts";
import { anzhuang } from "@/request/api";
export default {
  data() {
    return {
      myChart: {},
      xData: [], //横坐标
      yData: [], //人数数据
      myChartStyle: { float: "left", width: "90%", height: "300px" }, //图表样式
    };
  },

  created() {
    this.getlist();
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    getlist() {
      let params = {};
      anzhuang(params).then((res) => {
        this.xData = res.data.xData;
        this.yData = res.data.yData;
        console.log(this.xData);
      });
    },
    initEcharts() {
      let params = {};
      anzhuang(params).then((res) => {
        var myChart = echarts.init(document.getElementById("mychart"));
        const option = {
          xAxis: {
            data: res.data.xData,
          },
          yAxis: [
            {
              type: "value",
              splitLine: false,
            },
          ],
          textStyle: {
            //图例中文字的样式
            color: "#F8F8FF",
            fontSize: 16,
          },
          series: [
            {
              data: res.data.yData,
              type: "line", // 类型设置为折线图
              smooth: true,
              areaStyle: {
                normal: {
                  color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: "#7B68EE", // 0% 处的颜色
                      },
                      {
                        offset: 0.7,
                        color: "rgba(220,56,129,0)", // 100% 处的颜色
                      },
                    ],
                    globalCoord: false, // 缺省为 false
                  },
                },
              },
            },
          ],
        };
        this.myChart = echarts.init(document.getElementById("mychart"));
        this.myChart.setOption(option);
      });

      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    },
  },
};
</script>

