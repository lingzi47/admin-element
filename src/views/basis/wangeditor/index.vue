<template>
  <div class="wangeditor">
    <basis-layout title="富文本编辑器" style="margin-top: 10px;">
      <div class="explain">详细配置见官网：<a href="https://www.wangeditor.com/" target="_blank">https://www.wangeditor.com/</a></div>
      <div id="websiteEditorElem" style="height:300px;background: #ffffff;"></div>
    </basis-layout>
  </div>
</template>

<script>
import basisLayout from "@/components/basisLayout.vue"
import E from 'wangeditor'
export default {
  name: "wangeditor",
  components: {
    basisLayout
  },
  data() {
    return {}
  },
  created() { },
  mounted() {
    this.phoneEditor = new E('#websiteEditorElem');
    this.phoneEditor.config.height = 500
    this.phoneEditor.config.menuTooltipPosition = 'down'
    this.phoneEditor.create();
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.wangeditor {
  .explain {
    margin-bottom: 10px;

    a {
      color: #409eff;
    }

    a:hover {
      color: #66b1ff;
      text-decoration: underline;
    }
  }

  /deep/ #websiteEditorElem {
    .w-e-toolbar {
      z-index: 11 !important;
    }
    .w-e-text-container {
      z-index: 10 !important;
    }
  }
}
</style>
