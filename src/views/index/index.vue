<template>
  <div id="index" ref="appRef">
    <div class="bg">
      <dv-loading v-if="loading">Loading...</dv-loading>
      <div v-else class="host-body">
        <div class="d-flex jc-center">
          <dv-decoration-10 class="dv-dec-10" />
          <div class="d-flex jc-center">
            <dv-decoration-8 class="dv-dec-8" :color="decorationColor" />
            <div class="title">
              <span class="title-text"
                >社区智能便民应急箱 (共享医药箱) 数据中心</span
              >
              <dv-decoration-6
                class="dv-dec-6"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
              />
            </div>
            <dv-decoration-8
              class="dv-dec-8"
              :reverse="true"
              :color="decorationColor"
            />
          </div>
          <dv-decoration-10 class="dv-dec-10-s" />
        </div>

        <!-- 第二行 -->
        <div class="d-flex jc-between px-2">
          <div class="d-flex aside-width">
            <div class="react-left ml-4 react-l-s">
              <span class="react-left"></span>
              <span class="text"
                ><img src="./../../assets/logo.png" height="50px"
              /></span>
            </div>
          </div>
          <div class="d-flex aside-width">
            <div class="react-right mr-4 react-l-s" style="margin-left: 225px">
              <span class="react-after"></span>
              <span class="text"
                >{{ dateYear }} {{ dateWeek }} {{ dateDay }}</span
              >
            </div>
          </div>
        </div>

        <div class="body-box">
          <div class="content-box">
            <!-- 左上 -->
            <div>
              <dv-border-box-12 style="width: 350px; height: 300px">
                <centerLeft1 />
              </dv-border-box-12>
            </div>
            <!-- 左下 -->
            <div>
              <dv-border-box-12
                style="
                  width: 350px;
                  height: 300px;
                  margin-top: 300px;
                  margin-left: -350px;
                "
              >
                <centerLeft2 />
              </dv-border-box-12>
            </div>
            <!-- 中间 -->
            <div>
              <dv-border-box-12
                style="width: 1165px; height: 600px; margin-left: -5px"
              >
                <center />
              </dv-border-box-12>
            </div>
            <!-- 右上 -->
            <div>
              <dv-border-box-12 style="width: 350px; height: 300px">
                <centerRight2 />
              </dv-border-box-12>
            </div>
            <!-- 右下 -->
            <div>
              <dv-border-box-12
                style="
                  width: 350px;
                  height: 300px;
                  margin-top: 300px;
                  margin-left: -350px;
                "
              >
                <centerRight1 />
              </dv-border-box-12>
            </div>
          </div>

          <!-- 第四行数据 -->
          <div class="bottom-box">
            <dv-border-box-13>
              <bottomLeft />
            </dv-border-box-13>
            <dv-border-box-12 style="margin-left: -5px">
              <bottomRight />
            </dv-border-box-12>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drawMixin from "./../../utils/drawMixin.js";
import { formatTime } from "./../../utils/index.js";
import centerLeft1 from "./centerLeft1";
import centerLeft2 from "./centerLeft2";
import centerRight1 from "./centerRight1";
import centerRight2 from "./centerRight2";
import center from "./center";
import bottomLeft from "./bottomLeft";
import bottomRight from "./bottomRight";

export default {
  mixins: [drawMixin],
  data() {
    return {
      timing: null,
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
      decorationColor: ["#568aea", "#000000"],
    };
  },
  components: {
    centerLeft1,
    centerLeft2,
    centerRight1,
    centerRight2,
    center,
    bottomLeft,
    bottomRight,
  },
  mounted() {
    this.timeFn();
    this.cancelLoading();
  },
  beforeDestroy() {
    clearInterval(this.timing);
  },
  methods: {
    timeFn() {
      this.timing = setInterval(() => {
        this.dateDay = formatTime(new Date(), "HH: mm: ss");
        this.dateYear = formatTime(new Date(), "yyyy-MM-dd");
        this.dateWeek = this.weekday[new Date().getDay()];
      }, 1000);
    },
    cancelLoading() {
      setTimeout(() => {
        this.loading = false;
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/scss/index.scss";
@import "./../../assets/scss/index.scss";
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
  outline: none;
  box-sizing: border-box;
}
</style>
