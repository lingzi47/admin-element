<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    let name = sessionStorage.getItem("name");

    if (this.name == "") {
    } else {
      setTimeout(() => {
        // window.location.reload();
      }, 2000);
    }
  },
  mounted() {},
};
</script>

<style>
@import "./assets/css/main.css";

#app {
  width: 100%;
  height: 100%;
}
</style>
