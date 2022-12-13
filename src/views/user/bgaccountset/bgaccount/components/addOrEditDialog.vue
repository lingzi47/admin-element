<template>
  <div class="AddDialog">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-input type="hidden" v-model="ruleForm.id"></el-input>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="账号" prop="uname">
              <el-input
                v-model="ruleForm.uname"
                placeholder="请输入账号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码" prop="pwd">
              <el-input
                v-model="ruleForm.pwd"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="nickname">
              <el-input
                v-model="ruleForm.nickname"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
          </el-col>

          <!-- <el-col :span="12">
            <el-form-item label="账号状态" prop="state">
              <el-switch
                v-model="ruleForm.state"
                active-text="启用"
                inactive-text="禁用"
              ></el-switch>
            </el-form-item>
          </el-col> -->

          <el-col :span="12">
            <el-form-item
              label="角色"
              prop="role_name"
              :rules="[
                { required: true, message: '角色不能为空', trigger: 'blur' },
              ]"
            >
              <el-select
                v-model="ruleForm.role_name"
                clearable
                placeholder="请选择角色"
              >
                <el-option
                  v-for="item in rolesList"
                  :value="item.id"
                  :label="item.role_name"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="tel">
              <el-input
                v-model="ruleForm.tel"
                placeholder="请输入手机号"
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
          </el-col>
          <el-col :span="12">
            <el-form-item label="验证码" prop="code">
              <el-input
                v-model="ruleForm.code"
                placeholder="请输入验证码"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  userRoles,
  addUser,
  editShow,
  editUser,
  phoneCode,
} from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      isSmsSend: false,
      sendBtnText: "点击发送验证码",
      counter: "60",
      token: "",
      rolesList: [], //角色列表
      type: 1, //1新增，2编辑
      dialogVisible: false,
      code: "",
      ruleForm: {
        id: "",
        nickname: "",
        pwd: "",
        code: "",
        uname: "",
        tel: "",
        role_name: "",
      },
      rules: {
        uname: [
          { required: true, message: "账号不能为空", trigger: "blur" },
        
        ],
        pwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        
        ],
        nickname: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
         
        ],
        tel: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        code: [{ required: true, message: "验证码不能为空", trigger: "blur" }],
      },
      rangeDate: {
        //日期范围选择，只能选择当前日期以前的
        disabledDate(date) {
          return date.getTime() > Date.now();
        },
      },
    };
  },
  created: function () {
    this.getRolesList(); //获取角色
    if (this.type == 2) {
      this.getUserEdit();
    }
  },
  mounted: function () {},
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
      if (
        !/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
          this.ruleForm.tel
        )
      ) {
        this.$message({
          message: "请输入正确手机号",
          type: "error",
        });
        return false;
      }
      // 判断手机号是否符合要求
      if (this.ruleForm.tel.length !== 11) {
        this.$message({
          message: "请输入11位手机号",
          type: "error",
        });
        return false;
      }
      let params = {
        phone: this.ruleForm.tel,
      };
      phoneCode(params).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.date);
          this.code = res.data.date;
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
    //获取修改的信息
    getUserEdit() {},
    //获取角色组
    getRolesList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      userRoles(params).then((res) => {
        this.rolesList = res.data.data;
      });
    },
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 2) {
        this.ruleForm = row;
        console.log(row);
        let id = this.ruleForm.id;
        this.id = id;
        let params = {
          token: sessionStorage.getItem("token"),
        };
        editShow(params, id).then((res) => {
          this.ruleForm = res.data.data;
          console.log(this.ruleForm);
          this.ruleForm.role_name = res.data.data.rid;
        });
      } else {
        this.ruleForm = {
          id: "",
          nickname: "",
          pwd: "",
          uname: "",
          tel: "",
          role_name: "",
        };
      }
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      });
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.code !== this.ruleForm.code) {
            this.$message({
              message: "请输入正确验证码",
              type: "error",
            });
            return false;
          }
          if (this.type == 1) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              nickname: this.ruleForm.nickname,
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              pwd: this.ruleForm.pwd,
              u_type: 1,
              role_name: this.ruleForm.role_name,
              code: this.ruleForm.code,
            };
            addUser(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
              }
            });
          } else {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let id = this.id;
            let params = {
              token: sessionStorage.getItem("token"),
              u_type: 1,
              nickname: this.ruleForm.nickname,
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              code: this.ruleForm.code,
              pwd: this.ruleForm.pwd,
              role_name: this.ruleForm.role_name,
            };

            editUser(params, id).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");

                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
              }
            });
          }
          this.$parent.getUserList();
          this.close();
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>
