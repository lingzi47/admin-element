<template>
  <div class="editData">
    <el-dialog
      title="代金券添加"
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
            <el-form-item label="代金券名称" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入代金券名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="可使用商品" prop="good">
              <el-select v-model="ruleForm.good" placeholder="请选择">
                <el-option label="全部商品" value="99999"></el-option>
                <el-option label="预见专区" value="1"></el-option>
                <el-option label="预见商城" value="2"></el-option>
                <el-option label="本地商城" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="面值" prop="price">
              <el-input
                v-model="ruleForm.price"
                placeholder="请输入面值"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="有效期" prop="overdue">
              <el-input
                v-model="ruleForm.overdue"
                placeholder="请输入有效期："
              ></el-input>
              <el-button
                @click="yong"
                type="info"
                style="padding: 8px 20px; margin-left: 10px"
                >永久</el-button
              >
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
import { couponadd, appuserShow } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      ruleForm: {
        name: "",
        good: "",
        price: "",
        overdue: "",
      },
      img: "",
      rules: {
        name: [
          { required: true, message: "请输入代金券名称", trigger: "blur" },
        ],
        good: [
          {
            required: true,
            message: "请选择可使用商品",
            trigger: "blur",
          },
        ],
        price: [{ required: true, message: "请输入面值", trigger: "blur" }],

        overdue: [{ required: true, message: "请输入有效期", trigger: "blur" }],
      },
      dialogVisible: false,
    };
  },
  created: function () {},

  mounted: function () {},
  methods: {
    yong() {
      this.ruleForm.overdue = 99999;
    },
    show() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm = "";
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let token = sessionStorage.getItem("token");
          this.token = token;
          let params = {
            name: this.ruleForm.name,
            good: this.ruleForm.good,
            token: sessionStorage.getItem("token"),
            price: this.ruleForm.price,
            overdue: this.ruleForm.overdue,
          };
          couponadd(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
              this.$parent.getUserList();
              this.close();
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
