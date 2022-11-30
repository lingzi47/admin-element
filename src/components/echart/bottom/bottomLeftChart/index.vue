<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from "./chart.vue";
import { shop } from "@/request/api";
export default {
  data() {
    return {
      cdata: {
        category: [],
        lineData: [],
        barData: [],
        rateData: [],
      },
    };
  },
  components: {
    Chart,
  },
  mounted() {
    this.getlist();
    // this.setData();
  },

  created() {
    // this.getlist();
  },
  methods: {
    getlist() {
      let params = {};
      shop(params).then((res) => {
        this.cdata.category = res.data.data;
        this.cdata.lineData = res.data.lineData;
        this.cdata.barData = res.data.barData;
        for (let i = 0; i < this.cdata.barData.length; i++) {
          let rate = this.cdata.barData[i] / this.cdata.lineData[i];
          this.cdata.rateData.push(rate.toFixed(2));
          console.log(this.cdata.rateData);
        }
      });
    },
    // 根据自己的业务情况修改
    // setData() {
    //   for (let i = 0; i < this.cdata.barData.length - 1; i++) {
    //     let rate = this.cdata.barData[i] / this.cdata.lineData[i];
    //     this.cdata.rateData.push(rate.toFixed(2));
    //     console.log(this.cdata.rateData);
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped>
</style>