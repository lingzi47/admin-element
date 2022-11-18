<template>
  <div class="editData">
    <el-dialog
      title="释放租赁商钻石池"
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
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="钻石池：" prop="money">
              <el-input
                v-model="ruleForm.money"
                placeholder="请输入钻石数量"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="参与人数：" prop="people">
              <el-input
                v-model="ruleForm.people"
                placeholder="请输入参与人数："
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="封面图:" prop="image">
              <el-upload
                class="avatar-uploader"
                action="https://y4.wjw.cool/command/ossUpload?filename=file"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" /><i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="截止时间:" prop="time">
              <el-date-picker
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="ruleForm.time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="释放人：" prop="release_peo">
              <el-input
                v-model="ruleForm.release_peo"
                placeholder="请输入释放人："
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="请输入浮动范围：" prop="fu">
              <el-input
                v-model="ruleForm.fu"
                placeholder="请输入浮动范围："
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
import { zlsreleaseadd } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: "",
      ruleForm: {
        money: "",
        xn_money: "",
        people: "",
        image: "",
        fu: "",
        release_peo: "",
        type: "10",
        time: "",
      },
      img: "",
      rules: {
        money: [{ required: true, message: "请输入钻石池", trigger: "blur" }],
        fu: [{ required: true, message: "请输入浮动范围", trigger: "blur" }],
        people: [{ required: true, message: "请输入人数", trigger: "blur" }],

        image: [{ required: true, message: "请选择封面图", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        release_peo: [
          { required: true, message: "释放人不能为空", trigger: "blur" },
          {
            pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{2,4}$/,
            message: "姓名由 2-4 个汉字组成",
            trigger: "blur",
          },
        ],

        type: [{ required: true, message: "请选择类型", trigger: "blur" }],
      },
      dialogVisible: false,
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
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
      this.ruleForm.image = imgurl;
    },
    show() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      // this.ruleForm.money = "";
      // this.ruleForm.xn_money = "";
      // this.ruleForm.people = "";
      // this.ruleForm.fu = "";
      // this.imageUrl = "";
      // this.ruleForm.time = "";
      // this.ruleForm.release_peo = "";
      // this.ruleForm.image = "";
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            money: this.ruleForm.money,
            people: this.ruleForm.people,
            range_num: this.ruleForm.fu,
            type: this.ruleForm.type,
            due_time: this.ruleForm.time,
            release_peo: this.ruleForm.release_peo,
            banner: this.ruleForm.image,
          };
          zlsreleaseadd(params).then((res) => {
            if (res.status == 200) {
              this.$message.success("添加成功");
              this.$parent.getUserList();
            } else {
              this.$message.error(res.data.msg);
            }
          });
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
</style>
