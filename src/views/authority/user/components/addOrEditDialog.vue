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
            <el-form-item label="账号" prop="username">
              <el-input
                v-model="ruleForm.username"
                placeholder="请输入账号"
                :disabled="type == 1 ? false : true"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码" prop="password">
              <el-input
                v-model="ruleForm.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入姓名"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="手机号" prop="phone">
              <el-input
                v-model="ruleForm.phone"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="0">男</el-radio>
                <el-radio label="1">女</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="账号状态" prop="state">
              <el-switch
                v-model="ruleForm.state"
                active-text="启用"
                inactive-text="禁用"
              ></el-switch>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="日期"
              prop="birth"
              :rules="[
                { required: true, message: '日期不能为空', trigger: 'blur' },
              ]"
            >
              <el-date-picker
                type="date"
                v-model="ruleForm.birth"
                placeholder="请选择日期"
                :picker-options="rangeDate"
                format="yyyy-MM-dd"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="地址" prop="addr">
              <el-input
                v-model="ruleForm.addr"
                placeholder="随机生成地址"
                disabled
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input
                v-model="ruleForm.email"
                placeholder="随机生成邮箱"
                disabled
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="角色"
              prop="roles"
              :rules="[
                { required: true, message: '角色不能为空', trigger: 'blur' },
              ]"
            >
              <el-select
                v-model="ruleForm.roles"
                multiple
                collapse-tags
                placeholder="请选择角色(可多选)"
              >
                <el-option
                  v-for="item in rolesList"
                  :value="item.name"
                  :label="item.title"
                  :key="item.id"
                ></el-option>
              </el-select>
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
import { addUser, editUser } from "@/api/user";
import { getRoles } from "@/api/role";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      rolesList: [], //角色列表
      type: 1, //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        id: "",
        username: "",
        password: "",
        avatar: "",
        name: "",
        phone: "",
        addr: "",
        birth: "",
        sex: "0",
        state: true,
        email: "",
        roles: [],
      },
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            pattern: /^[a-z0-9]{4,10}$/,
            message: "账号由 4-10 个小写字母和数字组成",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{6,18}$/,
            message: "密码由 6-18 个大小写字母和数字组成",
            trigger: "blur",
          },
        ],
        name: [
          { required: true, message: "姓名不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,4}$/,
            message: "姓名由 2-4 个汉字组成",
            trigger: "blur",
          },
        ],
        phone: [
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
  },
  mounted: function () {},
  methods: {
    async getRolesList() {
      let res = await getRoles();
      if (res.status == 200) {
        this.rolesList = res.data;
      }
    },
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 2) {
        row.sex = row.sex + "";
        this.ruleForm = row;
        //console.log(this.ruleForm);
      } else {
        this.ruleForm = {
          id: "",
          username: "",
          password: "",
          name: "",
          phone: "",
          addr: "",
          birth: "",
          sex: "0",
          state: true,
          email: "",
          roles: [],
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
          this.ruleForm.birth = new Date(this.ruleForm.birth).format(
            "yyyy-MM-dd"
          );
          if (this.type == 1) {
            let res = await addUser(this.ruleForm);
            if (res.status == 200) {
              this.$message.success("新增成功");
            }
          } else {
            let res = await editUser(this.ruleForm);
            if (res.status == 200) {
              this.$message.success("编辑成功");
            }
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
