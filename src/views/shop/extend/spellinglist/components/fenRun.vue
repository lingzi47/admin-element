<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="title"
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
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item
              label="合同"
              prop="goods_img"
              v-if="title !== '查看合同'"
            >
              <el-upload
                class="avatar-uploader1"
                action="https://testapi.yujian02.xyz/command/ossUpload?filename=file"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar1" />
                <i v-else class="el-icon-plus avatar-uploader-icon1"></i>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="10" v-if="title == '查看合同'">
            <el-form-item label="合同" prop="goods_img">
              <img v-if="imageUrl" :src="imageUrl" style="img" />
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer" v-if="title !== '查看合同'">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { agreeRead, agreeEdit, agreeAdd } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      id: "",
      title: "",
      imageUrl: "",

      dialogVisible: false,
      ruleForm: {
        goods_img: "",
      },
      rules: {
        goods_img: [
          { required: true, message: "请上传合同照片", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.title == "上传合同") {
            console.log("上传");
            let params = {
              token: sessionStorage.getItem("token"),
              img: this.ruleForm.goods_img,
              list_id: this.id,
            };
            agreeAdd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("上传成功");
                this.$parent.shoporderlist();
                this.close();

                this.dialogVisible = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.shoporderlist();
                this.close();
                this.dialogVisible = false;
              }
            });
          } else {
            let params = {
              token: sessionStorage.getItem("token"),
              img: this.ruleForm.goods_img,
              list_id: this.id,
            };
            agreeEdit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("修改成功");
                this.$parent.shoporderlist();
                this.close();

                this.dialogVisible = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.shoporderlist();
                this.close();
                this.dialogVisible = false;
              }
            });
          }
        } else {
          return false;
        }
      });
    },
    show(type, row) {
      console.log(type);
      this.dialogVisible = true;
      console.log(row);
      this.id = row.id;
      if (type == 1) {
        this.title = "上传合同";
      } else if (type == 2) {
        this.title = "修改合同";
        this.huo();
      } else {
        this.title = "查看合同";
        this.huo();
      }
    },
    huo() {
      let params = {
        token: sessionStorage.getItem("token"),
        list_id: this.id,
      };
      agreeRead(params).then((res) => {
        console.log(res.data.data);
        this.ruleForm.goods_img = res.data.data.img;
        this.imageUrl = res.data.data.img;
      });
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.goods_img = "";
      this.imageUrl = "";
    },
    handleAvatarSuccess(res, file) {
      let imgurl = res.data;
      this.imageUrl = imgurl;
      this.ruleForm.goods_img = imgurl;
    },

    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
  },
};
</script>

<style>
.avatar-uploader1 .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader1 .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon1 {
  font-size: 28px;
  color: #8c939d;
  width: 200px;
  height: 300px;
  line-height: 300px;
  text-align: center;
}
.avatar1 {
  width: 200px;
  height: 300px;
  display: block;
}
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
  width: 220px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 220px;
  height: 150px;
  display: block;
}
.img {
  width: 100%;
}
</style>