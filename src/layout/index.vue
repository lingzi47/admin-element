<template>
  <div class="app-wrapper">
    <!-- 头部导航 -->
    <navbar />
    <div class="main-container">
      <!-- 左侧菜单 -->
      <left-menu />
      <div class="right-container">
        <!-- 选项卡 -->
        <tabs-view />
        <!-- 主页面 -->
        <app-main />
        <!-- 底部导航 -->
        <footer-nav v-if="footerShow" />
      </div>
    </div>
  </div>
</template>
<script>
import { AppMain, Navbar, LeftMenu, TabsView, FooterNav } from "./components";
import ResizeMixin from "./mixin/ResizeHandler";
import { asyncRoutes } from "@/router";
export default {
  name: "Layout",
  mixins: [ResizeMixin],
  components: {
    AppMain,
    Navbar,
    LeftMenu,
    TabsView,
    FooterNav,
  },
  data() {
    return {
      footerShow: true, //是否显示底部导航
    };
  },
  created() {
    this.getActiveMenu(asyncRoutes);
  },
  methods: {
    getActiveMenu(arr) {
      for (const menu of arr) {
        if (menu.children && menu.children.length) {
          this.getActiveMenu(menu.children);
        } else {
          if (menu.meta.affix || menu.name == this.$route.name) {
            this.$store.dispatch("menu/addView", menu);
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$header-height: 60px;

.app-wrapper {
  width: 100%;
  height: 100%;
  position: relative;

  .navbar {
    height: $header-height;
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    line-height: 60px;
  }

  .main-container {
    height: calc(100% - #{$header-height});
    display: flex;

    .left-menu {
      height: 100%;
      user-select: none;
    }

    .right-container {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;

      .tabs-view {
        height: 40px;
        user-select: none;
        border-top: 4px solid #409eff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
        position: relative;
      }

      .app-main {
        flex: 1;
        overflow-x: hidden;
      }

      .footer-nav {
        height: 40px;
        background-color: #eeeeee;
        font-size: 14px;
      }
    }
  }
}
</style>
