<template>
  <!-- Switch 开关 -->
  <div class="switchAssembly">
    <div class="explain">
      <p>一、el-switch属性：1. active-text:打开时文字描述；2. inactive-text:关闭时文字描述；3. active-color:打开时颜色；4. inactive-color:关闭时颜色；</p>
      <p>二、el-switch事件：change:选项改变时触发</p>
    </div>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-switch v-model="form.value1" @change="change"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-switch v-model="form.value2" active-text="开" inactive-text="关" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SwitchAssembly",
  data() {
    return {
      form: {
        value1: true,
        value2: false,
      }
    }
  },
  methods: {
    change(val) {
      this.$message('value值：' + val);
    }
  }
}
</script>

<style>
</style>
