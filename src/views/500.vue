<template>
  <div class="error-content">
    <div class="pic-error">
      <img class="pic-error-child" src="../assets/img/500.png">
    </div>
    <div class="bullshit">
      <div class="bullshit-oops">抱歉！</div>
      <div class="bullshit-headline">内部服务器错误...</div>
      <div class="bullshit-info">请稍后再试，或联系客服人工处理问题，或点击下面的按钮返回首页。</div>
      <el-button class="bullshit-return-home" type="primary" size="medium" round @click="goMainPage">返回首页</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  methods: {
    goMainPage() {
      this.$router.push({
        path: "/index"
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.error-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 100px);

  .pic-error .pic-error-child {
    opacity: 0;
    animation: imgShow 1.5s ease-out forwards;
  }

  .bullshit {
    margin-left: 100px;
    width: 380px;

    .bullshit-oops {
      margin-bottom: 20px;
      font-size: 32px;
      font-weight: bold;
      line-height: 40px;
      color: #1890ff;
      opacity: 0;
      animation: slideUp 1s ease-out 0s forwards;
    }

    .bullshit-headline {
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      line-height: 24px;
      color: #222;
      opacity: 0;
      animation: slideUp 1s ease-out 0.15s forwards;
    }

    .bullshit-info {
      margin-bottom: 30px;
      font-size: 13px;
      line-height: 21px;
      color: rgba(0, 0, 0, 0.65);
      opacity: 0;
      animation: slideUp 1s ease-out 0.3s forwards;
    }

    .bullshit-return-home {
      opacity: 0;
      animation: slideUp 1s ease-out 0.45s forwards;
    }
  }
}

@keyframes imgShow {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
