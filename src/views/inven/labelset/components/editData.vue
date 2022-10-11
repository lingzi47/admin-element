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
          <el-col :span="10">
            <el-form-item label="标签名称" prop="name">
              <el-input
                v-model="ruleForm.name"
                style="width: 180px"
                placeholder="请输入标签名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="联系人" prop="contacts">
              <el-input
                v-model="ruleForm.contacts"
                style="width: 180px"
                placeholder="请输入联系人"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="联系方式" prop="phone">
              <el-input
                v-model="ruleForm.phone"
                style="width: 180px"
                placeholder="请输入联系方式"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="地址" prop="address">
              <el-input
                v-model="ruleForm.address"
                style="width: 180px"
                placeholder="请输入地址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="备注" prop="remark">
              <el-input
                type="textarea"
                v-model="ruleForm.remark"
                style="width: 240px"
                placeholder="请输入地址"
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
import { creTag, savTag } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",

      isDisable: false,
      tittle: "",

      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        phone: "",

        remark: "",
        address: "",
        contacts: "",
        name: "",
      },
      rules: {
        contacts: [
          { required: true, message: "请输入联系人姓名", trigger: "blur" },
        ],

        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        name: [{ required: true, message: "请输入标签名称", trigger: "blur" }],

        address: [{ required: true, message: "请输入", trigger: "blur" }],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
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
        this.ruleForm.phone = row.phone;
        this.ruleForm.address = row.address;
        this.ruleForm.contacts = row.contacts;
        this.ruleForm.name = row.name;
        this.ruleForm.remark = row.remark;
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.phone = "";
      this.ruleForm.address = "";
      this.ruleForm.contacts = "";
      this.ruleForm.name = "";
      this.ruleForm.remark = "";
      this.isDisable = false;
    },

    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              remark: this.ruleForm.remark,
              phone: this.ruleForm.phone,
              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              contacts: this.ruleForm.contacts,
              address: this.ruleForm.address,
            };
            creTag(params).then((res) => {
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
              remark: this.ruleForm.remark,
              phone: this.ruleForm.phone,
              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              contacts: this.ruleForm.contacts,
              address: this.ruleForm.address,
              id: this.id,
            };
            savTag(params).then((res) => {
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
.yao {
  margin-left: -75px !important;
}
</style>
