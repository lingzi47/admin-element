<template>
  <div class="editData">
    <el-dialog
      title="信息修改"
      :visible.sync="dialogVisible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto" :rules="rules">
        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item label="封面图" prop="goods_img">
                <el-upload
                  class="avatar-uploader"
                  action="https://yujian02.xyz/command/ossUpload?filename=file"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="imageUrl" :src="imageUrl" class="avatar" /><i
                    v-else
                    class="el-icon-plus avatar-uploader-icon"
                  ></i>
                </el-upload>
              </el-form-item></div
          ></el-col>
          <el-col :span="10" class="userif"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="用户id">
                <el-input v-model="userid" disabled></el-input
              ></el-form-item></div
          ></el-col>
        </el-row>

        <el-row>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item label="原用户身份" prop="member">
                <el-select
                  style="width: 180px"
                  v-model="member"
                  clearable
                  placeholder="请选择用户身份"
                >
                  <el-option label="普通用户" :value="0"></el-option>
                  <el-option label="MT黑卡" :value="1"></el-option>
                  <el-option label="C级推广员" :value="2"></el-option>
                  <el-option label="B级推广员" :value="3"></el-option>
                  <el-option label="A级推广员" :value="4"></el-option>
                </el-select>
              </el-form-item></div
          ></el-col>
          <el-col :span="12"
            ><div class="grid-content bg-purple">
              <el-form-item label="所属市场" prop="team">
                <el-select
                  style="width: 180px"
                  v-model="team"
                  clearable
                  placeholder="请选择所属市场"
                >
                  <el-option label="全国" :value="1"></el-option>
                  <el-option label="大连" :value="2"></el-option>
                  <el-option label="大庆" :value="3"></el-option>
                  <el-option label="本溪" :value="5"></el-option>
                  <!-- <el-option label="北京" :value="4"></el-option> -->
                </el-select>
              </el-form-item>
            </div></el-col
          >
          <el-col :span="12"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="用户上级">
                <el-input v-model="pid"></el-input
              ></el-form-item></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="24"
            ><div class="grid-content bg-purple-dark">
              <el-form-item label="会员到期时间" v-if="member == 1">
                <el-date-picker
                  v-model="overdue_time"
                  type="date"
                  value-format="yyyy-MM-dd HH:mm:ss"
                  placeholder="选择日期"
                >
                </el-date-picker>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <el-form-item label="原拥有pk值"> {{ pk_value }}</el-form-item>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="pk值增加或减少（+/-）">
                <el-input
                  v-model="pk_value_save"
                  placeholder="例：+100"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="10" class="xian"
            ><div class="grid-content bg-purple">
              <el-form-item label="备注">
                <el-input v-model="pk_text" placeholder="请输入"></el-input>
              </el-form-item></div
          ></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"
            ><div class="grid-content bg-purple">
              <el-form-item label="原拥有钻石"> {{ diamonds }}</el-form-item>
            </div></el-col
          >
          <el-col :span="8"
            ><div class="grid-content bg-purple-light">
              <el-form-item label="钻石增加或减少（+/-）">
                <el-input
                  v-model="diamonds_save"
                  placeholder="例：+100"
                ></el-input>
              </el-form-item></div
          ></el-col>
          <el-col :span="10" class="xian"
            ><div class="grid-content bg-purple">
              <el-form-item label="备注">
                <el-input
                  v-model="diamonds_text"
                  placeholder="请输入"
                ></el-input>
              </el-form-item></div
          ></el-col>
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
import { edituser, appuserShow } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      userid: "",
      imageUrl: "",
      team: "",
      pk_text: "",
      diamonds_text: "",
      token: "",
      rolesList: [], //角色列表
      pk_value: "",
      pk_value_save: "",
      diamonds: "",
      overdue_time: "",
      diamonds_save: "",
      member: "",
      dialogVisible: false,
      pid: "",
      rules: {
        member: [
          {
            required: true,
            message: "请选择用户身份",
            trigger: "blur",
          },
        ],
        team: [
          {
            required: true,
            message: "请选择所属市场",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    //获取修改的信息
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handleAvatarSuccess(res, file) {
      let imgurl = res.data;
      this.imageUrl = imgurl;
    },
    show(row) {
      this.dialogVisible = true;
      let id = row.id;
      this.imageUrl = row.head_img;
      this.userid = row.id;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      appuserShow(params, id).then((res) => {
        this.pk_value = res.data.data.pk_value;
        this.diamonds = res.data.data.diamonds;
        this.member = res.data.data.member;
        this.id = res.data.data.id;
        this.team = res.data.data.team;
        this.overdue_time = res.data.data.overdue_time;
        this.pid = res.data.data.pid;
      });
    },
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      if (this.member == 1) {
        if (this.overdue_time == "") {
          this.$message.error("请选择会员到期时间");
        } else {
          this.admin();
        }
      } else {
        this.admin();
      }
    },
    admin() {
      let id = this.id;
      let params = {
        token: sessionStorage.getItem("token"),
        diamonds_save: this.diamonds_save,
        diamonds_text: this.diamonds_text,
        pk_value_save: this.pk_value_save,
        pk_text: this.pk_text,
        member: this.member,
        pid: this.pid,
        team: this.team,
        overdue_time: this.overdue_time,
      };
      edituser(params, id).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("编辑成功");
          this.$parent.getUserList();
          this.dialogVisible = false;
          this.pk_value_save = "";
          this.team = "";
          this.diamonds_save = "";
          // this.pk_text = "";
          // this.diamonds_text = "";
        } else {
          this.$message(res.data.msg);
          this.$parent.getUserList();
          this.dialogVisible = false;
          this.pk_value_save = "";
          this.diamonds_save = "";
          this.team = "";
          this.overdue_time = "";
          // this.pk_text = "";
          // this.diamonds_text = "";
        }
      });
    },
  },
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.xian {
  margin-left: -75px !important;
}
.userif {
  margin-top: 100px;
}
</style>
