<template>
  <div class="roleAddOrEditDialog">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-input type="hidden" v-model="ruleForm.type_id"></el-input>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="分类名称" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入分类">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="排序(大->小)" prop="title">
              <el-input
                v-model="ruleForm.weigh"
                placeholder="排序(大->小)"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="分类简介" prop="description">
              <el-input
                v-model="ruleForm.brief"
                placeholder="请输入简介"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="图标" prop="description">
              <el-upload
                class="avatar-uploader"
                action="https://yujian02.xyz/command/ossUpload?filename=file"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
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
import { shopTypeadd, shopTypeedit, shopTyptreeadd } from "@/api/shop";
export default {
  name: "roleAddOrEditDialog",
  components: {},
  data() {
    return {
      id: "",
      imageUrl: "",
      type: 1, //1新增，2编辑，3分类新增
      dialogVisible: false,
      ruleForm: [],
      rules: {
        name: [
          { required: true, message: "分类名称不能为空", trigger: "blur" },
        ],
      },
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    show(type, row) {
      this.id = row.id;
      this.type = type;
      this.dialogVisible = true;
      this.ruleForm = row;
      this.imageUrl = this.ruleForm.icon;
      if (this.type == 3) {
        this.ruleForm = {};
        this.imageUrl = "";
      }
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      });
    },
    handleAvatarSuccess(res, file) {
      let imgurl = res.data;
      this.imageUrl = imgurl;
      this.ruleForm.icon = imgurl;
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        this.ruleForm.shop_type = 4;
        delete this.ruleForm["create_time"];
        delete this.ruleForm["update_time"];
        delete this.ruleForm["delete_time"];
        if (valid) {
          if (this.type == 1) {
            let res = await shopTypeadd({
              name: this.ruleForm.name,
              shop_type: 4,
              weigh: this.ruleForm.weigh,
              brief: this.ruleForm.brief,
              token: sessionStorage.getItem("token"),
              icon: this.ruleForm.icon,
            });
            if (res.status == 200) this.$message.success(res.msg);
            else this.$message.warning(res.message);
          } else if (this.type == 2) {
            let res = await shopTypeedit({
              name: this.ruleForm.name,
              weigh: this.ruleForm.weigh,
              id: this.id,
              shop_type: 4,
              brief: this.ruleForm.brief,
              token: sessionStorage.getItem("token"),
              icon: this.ruleForm.icon,
            });
            if (res.status == 200) this.$message.success(res.msg);
          } else {
            delete this.ruleForm["id"];
            let res = await shopTyptreeadd({
              name: this.ruleForm.name,
              weigh: this.ruleForm.weigh,
              pid: this.id,
              shop_type: 4,
              brief: this.ruleForm.brief,
              token: sessionStorage.getItem("token"),
              icon: this.ruleForm.icon,
            });
            if (res.status == 200) this.$message.success(res.msg);
          }
          this.$parent.getlist();
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
