<template>
  <!-- checkbox 多选框 -->
  <div class="checkboxAssembly">
    <el-form :inline="true" :model="form2">
      <el-form-item>
        <el-divider content-position="left">基础多选框</el-divider>
        <el-checkbox v-model="form2.checked1">多选框</el-checkbox>
        <el-checkbox v-model="form2.checked2" disabled>禁用状态</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">多选框组(在组中绑定数组)</el-divider>
        <el-checkbox-group v-model="form2.checkList1">
          <el-checkbox label="西瓜"></el-checkbox>
          <el-checkbox label="香蕉"></el-checkbox>
          <el-checkbox label="冬瓜"></el-checkbox>
          <el-checkbox label="黄瓜"></el-checkbox>
          <el-checkbox label="茄子" disabled></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">带边框(可设置4种大小)</el-divider>
        <el-checkbox v-model="form2.checked3" label="羽毛球" border></el-checkbox>
        <el-checkbox v-model="form2.checked4" label="足球" border></el-checkbox>
        <el-checkbox-group v-model="form2.checkList4" size="mini">
          <el-checkbox label="乒乓球" border></el-checkbox>
          <el-checkbox label="跳远" border disabled></el-checkbox>
          <el-checkbox label="铅球" border></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-divider content-position="left">按钮样式(可设置4种大小)</el-divider>
        <el-checkbox-group v-model="form2.checkList2">
          <el-checkbox-button label="上海"></el-checkbox-button>
          <el-checkbox-button label="武汉"></el-checkbox-button>
          <el-checkbox-button label="深圳"></el-checkbox-button>
          <el-checkbox-button label="长沙" disabled></el-checkbox-button>
        </el-checkbox-group>
        <el-checkbox-group v-model="form2.checkList3" size="mini">
          <el-checkbox-button label="上海"></el-checkbox-button>
          <el-checkbox-button label="武汉"></el-checkbox-button>
          <el-checkbox-button label="深圳"></el-checkbox-button>
          <el-checkbox-button label="西安"></el-checkbox-button>
          <el-checkbox-button label="长沙" disabled></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "CheckboxAssembly",
  data() {
    return {
      form2: {
        checked1: false,
        checked2: false,
        checkList1: ["香蕉", "茄子"],
        checkList2: ["武汉", "长沙"],
        checkList3: ["上海"],
        checked3: false,
        checked4: true,
        checkList4: ["乒乓球"],
      },
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
