<template>
  <!-- InputNumber 计数器 -->
  <div class="inputNumberAssembly">
    <div class="explain">
      <p>一、el-input-number属性：1. min:最小值；2. max:最大值；3. size:尺寸(从大到小：默认、medium、small、mini)；4. controls-position:按钮位置；</p>
      <p>二、el-input-number事件：change:选项改变时触发</p>
    </div>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-input-number v-model="form.num1" :min="0" :max="10" label="最小0,最大10" @change="change"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="form.num2" :min="0" :max="10" label="尺寸(medium)" size="medium"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="form.num3" :min="0" :max="10" label="尺寸(small)" size="small"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="form.num4" :min="0" :max="10" label="尺寸(mini)" size="mini"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-input-number v-model="form.num5" :min="0" :max="10" label="按钮位置" controls-position="right"></el-input-number>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "InputNumberAssembly",
  data() {
    return {
      form: {
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
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
