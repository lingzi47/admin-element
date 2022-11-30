<template>
  <div>
    <div id="main" style="width: 300px; height: 240px"></div>
  </div>
</template>

<script>
import { dianwei } from "@/request/api";
import * as echarts from "echarts";
export default {
  name: "index",
  data() {
    return {
      data: [],
      dataInfo: [],
    };
  },
  mounted: function () {
    this.getPie();
  },

  created() {
    this.getlist();
  },

  methods: {
    getlist() {
      let params = {};
      dianwei(params).then((res) => {
        this.dataInfo = res.data.dataInfo;
        this.data = res.data.data;
        console.log(this.data);
        console.log(this.dataInfo);
      });
    },
    getPie() {
      let params = {};
      dianwei(params).then((res) => {
        // 绘制图表u
        var myChart = echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        var option = {
          //标题
          title: {
            text: "",
            x: "left", //标题位置
          },
          // stillShowZeroSum: true,
          //鼠标划过时饼状图上显示的数据
          tooltip: {
            trigger: "item",
            formatter: "点位部署<br/>{b}:{c} ({d}%)",
          },
          //图例
          legend: {
            bottom: 5, //控制图例出现的距离  默认左上角
            left: "center", //控制图例的位置

            textStyle: {
              //图例中文字的样式
              color: "#F8F8FF",
              fontSize: 11,
            },
            data: res.data.data, //图例上显示的饼图各模块上的名字
          },
          //饼图中各模块的颜色
          color: ["#32dadd", "#b6a2de", "#5ab1ef", "#6495ED", "#00BFFF"],
          // 饼图数据
          series: {
            type: "pie", //echarts图的类型   pie代表饼图
            radius: "40%", //饼图中饼状部分的大小所占整个父元素的百分比
            center: ["50%", "40%"], //整个饼图在整个父元素中的位置
            // data:''               //饼图数据
            data: res.data.dataInfo,
            itemStyle: {
              normal: {
                label: {
                  show: true, //饼图上是否出现标注文字 标注各模块代表什么  默认是true
                  // position: 'inner',//控制饼图上标注文字相对于饼图的位置  默认位置在饼图外
                },
                labelLine: {
                  show: true, //官网demo里外部标注上的小细线的显示隐藏    默认显示
                },
              },
            },
          },
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
      });
    },
  },
};
</script>
<style lang="scss" class>
</style>

