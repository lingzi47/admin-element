<template>
  <div class="editData">
    <el-dialog
      title="版本新增"
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
          <el-col :span="15">
            <el-form-item label="版本号" prop="version">
              <el-input
                v-model="ruleForm.version"
                placeholder="例如：1.0.1"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="版本地址" prop="url">
              <el-input
                v-model="ruleForm.url"
                placeholder="例如：https://www.baidu.com/"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="15">
            <el-form-item label="设备" prop="type">
              <el-select v-model="ruleForm.type" placeholder="请选择">
                <el-option label="ios" value="1"></el-option>
                <el-option label="安卓" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="版本说明" prop="remarks">
              <el-input
                type="textarea"
                v-model="ruleForm.remarks"
                placeholder="例如：1.修复了已知bug。"
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
import { versioncreate, appuserShow } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      ruleForm: {
        version: "",
        url: "",
        type: "",
        remarks: "",
      },
      img: "",
      rules: {
        version: [{ required: true, message: "请输入版本号", trigger: "blur" }],
        url: [{ required: true, message: "请输入版本地址", trigger: "blur" }],
        type: [{ required: true, message: "请选择设备", trigger: "blur" }],
        remarks: [{ required: true, message: "请输入", trigger: "blur" }],
      },
      dialogVisible: false,
    };
  },
  created: function () {
    //console.log(this.type);
  },
  mounted: function () {},
  methods: {
    show() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        version: this.ruleForm.version,
        url: this.ruleForm.url,
        remarks: this.ruleForm.remarks,
        type: this.ruleForm.type,
      };
      versioncreate(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("新增成功");
          this.close();
          this.$parent.getUserList();
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
