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
          <el-col :span="12">
            <el-form-item label="手机号" prop="tel">
              <el-input
                v-model="ruleForm.tel"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
          </el-col>

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
            <el-form-item label="前端用户id绑定" prop="web_uid">
              <el-input
                v-model="ruleForm.web_uid"
                placeholder="请输入前端用户id"
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
import { userRoles, addUser, editShow, editUser } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      token: "",
      rolesList: [], //角色列表
      type: 1, //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        id: "",
        nickname: "",
        pwd: "",
        uname: "",
        tel: "",
        role_name: "",
        web_uid: "",
      },
      rules: {
        uname: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            pattern: /^[a-z0-9]{4,10}$/,
            message: "账号由 4-10 个小写字母和数字组成",
            trigger: "blur",
          },
        ],
        web_uid: [
          { required: true, message: "前端用户id不能为空", trigger: "blur" },
        ],
        pwd: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{6,18}$/,
            message: "密码由 6-18 个大小写字母和数字组成",
            trigger: "blur",
          },
        ],
        nickname: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,4}$/,
            message: "姓名由 2-4 个汉字组成",
            trigger: "blur",
          },
        ],
        tel: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
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
    //console.log(this.type);
    if (this.type == 2) {
      this.getUserEdit();
    }
  },
  mounted: function () {},
  methods: {
    //获取修改的信息
    getUserEdit() {},
    //获取角色组
    getRolesList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      //console.log(this.token);
      let params = {
        token: sessionStorage.getItem("token"),
      };
      userRoles(params).then((res) => {
        //console.log(res.data.data);
        this.rolesList = res.data.data;
      });
    },
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 2) {
        this.ruleForm = row;
        //console.log(this.ruleForm.id);
        let id = this.ruleForm.id;
        this.id = id;
        let params = {
          token: sessionStorage.getItem("token"),
        };
        editShow(params, id).then((res) => {
          //console.log(res.data.data);
          this.ruleForm = res.data.data;
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
          web_uid: "",
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
          if (this.type == 1) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              nickname: this.ruleForm.nickname,
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              pwd: this.ruleForm.pwd,
              web_uid: this.ruleForm.web_uid,
              u_type: 3,
              role_name: this.ruleForm.role_name,
            };

            addUser(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.close();
                this.$parent.getUserList();
              } else {
                this.$message.error(res.data.msg);
                this.close();
                this.$parent.getUserList();
              }
            });
          } else {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let id = this.id;

            let params = {
              token: sessionStorage.getItem("token"),
              u_type: 3,
              nickname: this.ruleForm.nickname,
              uname: this.ruleForm.uname,
              tel: this.ruleForm.tel,
              pwd: this.ruleForm.pwd,
              web_uid: this.ruleForm.web_uid,

              role_name: this.ruleForm.role_name,
            };

            editUser(params, id).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.close();
                this.$parent.getUserList();
              } else {
                this.$message.error(res.data.msg);
                this.close();
                this.$parent.getUserList();
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
