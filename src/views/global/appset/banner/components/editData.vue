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
        <el-row :gutter="15">
          <el-col :span="24">
            <el-form-item label="封面图" prop="img">
              <el-upload
                class="avatar-uploader"
                action=" https://y4.wjw.cool/command/ossUpload?filename=file"
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

          <el-col :span="20">
            <el-form-item label="商品类型(shop_type)" prop="shop_type">
              <el-input
                v-model="ruleForm.shop_type"
                style="width: 180px"
                placeholder="请输入商品类型"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="商品分类(goodstype)" prop="goodstype">
              <el-input
                v-model="ruleForm.goodstype"
                style="width: 180px"
                placeholder="请输入商品分类"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="排序" prop="weigh">
              <el-input
                v-model="ruleForm.weigh"
                style="width: 180px"
                placeholder="请输入排序"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="分类(totype)" prop="totype">
              <el-input
                v-model="ruleForm.totype"
                style="width: 180px"
                placeholder="请输入分类"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="信息(toinfo)" prop="toinfo">
              <el-input
                v-model="ruleForm.toinfo"
                style="width: 180px"
                placeholder="请输入信息"
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
import { banneradd, banneredit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      tittle: "",
      dialogVisible: false,
      imageUrl: "",
      ruleForm: {
        img: "",
        shop_type: "",
        goodstype: "",
        weigh: "",
        totype: "",
        toinfo: "",
      },
      rules: {
        shop_type: [
          { required: true, message: "请输入商品类型", trigger: "blur" },
        ],
        goodstype: [
          { required: true, message: "请输入商品分类", trigger: "blur" },
        ],
        weigh: [{ required: true, message: "请输入排序", trigger: "blur" }],
        totype: [{ required: true, message: "请输入分类", trigger: "blur" }],
        toinfo: [{ required: true, message: "请输入信息", trigger: "blur" }],

        img: [{ required: true, message: "请选择图片", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        console.log(row);
        this.id = row.id;
        this.imageUrl = row.img;
        this.ruleForm.img = row.img;
        this.ruleForm.weigh = row.weigh;
        this.ruleForm.goodstype = row.goodstype;
        this.ruleForm.toinfo = row.toinfo;
        this.ruleForm.totype = row.totype;
        this.ruleForm.shop_type = row.shop_type;
      } else {
        this.tittle = "添加";
      }
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handleAvatarSuccess(res, file) {
      //console.log(file);
      //console.log(res);
      let imgurl = res.data;
      this.imageUrl = imgurl;
      this.ruleForm.img = imgurl;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.img = "";
      this.ruleForm.weigh = "";
      this.ruleForm.goodstype = "";
      this.ruleForm.toinfo = "";
      this.ruleForm.totype = "";
      this.ruleForm.shop_type = "";
    },

    submitForm() {
      console.log(this.ruleForm.year);
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              img: this.ruleForm.img,
              shop_type: this.ruleForm.shop_type,
              totype: this.ruleForm.totype,
              toinfo: this.ruleForm.toinfo,
              goodstype: this.ruleForm.goodstype,
              weigh: this.ruleForm.weigh,
            };
            banneradd(params).then((res) => {
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
      } else {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              img: this.ruleForm.img,
              shop_type: this.ruleForm.shop_type,
              totype: this.ruleForm.totype,
              token: sessionStorage.getItem("token"),
              toinfo: this.ruleForm.toinfo,
              goodstype: this.ruleForm.goodstype,
              weigh: this.ruleForm.weigh,
              id: this.id,
            };
            banneredit(params).then((res) => {
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


<style lang="scss" scoped>
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
