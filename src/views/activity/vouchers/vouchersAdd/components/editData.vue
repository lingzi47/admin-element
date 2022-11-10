<template>
  <div class="editData">
    <el-dialog
      title="释放代金券"
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
            <el-form-item label="释放代金券名称" prop="coupon_id">
              <el-select
                v-model="ruleForm.coupon_id"
                placeholder="请选择代金券名称"
              >
                <el-option
                  v-for="item in list"
                  :value="item.id"
                  :key="item.value"
                  :label="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="释放数量" prop="num">
              <el-input
                v-model="ruleForm.num"
                placeholder="请输入释放数量"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="释放人用户id：" prop="user_id">
              <el-input
                v-model="ruleForm.user_id"
                placeholder="请输入释放用户id"
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
import { couponlist, couponset } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      list: [],
      ruleForm: {
        coupon_id: "",
        num: "",
        user_id: "",
      },
      img: "",
      rules: {
        coupon_id: [
          { required: true, message: "请选择代金券", trigger: "blur" },
        ],
        num: [{ required: true, message: "请输入释放数量", trigger: "blur" }],

        user_id: [
          { required: true, message: "释放用户id不能为空", trigger: "blur" },
        ],
      },
      dialogVisible: false,
    };
  },
  created() {
    let params = {
      token: sessionStorage.getItem("token"),
      sta: 20,
    };
    couponlist(params).then((res) => {
      this.list = res.data.data;
    });
  },
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
      let imgurl = res.file;
      this.imageUrl = URL.createObjectURL(file.raw);
      this.img = "http://y1.wjw.cool/" + imgurl;
    },
    show() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        coupon_id: this.ruleForm.coupon_id,
        user_id: this.ruleForm.user_id,
        num: this.ruleForm.num,
      };
      couponset(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
        }

        this.dialogVisible = false;
        this.$parent.getUserList();
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
