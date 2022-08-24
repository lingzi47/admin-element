<template>
  <div class="tabs-view">
    <span class="bars" @click="handleLefeMenu">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </span>
    <el-tabs
      type="card"
      v-model="activeMenu"
      @tab-click="handleClick"
      @tab-remove="removeTab"
      @contextmenu.prevent.native="openContextMenu"
    >
      <el-tab-pane
        v-for="item in visitedRoutes"
        :key="item.name"
        :label="item.meta.title"
        :name="item.name"
        :closable="item.name == 'index' ? false : true"
      >
      </el-tab-pane>
    </el-tabs>
    <div v-show="contextMenuVisible">
      <ul :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
        <li>
          <el-button type="text" @click="closeThisTabs()">关闭当前</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeOtherTabs()">关闭其他</el-button>
        </li>
        <li>
          <el-button type="text" @click="closeAllTabs()">关闭所有</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TabsView",
  computed: {
    ...mapGetters(["isCollapse", "visitedRoutes", "tabActive"]),
    activeMenu: {
      get: function () {
        return this.$store.getters.tabActive;
      },
      set: function () {},
    },
  },
  data() {
    //用于定义属性
    return {
      rightTapMenu: {},
      contextMenuVisible: false,
      left: "",
      top: "",
    };
  },
  mounted: function () {
    window.addEventListener("click", this.closeContextMenu);
  },
  methods: {
    //用于定义的函数
    handleLefeMenu() {
      this.$store.dispatch("menu/setLeftCollapse", !this.isCollapse);
    },
    handleClick(tab) {
      this.goRouterPath(tab.name);
    },
    goRouterPath(routeName) {
      let route = this.visitedRoutes.filter(
        (item) => item.name == routeName
      )[0];
      if (this.$route.path != route.path) {
        this.$router.push({
          name: route.name,
        });
      }
    },
    removeTab(targetName) {
      let tabs = this.visitedRoutes;
      let activeName = this.tabActive;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }
      let delRoute = tabs.filter((tab) => tab.name == targetName)[0];
      this.$store.dispatch("menu/delView", delRoute).then(() => {
        this.goRouterPath(activeName);
      });
    },

    openContextMenu(e) {
      e.preventDefault(); //防止默认菜单弹出
      this.closeContextMenu();
      let obj = e.srcElement ? e.srcElement : e.target;
      if (obj.id) {
        let currentContextTabId = obj.id.split("-")[1];
        let curIndex = 0;
        for (; curIndex < this.visitedRoutes.length; ++curIndex) {
          if (this.visitedRoutes[curIndex].name == currentContextTabId) {
            this.rightTapMenu = this.visitedRoutes[curIndex];
            break;
          }
        }
        this.top = e.clientY;
        let documentWidth = document.body.clientWidth;
        if (documentWidth - e.pageX < 120) {
          this.left = e.clientX - 100;
        } else {
          this.left = e.clientX;
        }
        if (curIndex != 0) {
          this.contextMenuVisible = true;
        }
      }
    },
    //关闭当前
    closeThisTabs() {
      this.removeTab(this.rightTapMenu.name);
    },
    //关闭其它
    closeOtherTabs() {
      this.goRouterPath(this.rightTapMenu.name);
      this.$store.dispatch("menu/delOtherView", this.rightTapMenu);
    },
    //关闭所有
    closeAllTabs() {
      this.goRouterPath("index");
      this.$store.dispatch("menu/delAllView");
    },
    // 关闭右键菜单
    closeContextMenu() {
      this.rightTapMenu = {};
      this.contextMenuVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin border-type() {
  border: none;
  border-radius: 0;
}

.tabs-view {
  .bars {
    width: 40px;
    height: 40px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    box-shadow: 0 0px 6px rgba(0, 0, 0, 0.12);

    i {
      font-size: 26px;
      color: #606266;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .bars:hover i {
    color: #409eff;
  }

  /deep/ .el-tabs {
    width: calc(100% - 40px);
    display: inline-block;
    position: absolute;
    top: 0;
    left: 40px;

    .el-tabs__header {
      margin: 0;
      border-bottom: none;
    }

    .el-tabs__item:focus.is-active.is-focus:not(:active) {
      @include border-type();
    }
  }

  /deep/ .el-tabs__item .el-icon-close:hover {
    background-color: #f56c6c;
  }

  /deep/ .el-tabs--card > .el-tabs__header {
    @include border-type();

    .el-tabs__nav,
    .el-tabs__item {
      @include border-type();
    }

    .el-tabs__item.is-active {
      background-color: #409eff !important;
      color: #fff;
    }

    .el-tabs__item.is-closable:hover,
    .el-tabs__item:hover {
      background-color: #ecf5ff;
    }

    .el-tabs__item.is-active.is-closable .el-icon-close,
    .el-tabs__item.is-closable:hover .el-icon-close {
      width: 16px;
    }

    .el-tabs__item .el-icon-close {
      font-size: 14px;
      height: 16px;
      line-height: 16px;
    }
  }

  .contextmenu {
    width: 100px;
    margin: 0;
    border: 1px solid #ccc;
    background-color: #fff;
    z-index: 3000;
    position: fixed;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);

    li {
      margin: 0;
      padding: 0px 22px;

      button {
        color: #606266;
      }
    }

    li:hover {
      background-color: #ecf5ff;
      cursor: pointer;

      button {
        color: #66b1ff;
      }
    }
  }
}
</style>
