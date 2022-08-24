<template>
  <!-- Radio 单选框 -->
  <div class="radioAssembly">
    <el-form :inline="true" :model="form3">
      <el-form-item>
        <el-divider content-position="left">单选</el-divider>
        <el-radio v-model="form3.radio1" label="1">男</el-radio>
        <el-radio v-model="form3.radio1" label="2" style="margin-left: 20px;">女</el-radio>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">单选组</el-divider>
        <el-radio-group v-model="form3.radio2">
          <el-radio label="1">芹菜</el-radio>
          <el-radio label="2">西红柿</el-radio>
          <el-radio label="3">韭菜</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">带边框</el-divider>
        <el-radio v-model="form3.radio3" label="1" border>北京</el-radio>
        <el-radio v-model="form3.radio3" label="2" border>上海</el-radio><br>
        <el-radio-group v-model="form3.radio4" size="mini">
          <el-radio label="1" border>足球</el-radio>
          <el-radio label="2" border>篮球</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">按钮样式</el-divider>
        <el-radio-group v-model="form3.radio5">
          <el-radio-button label="1" border>JavaScript</el-radio-button>
          <el-radio-button label="2" border>HTML</el-radio-button>
        </el-radio-group><br>
        <el-radio-group v-model="form3.radio6" size="mini">
          <el-radio-button label="1" border>包子</el-radio-button>
          <el-radio-button label="2" border>油条</el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "RadioAssembly",
  data() {
    return {
      form3: {
        radio1: "1",
        radio2: "2",
        radio3: "1",
        radio4: "1",
        radio5: "1",
        radio6: "1",
      }
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
