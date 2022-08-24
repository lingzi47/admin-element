<template>
  <div class="login-content">
    <div class="login-area">
      <div class="login-left flex-center">
        <el-image :src="require('../../assets/img/login-bg.png')"></el-image>
      </div>
      <div class="login-right">
        <h3 class="login-title">用户登录</h3>
        <el-tabs v-model="type" class="login-con">
          <el-tab-pane label="密码登录" name="1"></el-tab-pane>
        </el-tabs>
        <el-alert
          style="padding: 2px"
          title="账号说明："
          type="warning"
          :closable="false"
        >
          <template slot="title"> </template>
        </el-alert>
        <el-form ref="loginForm" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password" v-show="type == '1'">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item class="save-pwd" v-show="type == '1'">
            <el-checkbox v-model="savePwd">记住密码</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 45%"
              type="primary"
              :loading="loading"
              @click="onSubmit()"
            >
              登录
            </el-button>
            <el-button
              style="width: 45%"
              type="primary"
              @click.native.prevent="handleTry"
            >
              联系开发人员
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <el-dialog
      title="公众号二维码"
      :visible.sync="dialogVisible"
      :show-close="false"
      :center="true"
      width="30%"
    >
      <div style="text-align: center">
        <span class="font-title-large"
          ><span class="color-main font-extra-large">扫描二维码</span
          ><span class="color-main font-extra-large"></span
          >添加技术人员微信</span
        >
        <br />
        <img
          src="http://y6.wjw.cool/lct.jpg"
          width="220"
          height="230"
          style="margin-top: 3px"
        />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogConfirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userLogin } from "@/request/api";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      token: "",
      uid: "",
      list: [],

      role_name: "",
      dialogVisible: false,
      type: "1", //登录方式，1:密码登录，2:短信登录
      form: {
        username: "", //用户名
        password: "", //密码
        smsCode: "", //短信验证码
        identifyCode: "", //图形验证码
      },
      loading: false, //登录加载中
      savePwd: false, //是否记住密码
      idenCode: "", //图形验证码
      countdown: "获取验证码",
      smsTimes: null,
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        password: [
          {
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},

  methods: {
    handleTry() {
      this.dialogVisible = true;
    },
    dialogConfirm() {
      this.dialogVisible = false;
    },

    onSubmit() {
      let params = {
        uname: this.form.username,
        pwd: this.form.password,
      };
      userLogin(params).then((res) => {
        this.loading = true;
        if (res.data.code == 200) {
          this.token = res.data.data.token;
          this.uid = res.data.data.uid;
          sessionStorage.setItem("token", this.token);
          sessionStorage.setItem("uid", this.uid);
          this.list = res.data.data.menu;
          localStorage.setItem("list", JSON.stringify(this.list));
          this.role_name = res.data.data.role_name;
          sessionStorage.setItem("role_name", this.role_name);
          this.$router.push({
            path: "/index",
          });

          this.loading = false;
          this.$message({
            message: "登录成功",
            type: "success",
          });
        } else {
          this.$message({
            message: "账号或密码不正确",
            type: "error",
          });

          this.loading = false;
        }
      });
    },
  },
};
</script>

<style>
.login-content {
  width: 100%;
  height: 100%;
  background-color: #f7fafc;
  position: relative;
}

.login-content .login-area {
  width: 1000px;
  height: 600px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
  display: flex;
}

.login-area .login-left {
  width: 400px;
  height: 400px;
  background-color: #ebf4ff;
  padding: 100px;
  border-radius: 10px 0 0 10px;
}

.login-area .login-right {
  position: relative;
  width: 300px;
  padding: 0 50px;
}

.login-area .login-right .login-title {
  text-align: center;
  font-size: 36px;
  margin-top: 80px;
}

.login-right .login-con {
  padding: 30px 0 0;
}

.login-right .el-tabs__item {
  font-size: 16px;
}

.login-right .el-form {
  margin-top: 10px;
}

.login-right .el-input__inner {
  height: 45px;
  line-height: 45px;
  font-size: 16px;
}

.login-right .el-input--prefix .el-input__inner {
  padding-left: 32px;
}

.login-right .el-input__icon {
  line-height: 45px;
  font-size: 18px;
}

.login-right .code-btn {
  width: 115px;
  text-align: center;
}

.login-right .code-btn:hover {
  color: #409eff;
}

.login-right .code-btn.countdowning {
  color: initial;
  cursor: no-drop;
}

.login-right .submit-btn {
  width: 100%;
  font-size: 18px;
  padding: 0;
  height: 45px;
  line-height: 45px;
}

.login-right .el-input-group__append {
  padding: 0;
  width: 115px;
  text-align: center;
}

.login-right .save-pwd {
  text-align: right;
}

.login-right .save-pwd .el-form-item__content {
  line-height: initial;
}
</style>
