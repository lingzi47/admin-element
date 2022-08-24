<template>
  <div class="navbar">
    <div class="head-logo">
      <i style="padding-right: 5px" class="el-icon-s-home"></i>
      预见App后台管理系统
    </div>
    <ul class="head-right">
      <li class="head-item">
        <i class="el-icon-date" style="margin-right: 6px"></i>
        当前时间：{{ new Date().format("yyyy年MM月dd日 dddd") }}
      </li>
      <li class="head-item">
        <el-dropdown @command="handleCommand">
          <div type="primary">
            <span class="user-name">{{ name }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <!-- <el-dropdown-item command="userCenter">
              <i class="el-icon-user"></i>个人信息
            </el-dropdown-item>
            <el-dropdown-item command="updatePwd">
              <i class="el-icon-edit"></i>修改密码
            </el-dropdown-item> -->
            <!-- command="logout" -->
            <el-dropdown-item>
              <p @click="loginout">
                <i class="el-icon-switch-button"></i>退出登录
              </p>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li style="line-height: initial">
        <!-- 修改密码 -->
        <modify-pwd ref="modifyPwd"></modify-pwd>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { userOut } from "@/request/api";
import modifyPwd from "@/components/modifyPwd.vue";
export default {
  name: "Navbar",
  components: {
    modifyPwd,
  },
  data() {
    return {
      name: "",
    };
  },
  created() {
    let name = sessionStorage.getItem("role_name");
    this.name = name;
    //console.log(this.name);
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  methods: {
    loginout() {
      //console.log(sessionStorage);
      //console.log("当前退出");
      let uid = sessionStorage.getItem("uid");
      this.uid = uid;
      //console.log(this.uid);
      userOut({ id: this.uid, token: sessionStorage.getItem("token") }).then(
        (res) => {
          //console.log(res.data.code);
          if (res.data.code == 200) {
            this.$message({
              message: "退出成功",
              type: "success",
            });
            sessionStorage.clear();
            this.$store.dispatch("user/logout").then(() => {
              window.location.reload();
            });
          }
        }
      );
    },
    handleCommand(command) {
      if (command == "logout") {
        //退出登录
        this.$store.dispatch("user/logout").then(() => {
          window.location.reload();
        });
      } else if (command == "userCenter") {
        //个人中心
        this.$router.push({
          name: "personal",
        });
      } else if (command == "updatePwd") {
        //修改密码
        let userId = this.$store.getters.userInfo.id;
        this.$refs.modifyPwd.show({ userId: userId });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 0 10px;

  .head-logo {
    padding: 0 10px;
    font-size: 24px;
    font-weight: bold;
  }

  .head-right {
    display: flex;

    .head-item {
      padding: 0 15px;
      font-size: 15px;
      color: #606266;
      cursor: pointer;
    }

    .head-item:hover {
      color: #409eff;
    }

    .user-tx {
      width: 45px;
      height: 45px;
      border-radius: 6px;
      margin-right: 5px;
      vertical-align: middle;
    }
  }
}
</style>
