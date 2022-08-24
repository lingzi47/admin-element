<template>
  <div class="app-main">
    <transition :name="transitionName">
      <keep-alive :include="cachedViews">
        <router-view class="content" :key="key"></router-view>
        <!-- <router-view class="content"></router-view> -->
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    cachedViews() {
      return this.$store.getters.cachedViews
    },
    key() {
      return this.$route.path
    }
  },
  data() {
    return {
      transitionName: "fade-transform"
    }
  },
}
</script>

<style lang="scss" scoped>
.app-main {
  position: relative;

  .content {
    padding: 10px;
    width: calc(100% - 20px);
    position: absolute;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  will-change: transform;
  transition: all 0.3s linear;
}

.fade-transform-enter {
  opacity: 0;
  transform: translate(5px, 15px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translate(0, 0);
  display: none;
}
</style>
