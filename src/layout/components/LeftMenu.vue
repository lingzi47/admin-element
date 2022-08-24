<template>
  <div class="left-menu">
    <!-- 左侧菜单，最多三级菜单 -->
    <el-menu
      :default-active="getActiveMenu"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#409EFF"
      :unique-opened="true"
      :collapse="isCollapse"
      router
      class="el-menu-vertical-demo"
    >
      <template v-for="m in routersList">
        <template v-if="!m.hidden && m.noDropdown">
          <template v-for="mf in m.child_menu">
            <!-- 一般为控制台 -->
            <el-menu-item :index="mf.route" :key="mf.route">
              <i :class="mf.meta.icon"></i
              ><span slot="title">{{ mf.meta.title }}</span>
            </el-menu-item>
          </template>
        </template>
        <template
          v-if="
            !m.hidden &&
            !m.noDropdown &&
            m.child_menu &&
            m.child_menu.length > 0
          "
        >
          <!-- 一级菜单 -->
          <el-submenu :index="m.route" :key="m.name">
            <template slot="title">
              <i :class="m.meta.icon"></i><span>{{ m.meta.title }}</span>
            </template>
            <template v-for="cm1 in m.child_menu">
              <template
                v-if="!cm1.hidden && cm1.children && cm1.children.length > 0"
              >
                <!-- 三级菜单 -->
                <el-submenu :index="m.route + '/' + cm1.route" :key="cm1.name">
                  <template slot="title">{{ cm1.meta.title }}</template>
                  <template v-for="cm2 in cm1.children">
                    <el-menu-item
                      :index="m.route + '/' + cm1.route + '/' + cm2.route"
                      :key="cm2.name"
                      >{{ cm2.meta.title }}</el-menu-item
                    >
                  </template>
                </el-submenu>
              </template>
              <template v-else>
                <!-- 二级菜单 -->
                <el-menu-item
                  :index="m.route + '/' + cm1.route"
                  :key="cm1.name"
                  >{{ cm1.meta.title }}</el-menu-item
                >
              </template>
            </template>
          </el-submenu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "LeftMenu",
  created() {
    this.routersList = JSON.parse(localStorage.getItem("list"));
  },
  computed: {
    //...mapGetters(["routersList", "isCollapse"]),
    ...mapGetters(["isCollapse"]),

    activeMenu() {
      return this.$store.getters.tabActive;
    },

    getActiveMenu() {
      this.activePathArr = [];
      let tabActive = this.$store.getters.tabActive;
      //console.log("tabActive", tabActive);
      let activeUrl = this.getActiveArr(this.routersList, tabActive);
      //console.log(this.routersList);
      let activePath = "";
      if (activeUrl && activeUrl.length) {
        for (let i = 0; i < activeUrl.length; i++) {
          if (activeUrl[i] != "/") activePath += "/" + activeUrl[i];
        }
      }
      return activePath.substring(1);
    },
  },
  data() {
    return {
      activePathArr: [],
      routersList: [],
      list: [],
    };
  },

  methods: {
    getActiveArr(menuList, activeTab) {
      for (const menu of menuList) {
        this.activePathArr.push(menu.path);
        if (menu.name == activeTab) return this.activePathArr;
        if (menu.children && menu.children.length) {
          const findChildren = this.getActiveArr(menu.children, activeTab);
          if (findChildren.length) return findChildren;
        }
        this.activePathArr.pop();
      }

      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.left-menu {
  background-color: #304156;

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #409eff !important;
  }

  .el-submenu .el-menu-item {
    height: 42px;
    line-height: 42px;
  }

  .el-menu {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    border-right: solid 2px #409eff;
  }

  .el-menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-menu::-webkit-scrollbar {
    width: 6px;
    height: 1px;
  }

  .el-menu::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background: rgba(144, 147, 153, 0.3);
  }

  .el-menu::-webkit-scrollbar-track {
    border-radius: 0px;
    background: #304156;
  }
}
</style>
