<template>
  <div class="icon-page">
    <basis-layout title="使用方法" style="margin-top: 10px">
      <div class="explain">
        使用阿里巴巴矢量图标库：<a
          href="https://www.iconfont.cn/"
          target="_blank"
          >https://www.iconfont.cn/</a
        >
      </div>
      <div class="example-result">
        <i class="icon icon-delete"></i>
        <i class="icon icon-setup" style="font-size: 30px"></i>
        <i class="icon icon-zfb" style="color: #409eff"></i>
        <i class="icon">&#xe6a8;</i>
        <i class="icon" style="font-size: 20px; color: #1ed76d">&#xe685;</i>
      </div>
      <div class="example-con">
        <pre>{{ example1 }}</pre>
        <pre>{{ example2 }}</pre>
        <pre>{{ example3 }}</pre>
        <pre>{{ example4 }}</pre>
        <pre>{{ example5 }}</pre>
      </div>
    </basis-layout>

    <basis-layout title="图标集合">
      <div class="iconList" style="margin-top: 10px">
        <div v-for="(item, index) in iconList" :key="index">
          <i class="icon" :class="item.class"></i>
          <p class="icon-code">{{ item.code }}</p>
          <p class="icon-class">{{ item.class }}</p>
        </div>
      </div>
    </basis-layout>
  </div>
</template>

<script>
import basisLayout from "@/components/basisLayout.vue";
export default {
  name: "icon",
  components: {
    basisLayout,
  },
  data() {
    return {
      example1: '<i class="icon icon-delete"></i>',
      example2: '<i class="icon icon-setup" style="font-size: 30px;"></i>',
      example3: '<i class="icon icon-zfb" style="color: #409EFF;"></i>',
      example4: '<i class="icon">&#xe6a8;</i>',
      example5:
        '<i class="icon" style="font-size: 20px; color: #1ED76D;">&#xe685;</i>',

      iconList: [
        { class: "icon-loading", code: "&#xe7ba;" },
        { class: "icon-loading2", code: "&#xe6a2;" },
        { class: "icon-loading3", code: "&#xe8fd;" },
        { class: "icon-before", code: "&#xe683;" },
        { class: "icon-after", code: "&#xe685;" },
        { class: "icon-left", code: "&#xe682;" },
        { class: "icon-right", code: "&#xe687;" },
        { class: "icon-upper", code: "&#xe684;" },
        { class: "icon-lower", code: "&#xe688;" },
        { class: "icon-packup", code: "&#xe68c;" },
        { class: "icon-open", code: "&#xe68a;" },
        { class: "icon-arrow-upper", code: "&#xe68e;" },
        { class: "icon-arrow-lower", code: "&#xe68d;" },
        { class: "icon-left-line", code: "&#xe69e;" },
        { class: "icon-right-line", code: "&#xe6a0;" },
        { class: "icon-upper-line", code: "&#xe69d;" },
        { class: "icon-lower-line", code: "&#xe69b;" },
        { class: "icon-correct", code: "&#xe68f;" },
        { class: "icon-error", code: "&#xe686;" },
        { class: "icon-correct-line", code: "&#xe695;" },
        { class: "icon-error-line", code: "&#xe696;" },
        { class: "icon-correct-solid", code: "&#xe698;" },
        { class: "icon-error-solid", code: "&#xe69a;" },
        { class: "icon-increase", code: "&#xe689;" },
        { class: "icon-reduce", code: "&#xe68b;" },
        { class: "icon-increase-line", code: "&#xe6a1;" },
        { class: "icon-reduce-line", code: "&#xe69c;" },
        { class: "icon-enlarge", code: "&#xe6b0;" },
        { class: "icon-narrow", code: "&#xe6b1;" },
        { class: "icon-help", code: "&#xe692;" },
        { class: "icon-tips", code: "&#xe694;" },
        { class: "icon-info", code: "&#xe697;" },
        { class: "icon-info-solid", code: "&#xe699;" },
        { class: "icon-about", code: "&#xe62c;" },
        { class: "icon-warning", code: "&#xe617;" },
        { class: "icon-upload1", code: "&#xe691;" },
        { class: "icon-download1", code: "&#xe693;" },
        { class: "icon-upload2", code: "&#xe6a4;" },
        { class: "icon-download2", code: "&#xe6a6;" },
        { class: "icon-setup", code: "&#xe6a3;" },
        { class: "icon-refresh", code: "&#xe6a9;" },
        { class: "icon-female", code: "&#xe6ab;" },
        { class: "icon-male", code: "&#xe6ac;" },
        { class: "icon-edit", code: "&#xe6ad;" },
        { class: "icon-sort", code: "&#xe6ae;" },
        { class: "icon-more", code: "&#xe6af;" },
        { class: "icon-exit", code: "&#xe6b4;" },
        { class: "icon-close", code: "&#xe663;" },
        { class: "icon-eye-show", code: "&#xe6b5;" },
        { class: "icon-eye-hide", code: "&#xe6b6;" },
        { class: "icon-share", code: "&#xe6b7;" },
        { class: "icon-list", code: "&#xe6b8;" },
        { class: "icon-block-list", code: "&#xe6b9;" },
        { class: "icon-mail", code: "&#xe6bb;" },
        { class: "icon-screening", code: "&#xe6b2;" },
        { class: "icon-password", code: "&#xe690;" },
        { class: "icon-mobile-phone", code: "&#xe6a7;" },
        { class: "icon-account", code: "&#xe69f;" },
        { class: "icon-phone", code: "&#xe6ba;" },
        { class: "icon-address", code: "&#xe6a8;" },
        { class: "icon-scan-code", code: "&#xe6aa;" },
        { class: "icon-goods", code: "&#xe6bc;" },
        { class: "icon-shop", code: "&#xe6bd;" },
        { class: "icon-calendar", code: "&#xe6f5;" },
        { class: "icon-news", code: "&#xe62f;" },
        { class: "icon-pyq", code: "&#xe7be;" },
        { class: "icon-qq-solid", code: "&#xe80e;" },
        { class: "icon-wx-solid", code: "&#xe7e5;" },
        { class: "icon-qqkj", code: "&#xe80f;" },
        { class: "icon-video-play", code: "&#xe610;" },
        { class: "icon-video-stop", code: "&#xe611;" },
        { class: "icon-user", code: "&#xe606;" },
        { class: "icon-user-solid", code: "&#xe60e;" },
        { class: "icon-home", code: "&#xeb32;" },
        { class: "icon-home-solid", code: "&#xeb94;" },
        { class: "icon-wb", code: "&#xe7e4;" },
        { class: "icon-wx", code: "&#xe62a;" },
        { class: "icon-qq", code: "&#xe65b;" },
        { class: "icon-zfb", code: "&#xe64b;" },
        { class: "icon-zfb-solid", code: "&#xe647;" },
        { class: "icon-picture", code: "&#xe6e9;" },
        { class: "icon-search", code: "&#xe62e;" },
        { class: "icon-delete", code: "&#xe614;" },
        { class: "icon-star-solid", code: "&#xe62b;" },
        { class: "icon-star", code: "&#xe629;" },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.icon-page {
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

  .example-result i {
    margin: 0 10px;
  }

  .example-con {
    margin-top: 10px;
    display: block;
    padding: 16px;
    overflow-x: auto;
    color: #58727e;
    font-weight: 400;
    font-size: 14px;
    font-family: "Source Code Pro", "Monaco", "Inconsolata", monospace;
    line-height: 26px;
    white-space: pre-wrap;
    word-wrap: break-word;
    -webkit-font-smoothing: auto;
    background-color: #fafafa;
    border-radius: 16px;
  }

  .iconList {
    // max-width: 1200px;
    display: flex;
    flex-wrap: wrap;

    div {
      text-align: center;
      width: 140px;
      padding: 15px 0;
      border: 1px solid #eee;
      margin-left: -1px;
      margin-top: -1px;

      i {
        font-size: 32px;
        color: #606266;
      }

      p {
        margin-top: 20px;
        color: #99a9bf;
        font-size: 14px;
        font-family: icomoon;
      }

      .icon-code {
        margin-top: 10px;
        color: #99a9bf;
      }

      .icon-class {
        margin-top: 2px;
      }
    }

    div:hover {
      cursor: pointer;

      i,
      p {
        color: #5cb6ff;
        cursor: initial;
      }

      .icon-name,
      .icon-code {
        color: #79bbff;
      }
    }
  }
}
</style>
