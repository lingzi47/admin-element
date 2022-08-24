<template>
  <div class="basis-layout">
    <h4 class="title">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BasisLayout",
  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.basis-layout {
  margin-top: 50px;

  .title {
    font-size: 22px;
    color: #1f2f3d;
    font-weight: 400;
    margin: 0 0 20px;
  }
}
</style>
