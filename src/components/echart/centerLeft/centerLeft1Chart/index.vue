<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from "./chart.vue";
import { wuye } from "@/request/api";
export default {
  data() {
    return {
      cdata: {
        xData: [],
        seriesData: [],
      },
    };
  },
  components: {
    Chart,
  },

  created() {
    this.getlist();
  },

  methods: {
    getlist() {
      let params = {};
      wuye(params).then((res) => {
        this.cdata.xData = res.data.xData;
        this.cdata.seriesData = res.data.seriesData;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>