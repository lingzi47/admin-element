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
          <el-col :span="10" v-if="this.tittle == '添加'">
            <el-form-item label="用户ID" prop="uid">
              <el-input
                v-model="ruleForm.uid"
                style="width: 180px"
                placeholder="请输入用户ID"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="10" v-if="this.tittle == '添加'">
            <el-form-item label="限购套餐" prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="套餐一" value="1"></el-option>
                <el-option label="套餐二" value="2"></el-option>
                <el-option label="套餐三" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <p v-if="this.tittle == '查看套餐'">
        套餐1: 西贝·贾国龙瑞兔迎新礼盒（3190g）
        +诺西贝（NosyBe）国产海鲜398型<br />
        套餐2: 西贝认,贾国龙瑞兔迎新礼盒（3190g） +诺西贝（NosyBe)国产海鲜398型
        +京禧・浓情（20选1）<br />
        套餐3: 西贝·贾国龙瑞兔迎新礼盒（3190g） +诺西贝（NosyBe)国产海鲜398型
        +京禧·浓情（20选1）+中粮·尊品（16选1）
      </p>
      <div slot="footer" class="dialog-footer" v-if="this.tittle == '添加'">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { goodschooseadd } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",
      form: {
        value1: "",
        value2: "",
        value3: "",
      },

      dialogVisible: false,
      ruleForm: {
        uid: "",
        type: "",
      },
      rules: {
        uid: [{ required: true, message: "请输入用户id", trigger: "blur" }],
        type: [{ required: true, message: "请选择限购套餐", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type) {
      if (type == 1) {
        this.dialogVisible = true;
        this.tittle = "添加";
      } else {
        this.tittle = "查看套餐";
        this.dialogVisible = true;
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.uid = "";
      this.ruleForm.type = "";
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let token = sessionStorage.getItem("token");
          this.token = token;
          let params = {
            token: sessionStorage.getItem("token"),
            uid: this.ruleForm.uid,
            type: this.ruleForm.type,
          };
          goodschooseadd(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
              this.$parent.getUserList();
              this.close();
            } else {
              this.$message.error(res.data.msg);
              this.$parent.getUserList();
              this.close();
            }
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style>
.yao {
  margin-left: -75px !important;
}
</style>
