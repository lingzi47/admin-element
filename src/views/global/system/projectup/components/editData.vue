<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="tittle"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="项目说明" prop="imageUrl">
              <el-upload
                class="avatar-uploader"
                action="https://y4.wjw.cool/command/ossUpload?filename=file"
                :show-file-list="false"
                :disabled="isDisable"
                :on-success="handleAvatarSuccess"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" /><i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <!-- <el-col :span="24">
            <el-form-item label="推广分润逻辑" prop="imageUrl2">
              <el-upload
                class="avatar-uploader"
                action="https://y4.wjw.cool/command/ossUpload?filename=file"
                :show-file-list="false"
                :on-success="handleAvatar"
              >
                <img v-if="imageUrl2" :src="imageUrl2" class="avatar" /><i
                  v-else
                  class="el-icon-plus avatar-uploader-icon"
                ></i>
              </el-upload>
            </el-form-item>
          </el-col> -->
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
import { configadd, configedit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      ruleForm: {
        imageUrl: "",
        imageUrl2: "",
      },
      isDisable: false,
      imageUrl: "",
      // imageUrl2: "",
      tittle: "",
      dialogVisible: false,
      rules: {
        imageUrl: [{ required: true, message: "请选择图片", trigger: "blur" }],

        // imageUrl2: [{ required: true, message: "请选择图片", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleAvatar(res, file) {
      let imgurl2 = res.data;
      this.imageUrl2 = imgurl2;
      this.ruleForm.imageUrl2 = imgurl2;
    },

    handleAvatarSuccess(res, file) {
      let imgurl = res.data;
      this.imageUrl = imgurl;
      this.ruleForm.imageUrl = imgurl;
    },

    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        console.log(row);
        this.ruleForm.imageUrl = row.img;
        this.imageUrl = row.img;
        this.isDisable = false;
        // this.ruleForm.imageUrl2 = row.img2;
        // this.imageUrl2 = row.img2;
        this.id = row.id;
      } else if (this.type == 1) {
        this.tittle = "添加";
        this.isDisable = false;
      } else {
        console.log(row);
        this.tittle = "查看";
        this.isDisable = true;
        this.ruleForm.imageUrl = row.img;
        this.imageUrl = row.img;
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.imageUrl = "";
      this.ruleForm.imageUrl2 = "";
      this.imageUrl = "";
      this.imageUrl2 = "";
    },

    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              img: this.ruleForm.imageUrl,
              img2: this.ruleForm.imageUrl2,
            };
            configadd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              }
            });
          } else {
            return false;
          }
        });
      } else if (this.type == 2) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              img: this.ruleForm.imageUrl,
              img2: this.ruleForm.imageUrl2,
              token: sessionStorage.getItem("token"),
              id: this.id,
            };
            configedit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              }
            });
          } else {
            return false;
          }
        });
      }
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