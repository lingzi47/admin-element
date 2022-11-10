<template>
  <div class="personal">
    <div class="block-quote">
      <el-form
        :model="userInfo"
        ref="userInfo"
        :rules="rules"
        label-width="100px"
        style="width: 600px"
      >
        <el-form-item label="账号" prop="username">
          <el-input
            v-model="userInfo.username"
            readonly
            style="width: 400px"
          ></el-input>
          <el-link
            type="primary"
            style="margin-left: 20px; line-height: 20px"
            @click="updatePwd"
            >忘记密码</el-link
          >
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="userInfo.name" readonly></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="userInfo.phone" readonly></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-radio-group v-model="userInfo.sex">
            <el-radio label="0" readonly>男</el-radio>
            <el-radio label="1" readonly>女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="生日" prop="birth">
          <el-date-picker
            type="date"
            v-model="userInfo.birth"
            readonly
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="userInfo.age" readonly></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="userInfo.addr" readonly></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="userInfo.email" readonly></el-input>
        </el-form-item>
      </el-form>
    </div>
    <!-- 修改密码 -->
    <modify-pwd ref="modifyPwd"></modify-pwd>
  </div>
</template>

<script>
import { getUserInfo } from "@/api/user";
import modifyPwd from "@/components/modifyPwd.vue";
export default {
  name: "personal",
  components: {
    modifyPwd,
  },
  data() {
    return {
      userInfo: {},
      rules: {},
    };
  },
  created() {
    this.getUserInfo();
  },
  mounted() {},
  methods: {
    async getUserInfo() {
      // 获取用户信息
      let res = await getUserInfo({ token: this.$store.getters.token });
      if (res.status == 200) {
        res.data.sex = res.data.sex + "";
        this.userInfo = res.data;
      }
    },
    updatePwd() {
      //修改密码
      this.$refs.modifyPwd.show({ userId: this.userInfo.id });
    },
  },
};
</script>

<style lang="scss" scoped>
.personal {
  .el-form .el-radio-group {
    pointer-events: none;
  }
}
</style>
