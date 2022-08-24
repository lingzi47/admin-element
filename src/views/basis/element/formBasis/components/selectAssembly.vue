<template>
  <!-- Select 选择器 -->
  <div class="selectAssembly">
    <div class="explain">
      <p>一、select 属性：1. multiple:启用多选；2. collapse-tags:选中的只展示部分；</p>
      <p>二、自定义模板：将自定义的 HTML 模板插入el-option的 slot 中即可；</p>
      <p>三、select 事件：change:选项改变时触发</p>
    </div>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-select v-model="form.value1" placeholder="基础下拉带默认值" @change="change">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.value2" filterable placeholder="带搜索下拉">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.value3" multiple collapse-tags placeholder="多选下拉列表">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.value4" placeholder="自定义模板">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <span style="float: left">{{ item.label }}</span>
            <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
          </el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "SelectAssembly",
  data() {
    return {
      form: {
        value1: 'Wuhan',
        value2: '',
        value3: '',
        value4: '',
      },
      options: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Wuhan',
        label: '武汉'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
    }
  },
  methods: {
    change(val) {
      let label = this.options.filter(item => item.value == val)[0].label;
      this.$message('选中的 label：' + label + '，value：' + val);
    }
  }
}
</script>

<style>
</style>
