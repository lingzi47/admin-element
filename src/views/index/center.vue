<template>
  <div id="mydiv">
    <div class="top">
      <el-row>
        <el-col :span="6">设备数量</el-col>
        <el-col :span="6">合作点位</el-col>
        <el-col :span="6">合作物业</el-col>
        <el-col :span="6">辐射人口</el-col>
      </el-row>
      <el-row>
        <el-col :span="6">500</el-col>
        <el-col :span="6">630</el-col>
        <el-col :span="6">4</el-col>
        <el-col :span="6">110587</el-col>
      </el-row>
    </div>
    <div id="map" style="height: 610px; width: 100%" ref="myEchart"></div>
    <img src="./../../assets/ce.png" id="imgbg" />
  </div>
</template>
<script>
import * as echarts from "echarts";
import henanJson from "../../assets/shen.json";
import { property } from "@/request/api";
export default {
  name: "DisplayDraw",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init(data) {
      let params = {};
      property(params).then((res) => {
        console.log(res.data.list1, "ditu");
        let myChart = echarts.init(document.getElementById("map"));
        echarts.registerMap("henan", henanJson);
        let option = {
          title: {
            text: "",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: function (params) {
              if (!params.value) {
                return "城市信息" + "<br />" + params.name;
              }
              console.log(params);
              console.log(params.name);
              console.log(params.address);
              console.log(params.num);
              return (
                "点位信息" +
                "<br />" +
                "小区" +
                "：" +
                params.data.property +
                "<br />" +
                "地址" +
                "：" +
                params.data.name +
                "<br />" +
                "设备数量" +
                "：" +
                params.data.num +
                "台"
              );
            },
            confine: true,
            backgroundColor: "#0d142f", //标题背景色
            borderWidth: 1,
            borderColor: "#02eeef", //边框颜色
            textStyle: {
              color: "#fff",

              fontSize: 13,
            },
          },
          //地理坐标系组件。地理坐标系组件用于地图的绘制，支持在地理坐标系上绘制散点图，线集。
          geo: {
            map: "henan",
            show: false,
            roam: true,
            label: {
              emphasis: {
                show: true, //开启悬浮事件
              },
            },
          },

          series: [
            //地图
            {
              name: "",
              type: "map",
              // zoom: 1.4,
              label: {
                show: false,
              },
              mapType: "henan", // 自定义扩展图表类型
              // 地图区域的样式设置
              itemStyle: {
                emphasis: {
                  // 鼠标放上去高亮的样式
                  // emphasis: {
                  areaColor: "#0984e3",
                  borderWidth: 0,
                  // },
                  borderColor: "#2378f7", // 图形的描边颜色 #2378f7
                  // borderWidth: "1",
                  // areaColor: "#233F53", // 阴影色 #233F53
                  label: {
                    show: false,
                    textStyle: {
                      color: "#fff",
                      fontSize: 14,
                    },
                  },
                },

                normal: {
                  borderColor: "#0AAEB0", // 图形的描边颜色 #0AAEB0
                  borderWidth: 1, // 描边线宽。
                  borderType: "solid", // 柱条的描边类型。
                  areaColor: "#233F53", // 图形的颜色 #233F53
                  shadowBlur: 5, // 图形阴影的模糊大小。
                  shadowColor: "#233F53", // 阴影色 #233F53
                  shadowOffsetX: 5, // X轴阴影
                  shadowOffsetY: 5, // Y轴阴影

                  label: {
                    show: true, // 显示区域名称// 显示区域名称// 显示区域名称// 显示区域名称
                    textStyle: {
                      color: "#fff",
                      fontSize: 12,
                    },
                  },
                },
              },
              data: [],
            },
            //待安装
            {
              type: "effectScatter",
              coordinateSystem: "geo", // 使用地理坐标系
              // 要有对应的经纬度才显示，先经度再维度
              data: res.data.list2,
              showEffectOn: "render", // 绘制完成后显示特效
              hoverAnimation: true,
              label: {
                // 图形上的文本标签
                show: true,
                formatter: "{b}",
                position: "top",
              },
              symbol: "image://" + require("./../../assets/img/点1.png"), // 自定义图片路径
              symbolSize: [20, 20], // 图片大小
              // 默认样式
              itemStyle: {
                color: "transparent",
                shadowBlur: 10,
                shadowColor: "#333",
              },
              zlevel: 1,
            },
            //已安装
            {
              type: "effectScatter",
              coordinateSystem: "geo", // 使用地理坐标系
              // 要有对应的经纬度才显示，先经度再维度
              data: res.data.list1,
              showEffectOn: "render", // 绘制完成后显示特效
              hoverAnimation: true,
              label: {
                // 图形上的文本标签
                show: true,
                formatter: "{b}",
                position: "top",
              },
              symbol: "image://" + require("./../../assets/img/点2.png"), // 自定义图片路径
              symbolSize: [20, 20], // 图片大小
              // 默认样式
              itemStyle: {
                color: "transparent",
                shadowBlur: 10,
                shadowColor: "#333",
              },
              zlevel: 2,
            },
            //带核验
            {
              type: "effectScatter",
              coordinateSystem: "geo", // 使用地理坐标系
              // 要有对应的经纬度才显示，先经度再维度
              data: res.data.list3,
              showEffectOn: "render", // 绘制完成后显示特效
              hoverAnimation: true,
              label: {
                // 图形上的文本标签
                show: true,
                formatter: "{b}",
                position: "top",
              },
              symbol: "image://" + require("./../../assets/img/点3.png"), // 自定义图片路径
              symbolSize: [20, 20], // 图片大小
              // 默认样式
              itemStyle: {
                color: "transparent",
                shadowBlur: 10,
                shadowColor: "#333",
              },
              zlevel: 3,
            },
          ],
        };
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#mydiv {
  background-image: url("./../../assets/背景.png");
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.top {
  text-align: center;
  position: relative;
  top: 20px;
}
#map {
  position: relative;
}
#imgbg {
  position: absolute;
  top: 80px;
  left: 1000px;
}
.img {
  width: 100%;
}
</style>
