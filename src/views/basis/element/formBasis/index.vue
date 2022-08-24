<template>
  <div class="simpleForm">
    <!-- 输入框 -->
    <basis-layout title="Input 输入框" style="margin-top: 0;">
      <input-assembly />
    </basis-layout>
    <!-- 多选框 -->
    <basis-layout title="Checkbox 多选框" style="margin-top: 20px;">
      <checkbox-assembly />
    </basis-layout>
    <!-- 单选框 -->
    <basis-layout title="Radio 单选框" style="margin-top: 20px;">
      <radio-assembly />
    </basis-layout>
    <!-- 选择器 -->
    <basis-layout title="Select 选择器" style="margin-top: 20px;">
      <select-assembly />
    </basis-layout>
    <!-- 日期时间选择器 -->
    <basis-layout title="DateTimePicker 日期时间选择器" style="margin-top: 20px;">
      <dateTimePicker-assembly />
    </basis-layout>
    <!-- 级联选择器 -->
    <basis-layout title="Cascader 级联选择器" style="margin-top: 20px;">
      <cascader-assembly />
    </basis-layout>
    <!-- 计数器 -->
    <basis-layout title="InputNumber 计数器" style="margin-top: 20px;">
      <inputNumber-assembly />
    </basis-layout>
    <!-- 开关 -->
    <basis-layout title="Switch 开关" style="margin-top: 20px;">
      <switch-assembly />
    </basis-layout>
  </div>
</template>

<script>
import basisLayout from "@/components/basisLayout.vue"
import inputAssembly from "./components/inputAssembly.vue"
import checkboxAssembly from "./components/checkboxAssembly.vue"
import radioAssembly from "./components/radioAssembly.vue"
import selectAssembly from "./components/selectAssembly.vue"
import dateTimePickerAssembly from "./components/dateTimePickerAssembly.vue"
import cascaderAssembly from "./components/cascaderAssembly.vue"
import inputNumberAssembly from "./components/inputNumberAssembly.vue"
import switchAssembly from "./components/switchAssembly.vue"
export default {
  name: "simpleForm",
  components: {
    basisLayout,
    inputAssembly,
    checkboxAssembly,
    radioAssembly,
    selectAssembly,
    dateTimePickerAssembly,
    cascaderAssembly,
    inputNumberAssembly,
    switchAssembly,
  },
  data() {
    return {}
  },
  created() { },
  mounted() { },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.simpleForm {
  /deep/ .el-form .el-form-item {
    padding: 0 10px;
    margin-bottom: 10px;

    .el-divider--horizontal {
      margin: 10px 0;
    }
  }

  /deep/ .explain {
    margin: 0 0 10px 0;

    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 20px;
    }
  }
}
</style>
