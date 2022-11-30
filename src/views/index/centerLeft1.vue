<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="align-left" class="text-icon"></icon>
        </span>
        <span class="fs-xl text mx-2">品类销售</span>
        <span class="fs-xl text mx-2">单位： 个</span>
      </div>
      <div class="d-flex ai-center flex-column body-box">
        <dv-capsule-chart class="dv-cap-chart" :config="config" />
      </div>
    </div>
  </div>
</template>

<script>
import { pinlei } from "@/request/api";

export default {
  data() {
    return {
      config: {},
    };
  },

  created() {
    this.getlist();
  },

  methods: {
    getlist() {
      let params = {};
      pinlei(params).then((res) => {
        this.config = res;
        // console.log(this.config.data);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
$box-height: 290px;
$box-width: 330px;
#centerRight1 {
  padding: 5px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    padding: 5px;
    height: $box-height;
    width: $box-width;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-cap-chart {
      width: 100%;
      height: 260px;
    }
  }
}
</style>
