<template>
  <div class="modifyPwd">
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="userForm"
        ref="userForm"
        :rules="rules"
        label-width="auto"
      >
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="原密码" prop="oldPwd">
              <el-input
                v-model="userForm.oldPwd"
                placeholder="请输入原密码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="新密码" prop="newPwd">
              <el-input
                v-model="userForm.newPwd"
                placeholder="请输入新密码"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="确认密码" prop="newAgainPwd">
              <el-input
                v-model="userForm.newAgainPwd"
                placeholder="请输入确认密码"
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
import { modifyPwd } from "@/api/user";
export default {
  name: "modifyPwd",
  components: {},
  data() {
    let validateAgainPwd = (rule, value, callback) => {
      let newPwd = this.userForm.newPwd;
      if (value == "") callback(new Error("确认密码不能为空"));
      else if (value != newPwd) callback(new Error("两次密码不一致"));
      else callback();
    };
    return {
      dialogVisible: false,
      userForm: {
        userId: "",
        oldPwd: "",
        newPwd: "",
        newAgainPwd: "",
      },
      rules: {
        oldPwd: [
          { required: true, message: "原密码不能为空", trigger: "blur" },
        ],
        newPwd: [
          { required: true, message: "新密码不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9]{6,18}$/,
            message: "密码由 6-18 个大小写字母和数字组成",
            trigger: "blur",
          },
        ],
        newAgainPwd: [{ validator: validateAgainPwd, trigger: "blur" }],
      },
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.userForm.userId = row.userId;
    },
    close() {
      this.dialogVisible = false;
      (this.userForm = {
        userId: "",
        oldPwd: "",
        newPwd: "",
        newAgainPwd: "",
      }),
        this.$nextTick(() => {
          this.$refs.userForm.clearValidate(); //关闭清空校验规则
        });
    },
    submitForm() {
      this.$refs.userForm.validate(async (valid) => {
        if (valid) {
          let res = await modifyPwd(this.userForm);
          if (res.status == 200) {
            this.$message.success(res.message);
            this.close();
          } else {
            this.$message.warning(res.message);
          }
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
