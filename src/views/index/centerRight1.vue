<template>
  <div id="centerRight1">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span>
          <icon name="chart-line" class="text-icon"></icon>
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">广告收益</span>
          <span class="fs-xl text mx-2">单位 ：元</span>
        </div>
      </div>
      <div class="d-flex jc-center">
        <CenterRight1Chart />
      </div>
    </div>
  </div>
</template>

<script>
import CenterRight1Chart from "@/components/echart/centerri/CenterRight1Chart";

export default {
  data() {
    return {};
  },
  components: {
    CenterRight1Chart,
  },
};
</script>

<style lang="scss" scoped>
$box-height: 290px;
$box-width: 350px;
#centerRight1 {
  padding: 16px;
  padding-top: 20px;
  height: $box-height;
  width: $box-width;
  border-radius: 5px;
  .bg-color-black {
    height: $box-height - 30px;
    border-radius: 10px;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 10px;
    overflow: hidden;
    .dv-scr-board {
      width: 270px;
      height: 340px;
    }
  }
}
</style>
