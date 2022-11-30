<template>
  <div>
    <div id="myChart" ref="myChart" style="width: 300px; height: 240px"></div>
  </div>
</template>
<script>
import echarts from "echarts";

import { ads } from "@/request/api";
export default {
  data() {
    return {
      data: [],
      dataInfo: [],
    };
  },
  mounted() {
    this.drawLine();
  },

  created() {
    this.getlist();
  },
  methods: {
    getlist() {
      let params = {};
      ads(params).then((res) => {
        this.dataInfo = res.data.dataInfo;
        this.data = res.data.data;
        console.log(this.data);
        console.log(this.dataInfo);
      });
    },

    drawLine() {
      let params = {};
      ads(params).then((res) => {
        // 初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart);
        // 绘制图表
        myChart.setOption({
          title: { text: "" },
          tooltip: {},
          xAxis: {
            data: res.data.data,
          },
          textStyle: {
            //图例中文字的样式
            color: "#F8F8FF",
            fontSize: 11,
          },
          yAxis: {
            type: "value",
            splitLine: false,
          },
          series: [
            {
              name: "广告收益", //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
              type: "bar",
              itemStyle: {
                //
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(255,255,255,0)" },
                    { offset: 0.5, color: "#44C0C1" },
                    { offset: 1, color: "#188df0" },
                  ]),
                },
              },
              label: {
                //label要加入normal才可生效,label即为x轴对应Y轴的值
                normal: {
                  show: true,
                  color: "white", //设置渐变时候控制不到颜色，只能通过全局textStyle来控制
                  position: "top",
                },
                textStyle: {
                  //图例中文字的样式
                  color: "#F8F8FF",
                  fontSize: 11,
                },
              },
              //图例

              textStyle: {
                //图例中文字的样式
                color: "#F8F8FF",
                fontSize: 11,
              },

              barWidth: "30%",
              data: res.data.dataInfo,
            },
          ],
        });
      });
    },
  },
};
</script>
 
<style>
</style>