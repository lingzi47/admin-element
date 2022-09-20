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
            <el-form-item label="标签名称" prop="details">
              <el-input
                v-model="ruleForm.details"
                style="width: 180px"
                placeholder="请输入标签名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="联系人" prop="person">
              <el-input
                v-model="ruleForm.person"
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
            <el-form-item label="地址" prop="bank">
              <el-input
                v-model="ruleForm.bank"
                style="width: 180px"
                placeholder="请输入地址"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="备注" prop="bank">
              <el-input
                type="textarea"
                v-model="ruleForm.bank"
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
import { pharmacyadd, pharmacyedit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      check: false,
      token: "",
      isDisable: false,
      tittle: "",
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
      province: "",
      type: "",
      city: "",
      id: "",
      area: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        value1: [],
        phone: "",
        name: "",
        big_name: "",
        bank: "",
        person: "",
        details: "",
      },
      rules: {
        person: [
          { required: true, message: "请输入负责人姓名", trigger: "blur" },
        ],
        value1: [{ required: true, message: "请选择省市区", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          // {
          //   pattern: /^1[3456789]\d{9}$/,
          //   message: "手机号格式不正确",
          //   trigger: "blur",
          // },
        ],
        details: [
          { required: true, message: "请输入详情信息", trigger: "blur" },
        ],
        name: [{ required: true, message: "请输入药房名称", trigger: "blur" }],
        big_name: [
          { required: true, message: "请输入药房名称", trigger: "blur" },
        ],
        bank: [{ required: true, message: "请输入银行卡号", trigger: "blur" }],
      },
    };
  },
  created() {
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  methods: {
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },
    change(data) {
      console.log(data);
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
    },
    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        console.log(row);
        this.id = row.id;
        this.ruleForm.phone = row.phone;
        this.ruleForm.bank = row.bank;
        this.ruleForm.person = row.person;
        this.ruleForm.name = row.name;
        this.ruleForm.big_name = row.big_name;
        this.ruleForm.details = row.details;
        // this.ruleForm.value1 = "";
        let arr1 = [];
        arr1.push(row.province);
        arr1.push(row.city);
        arr1.push(row.area);

        console.log(arr1);
        this.ruleForm.value1 = arr1;
        console.log(this.ruleForm.value1);
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.phone = "";
      this.ruleForm.bank = "";
      this.ruleForm.person = "";
      this.ruleForm.name = "";
      this.ruleForm.big_name = "";
      this.ruleForm.details = "";
      this.isDisable = false;
      this.check = false;
      this.ruleForm.value1 = "";
    },

    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              bank: this.ruleForm.bank,
              phone: this.ruleForm.phone,
              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              big_name: this.ruleForm.big_name,
              person: this.ruleForm.person,
              details: this.ruleForm.details,
              province: this.ruleForm.value1[0],
              city: this.ruleForm.value1[1],
              area: this.ruleForm.value1[2],
            };
            pharmacyadd(params).then((res) => {
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
              bank: this.ruleForm.bank,
              phone: this.ruleForm.phone,
              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              big_name: this.ruleForm.big_name,
              id: this.id,
              person: this.ruleForm.person,
              details: this.ruleForm.details,
              province: this.ruleForm.value1[0],
              city: this.ruleForm.value1[1],
              area: this.ruleForm.value1[2],
            };
            pharmacyedit(params).then((res) => {
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
