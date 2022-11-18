<template>
  <div>
    <div class="app">
      <div
        id="container"
        :style="'width: ' + width + 'px;height: ' + height + 'px;'"
      ></div>
      <div class="popup-box">
        <div class="popup">
          <div class="title-box">
            <div class="title">设备名称：</div>
            <div class="text">9000100044851651561</div>
          </div>
          <div class="title-box">
            <div class="title">设备IMEI号：</div>
            <div class="text">9000100044851651561</div>
          </div>
          <div class="title-box">
            <div class="title">设控制装填：</div>
            <div class="text">9000100044851651561</div>
          </div>
          <div class="title-box">
            <div class="title">设控制装填：</div>
            <div class="text">通电</div>
          </div>
          <div class="title-box">
            <div class="title">设备名称：</div>
            <div class="text">-0.0100km</div>
          </div>
          <div class="title-box">
            <div class="title">设备名称：</div>
            <div class="text">-0.0100km</div>
          </div>
          <div class="title-box">
            <div class="title">设备名称：</div>
            <div class="text">-0.0100km</div>
          </div>
          <div class="title-box">
            <div class="title">电压：</div>
            <div class="text">2032-23-23 15：45：48</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  data() {
    return {
      overlay: null,
      infoWindow: null,
      isInfo: true,
    };
  },

  mounted() {
    let center = new TMap.LatLng(39.984104, 116.307503);
    // 初始化地图
    let map = new TMap.Map("container", {
      zoom: 15,
      center: center,
    });
    //初始化marker
    let marker = new TMap.MultiMarker({
      id: "marker-layer",
      map: map,
      styles: {
        marker: new TMap.MarkerStyle({
          width: 25,
          height: 35,
          anchor: {
            x: 16,
            y: 32,
          },
          src: "https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/markerDefault.png",
        }),
      },
      geometries: [
        {
          id: "battery",
          styleId: "marker",
          position: new TMap.LatLng(39.984104, 116.307503),
          properties: {
            title: "marker",
          },
        },
      ],
    });
  },
};
</script>
<style lang="scss" scoped>
.popup-box {
  width: 403px;
  height: 220px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #c4c4c499;
  box-shadow: 2px 2px 6px 0px #3a3a3a26;
  .popup {
    width: 100%;
    height: 100%;
    padding: 26px 0 0 24px;
    .title-box {
      display: flex;
      height: 14px;
      margin-bottom: 8px;
      font-size: 12px;
      color: #141222;
      .title {
        line-height: 14px;
        width: 80px;
      }
      .text {
        line-height: 14px;
      }
    }
  }
}
</style>