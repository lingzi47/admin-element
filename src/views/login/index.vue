<template>
  <div class="login-content">
    <div class="login-area">
      <div class="login-left flex-center">
        <el-image :src="require('../../assets/img/login-bg.png')"></el-image>
      </div>
      <div class="login-right">
        <h3 class="login-title">用户登录</h3>
        <el-tabs v-model="type" class="login-con">
          <el-tab-pane label="短信登录" name="2"></el-tab-pane>
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
          <el-form-item prop="username" v-show="type == '1'">
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
          <el-form-item prop="phone" v-show="type == '2'">
            <el-input
              v-model="form.phone"
              placeholder="请输入手机号"
              prefix-icon="el-icon-user"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="text" v-show="type == '2'">
            <el-input
              v-model="form.text"
              placeholder="请输入验证码"
              prefix-icon="el-icon-lock"
            ></el-input>
            <el-button
              style="margin-left: 180px"
              size="small"
              type="warning"
              @click="yan"
              :disabled="isSmsSend"
              >{{ sendBtnText }}</el-button
            >
          </el-form-item>
          <!-- <el-form-item class="save-pwd" v-show="type == '1'">
            <el-checkbox v-model="savePwd">记住密码</el-checkbox>
          </el-form-item> -->
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
import Fingerprint2 from "fingerprintjs2";
import { userLogin, sendsms, oksms } from "@/request/api";

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
      isSmsSend: false,
      sendBtnText: "点击发送验证码",
      role_name: "",
      dialogVisible: false,
      counter: "60",
      type: "2", //登录方式，1:密码登录，2:短信登录
      form: {
        username: "", //用户名
        password: "", //密码
        phone: "",
        text: "",
        smsCode: "", //短信验证码
        identifyCode: "", //图形验证码
      },
      form1: {
        username: "admin", //用户名
        password: "lct001025", //密码
        phone: "",
        text: "",
        smsCode: "", //短信验证码
        identifyCode: "", //图形验证码
      },
      web_code: "",
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
    // const os = require("os");
    // var ip = "";
    // var mac = "";
    // var networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces, "networkInterfaces");
    // for (var i in networkInterfaces) {
    //   for (var j in networkInterfaces[i]) {
    //     if (
    //       networkInterfaces[i][j]["family"] === "IPv4" &&
    //       networkInterfaces[i][j]["mac"] !== "00:00:00:00:00:00" &&
    //       networkInterfaces[i][j]["address"] !== "127.0.0.1"
    //     ) {
    //       mac = networkInterfaces[i][j]["mac"];
    //       ip = networkInterfaces[i][j]["address"];
    //     } else {
    //       ip == "127.0.0.1";
    //     }
    //   }
    // }
    // console.log(mac);
    // // 自定义环境变量全局使用
    // process.env.VUE_APP_MAC = mac;
    // process.env.VUE_APP_IP = ip;
  },
  mounted() {
    // this.getCookie();
  },
  watch: {
    idenCode() {
      this.form.identifyCode = this.idenCode;
    },
    type(value) {
      Fingerprint2.get((components) => {
        // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
        const values = components.map((component) => component.value); // 配置的值的数组
        const murmur = Fingerprint2.x64hash128(values.join(""), 31); // 生成浏览器指纹
        sessionStorage.setItem("web_code", murmur); // 存储浏览器指纹，在项目中用于校验用户身份和埋点
        console.log("浏览器指纹码：" + sessionStorage.getItem("web_code"));
      });
    },
  },
  methods: {
    countDown() {
      // 将setInterval()方法赋值给前面定义的timer计时器对象，等用clearInterval()方法时方便清空这个计时器对象
      this.timer = setInterval(() => {
        // 替换文本，用es6里面的``这个来创建字符串模板，让秒实时改变
        this.sendBtnText = `(${this.counter}秒)后重新发送`;
        this.counter--;
        if (this.counter < 0) {
          // 当计时小于零时，取消该计时器
          clearInterval(this.timer);
          this.reset();
        }
      }, 1000);
    },
    yan() {
      Fingerprint2.get((components) => {
        // 参数只有回调函数时，默认浏览器指纹依据所有配置信息进行生成
        const values = components.map((component) => component.value); // 配置的值的数组
        const murmur = Fingerprint2.x64hash128(values.join(""), 31); // 生成浏览器指纹

        sessionStorage.setItem("web_code", murmur); // 存储浏览器指纹，在项目中用于校验用户身份和埋点
        console.log("浏览器指纹码：" + sessionStorage.getItem("web_code"));
      });

      // Fingerprint2.get(function (components) {
      //   const values = components.map(function (component, index) {
      //     if (index === 0) {
      //       //把微信浏览器里UA的wifi或4G等网络替换成空,不然切换网络会ID不一样
      //       return component.value.replace(/\bNetType\/\w+\b/, "");
      //     }
      //     return component.value;
      //   });
      //   // 生成最终id murmur
      //   const murmur = Fingerprint2.x64hash128(values.join(""), 31);
      //   sessionStorage.setItem("web_code", murmur);
      //   console.log("浏览器指纹码：" + sessionStorage.getItem("web_code"));
      // });
      if (
        !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
          this.form.phone
        )
      ) {
        this.$message({
          message: "请输入正确手机号",
          type: "error",
        });
        return false;
      }
      // 判断手机号是否符合要求
      if (this.form.phone.length !== 11) {
        this.$message({
          message: "请输入11位手机号",
          type: "error",
        });
        return false;
      }
      let params = {
        phone: this.form.phone,
      };
      sendsms(params).then((res) => {
        if (res.data.code == 200) {
          this.isSmsSend = true;
          // 开始倒计时，60s之后才能再次点击
          this.countDown(); // 这里实现倒计时的功能，文章下面开始介绍
          this.$message.success(res.data.msg);
        } else {
          this.$message.error(res.data.msg);
        }
      });

      // 调用接口，发送短信验证码
      // 这部分放调用发送短信的接口，这里先不做任何功能，主要先把按钮倒计时的功能实现
      // 将按钮禁用，防止再次点击
    },
    reset() {
      // 重置按钮可用
      this.isSmsSend = false;
      // 重置文本内容
      this.sendBtnText = "点击发送验证码";
      if (this.timer) {
        // 存在计时器对象，则清除
        clearInterval(this.timer);
        // 重置秒数，防止下次混乱
        this.counter = 60;
        // 计时器对象重置为空
        this.timer = null;
      }
    },
    handleTry() {
      this.dialogVisible = true;
    },
    dialogConfirm() {
      this.dialogVisible = false;
    },

    onSubmit() {
      if (!sessionStorage.getItem("web_code")) {
        this.$message({
          message: "请重新获取验证码",
          type: "error",
        });
        return false;
      }
      if (this.type == 2) {
        let params = {
          phone: this.form.phone,
          code: this.form.text,
          web_code: sessionStorage.getItem("web_code"),
        };
        oksms(params).then((res) => {
          this.loading = true;
          if (res.data.code == 200) {
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
            this.$message.error(res.data.msg);
            setTimeout(() => {
              this.loading = false;
            }, 200);
          }
        });
      } else {
        let params = {
          uname: this.form.username,
          pwd: this.form.password,
          web_code: sessionStorage.getItem("web_code"),
        };
        userLogin(params).then((res) => {
          this.loading = true;
          if (res.data.code == 200) {
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
                  .dispatch("user/login", this.form1)
                  .then(() => {
                    //登录前判断是否保存密码
                    //传入账号名，密码，和保存天数,是否选中4个参数
                    if (this.savePwd)
                      this.setCookie(
                        this.form1.username,
                        this.form1.password,
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
            this.$message.error(res.data.msg);
            setTimeout(() => {
              this.loading = false;
            }, 200);
          }
        });
      }
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
