<template>
  <div>
    <Echart
      :options="options"
      id="centreLeft1Chart"
      height="220px"
      width="260px"
    ></Echart>
  </div>
</template>

<script>
import Echart from "@/common/echart";
export default {
  data() {
    return {
      options: {},
    };
  },
  components: {
    Echart,
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({}),
    },
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          color: [
            "#ffb11c",
            "#da54ff",
            "#ff718f",
            "#00ffd8",
            "#ff7022",
            "#00d2f8",
            "#81f16b",
            "#f5735f",
            "#f4fb0b",
            "#8378ea",
          ],
          tooltip: {
            trigger: "item",
            formatter: "物业合作 <br/>{b} : {c} ({d}%)",
          },
          toolbox: {
            show: true,
          },
          calculable: true,
          legend: {
            orient: "horizontal",
            icon: "circle",
            bottom: 0,
            x: "center",
            data: newData.xData,
            textStyle: {
              color: "#fff",
            },
          },
          series: [
            {
              name: "通过率统计",
              type: "pie",
              radius: [10, 50],
              roseType: "area",
              center: ["50%", "40%"],
              data: newData.seriesData,
            },
          ],
        };
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>