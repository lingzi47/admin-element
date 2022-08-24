<template>
  <!-- input 输入框 -->
  <div class="inputAssembly">
    <div class="explain">
      <p>一、input 属性：1. placeholder:预期值描述；2. autocomplete:是否自动完成(off禁止，on自动完成)；3. disabled:禁用状态；4. clearable:可清空；5. 密码框:密码框；6. prefix-icon:带图标；7. maxlength:限制长度；8. show-word-limit:显示最长长度；9. size:尺寸(大到小：默认，medium，small，mini)；</p>
      <p>二、文本域：1. 设置 type="textarea"；2. autosize:自适应高度(默认2行)，也可传入对象如{ minRows: 2, maxRows: 4 }</p>
      <p>三、复合型输入框：在 el-input 标签内添加需要组合的内容，可通过 slot(prepend前面，append后面) 来指定在 input 中的位置；</p>
    </div>
    <el-form :inline="true" :model="form1">
      <el-form-item>
        <el-input v-model="form1.input1" placeholder="基础用法(可清空,带图标)" autocomplete="off" clearable prefix-icon="el-icon-search"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input1" placeholder="禁用状态,尺寸(medium)" disabled autocomplete="off" size="medium"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input3" placeholder="密码框,尺寸(small)" show-password size="small"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input6" maxlength="10" show-word-limit placeholder="限制长度,尺寸(mini)" size="mini"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input14" type="textarea" autosize placeholder="文本域(高度自适应,默认2行)"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input15" type="textarea" placeholder="自定义高度(最小2行最多4行)" :autosize="{ minRows: 2, maxRows: 4}"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input7" placeholder="复合型输入框1"><template slot="prepend">Http://</template></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="form1.input8" placeholder="复合型输入框2"><template slot="append">.com</template></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "InputAssembly",
  data() {
    return {
      form1: {
        input1: '',
        input2: '可清空(clearable)',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        input10: '',
        input11: '',
        input12: '',
        input13: '',
        input14: '',
        input15: ''
      },
    }
  },
  methods: {

  }
}
</script>

<style>
</style>
