<template>
  <div id="app">
    <iframe
      style="border: none"
      :width="searchTableWidth"
      :height="searchTableHeight"
      v-bind:src="reportUrl"
    ></iframe>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  methods: {
    widthHeight() {
      this.searchTableHeight = window.innerHeight - 10;
      this.searchTableWidth = window.innerWidth - 230;
    },
  },
  data() {
    return {
      reportUrl: "https://admin.yujian02.xyz/screen",

      searchTableHeight: 0,
      searchTableWidth: 0,
    };
  },
  mounted() {
    window.onresize = () => {
      this.widthHeight(); // 自适应高宽度
    };
    this.$nextTick(function () {
      this.widthHeight();
    });
  },
  created() {
    // 从路由里动态获取 url地址   具体地址看libs下util.js里的 backendMenuToRoute  方法
    this.reportUrl = "https://admin.yujian02.xyz/screen";
  },
  watch: {
    $route: function () {
      // 监听路由变化
      this.reportUrl = "https://admin.yujian02.xyz/screen";
    },
  },
};
</script>