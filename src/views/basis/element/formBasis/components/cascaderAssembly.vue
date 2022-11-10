<!--
 * @Author: your name
 * @Date: 2022-01-07 15:51:29
 * @LastEditTime: 2022-01-14 08:47:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \新版ERMe:\1-HBuilderProjects\lun-vue-admin\src\views\basis\element\formBasis\components\cascaderAssembly.vue
-->
<template>
  <!-- Cascader 级联选择器 -->
  <div class="cascaderAssembly">
    <div class="explain">
      <p>一、el-cascader属性：1. filterable:可搜索；</p>
      <p>
        二、自定义模板：可以通过scoped
        slot对级联选择器的备选项的节点内容进行自定义；
      </p>
      <p>三、el-cascader事件：change:选项改变时触发</p>
    </div>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-cascader
          v-model="form.value1"
          :options="areaArr"
          :props="{ value: 'code', label: 'name' }"
          placeholder="带搜索的级联"
          filterable
          @change="change"
        ></el-cascader>
      </el-form-item>
      <el-form-item>
        <el-cascader
          v-model="form.value2"
          :options="areaArr"
          :props="{ value: 'code', label: 'name' }"
          placeholder="自定义节点"
        >
          <template slot-scope="{ node, data }">
            <span>{{ data.name }}</span>
            <span> ({{ data.code }}) </span>
          </template>
        </el-cascader>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { areaListData } from "@/utils/area";
export default {
  name: "CascaderAssembly",
  data() {
    return {
      areaArr: [],
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
    };
  },
  created() {
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  methods: {
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },
    change(data) {
      this.$message("选中：" + JSON.stringify(data));
    },
  },
};
</script>

<style>
</style>
