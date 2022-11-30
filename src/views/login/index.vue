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
          <!-- <el-tab-pane label="短信登录" name="2"></el-tab-pane> -->
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
            <!-- <el-button
              style="width: 45%"
              type="primary"
              @click.native.prevent="handleTry"
            >
              联系开发人员
            </el-button> -->
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
// import IdentifyCode from "./components/identify.vue";
import { userLogin } from "@/request/api";
export default {
  name: "Login",
  components: {
    // IdentifyCode,
  },
  data() {
    // var validatePassword = (rule, value, callback) => {
    //   if (value == "" && this.type == "1") callback(new Error("请输入密码"));
    //   else callback();
    // };
    // var validateIdentifyCode = (rule, value, callback) => {
    //   if (value == "") callback(new Error("请输入验证码"));
    //   else if (value.length != 4) callback(new Error("请输入4位有效的验证码"));
    //   else if (value.toUpperCase() != this.idenCode.toUpperCase())
    //     callback(new Error("验证码不正确"));
    //   else callback();
    // };
    // var validateSmsCode = (rule, value, callback) => {
    //   if (this.type == "2") {
    //     if (value == "") callback(new Error("请输入短信验证码"));
    //     else if (!/^\d{4}$/.test(value))
    //       callback(new Error("请输入4位有效的短信验证码"));
    //     else callback();
    //   } else callback();
    // };
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
        // identifyCode: [
        //   {
        //     validator: validateIdentifyCode,
        //     trigger: "blur",
        //   },
        // ],
        // smsCode: [
        //   {
        //     validator: validateSmsCode,
        //     trigger: "blur",
        //   },
        // ],
      },
    };
  },
  created() {
    //console.log(sessionStorage.getItem("token"));
  },
  mounted() {
    // this.getCookie();
  },
  watch: {
    idenCode() {
      this.form.identifyCode = this.idenCode;
    },
  },
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
          console.log(res.data.data.uid);
          console.log(res.data.data.token);
          this.token = res.data.data.token;
          this.uid = res.data.data.uid;
          sessionStorage.setItem("token", this.token);
          sessionStorage.setItem("username", this.username);
          sessionStorage.setItem("pwd", this.pwd);
          sessionStorage.setItem("uid", this.uid);
          this.list = res.data.data.menu;
          localStorage.setItem("list", JSON.stringify(this.list));
          this.role_name = res.data.data.user_name;
          sessionStorage.setItem("role_name", this.role_name);

          setTimeout(() => {
            this.loading = false;
            this.$message({
              message: "登录成功",
              type: "success",
            });
            this.$router.push({
              path: "/",
            });
          }, 200);
          this.$refs["loginForm"].validate((valid) => {
            if (valid) {
              this.$store
                .dispatch("user/login", this.form)
                .then(() => {
                  //登录前判断是否保存密码
                  //传入账号名，密码，和保存天数,是否选中4个参数
                  if (this.savePwd)
                    this.setCookie(
                      this.form.username,
                      this.form.password,
                      7,
                      1
                    );
                  this.$router.push({
                    path: "/index",
                  });
                  //保存密码7天
                  // else this.clearCookie();
                })
                .catch(() => {
                  // this.clearCookie();
                  this.loading = false;
                });
            } else {
              return false;
            }
          });
        } else {
          this.$message({
            message: "账号或密码不正确",
            type: "error",
          });
          setTimeout(() => {
            this.loading = false;
          }, 200);
        }
      });
    },

    // //记住密码，保存cookie
    // setCookie(c_name, c_pwd, exdays, checked) {
    //   let exdate = new Date(); //获取时间
    //   exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
    //   //字符串拼接cookie
    //   window.document.cookie =
    //     "checked" + "=" + checked + ";path=/;expires=" + exdate.toGMTString();
    //   window.document.cookie =
    //     "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
    //   window.document.cookie =
    //     "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
    // },
    // //获取cookie
    // getCookie: function () {
    //   if (document.cookie.length > 0) {
    //     var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
    //     for (var i = 0; i < arr.length; i++) {
    //       var arr2 = arr[i].split("="); //再次切割
    //       //判断查找相对应的值
    //       if (arr2[0] == "userName") {
    //         this.form.username = arr2[1];
    //       } else if (arr2[0] == "userPwd") {
    //         this.form.password = arr2[1];
    //       } else if (arr2[0] == "checked") {
    //         this.savePwd = true;
    //       }
    //     }
    //   }
    // },
    // //清除cookie
    // clearCookie: function () {
    //   this.setCookie("", "", -1, 0); //修改2值都为空，天数为负1天就好了
    // },
  },
};
</script>


<style lang="scss" scoped>
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
