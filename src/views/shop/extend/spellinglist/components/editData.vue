<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="新增拼单"
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
          <el-col :span="15">
            <el-form-item label="购买价格" prop="price">
              <el-select
                v-model="ruleForm.price"
                placeholder="请选择"
                style="width: 180px"
              >
                <el-option label="3750" value="3750"></el-option>
                <el-option label="2950" value="2950"></el-option>
                <el-option label="2500" value="2500"></el-option>
                <el-option label="1875" value="1875"></el-option>
                <el-option label="1700" value="1700"></el-option>
                <el-option label="1580" value="1580"></el-option>
                <el-option label="2600" value="2600"></el-option>
                <el-option label="1800" value="1800"></el-option>
                <el-option label="1975" value="1975"></el-option>
                <el-option label="1680" value="1680"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="15">
            <el-form-item label="用户ID" prop="uid">
              <el-input
                v-model="ruleForm.uid"
                style="width: 180px"
                placeholder="请输入用户id"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="15">
            <!-- {{ ruleForm.box_team }} -->

            <el-form-item label="区域选择" prop="box_team">
              <el-select
                v-model="ruleForm.box_team"
                placeholder="请选择"
                style="width: 180px"
              >
                <el-option
                  v-for="(v, k) in list[0]"
                  :value="k"
                  :key="k"
                  :label="v"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="15">
            <el-form-item label="联系方式" prop="phone">
              <el-input
                v-model="ruleForm.phone"
                style="width: 180px"
                placeholder="请输入联系方式"
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
import {
  addtuilist,
  teamchoose,
  doctoradd,
  goodseditshow,
  goodsedit,
  chooseboxuid,
} from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      token: "",
      dialogVisible: false,
      ruleForm: {
        uid: "",
        phone: "",
        price: "",
        box_team: "",
      },
      list: [],
      rules: {
        price: [{ required: true, message: "请选择购买价格", trigger: "blur" }],
        box_team: [{ required: true, message: "请选择地区", trigger: "blur" }],
        uid: [{ required: true, message: "请输入绑定id", trigger: "blur" }],

        phone: [
          { required: true, message: "请输入联系方式", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    "ruleForm.uid"(vaulue) {
      this.team();
    },
  },
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.phone = "";
      this.ruleForm.uid = "";
      this.ruleForm.price = "";
      this.ruleForm.box_team = "";
    },
    team() {
      let params = {
        token: sessionStorage.getItem("token"),
        uid: this.ruleForm.uid,
      };
      teamchoose(params).then((res) => {
        this.list = res.data.data;
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            uid: this.ruleForm.uid,
            phone: this.ruleForm.phone,
            price: this.ruleForm.price,
            box_team: this.ruleForm.box_team,
          };
          addtuilist(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
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
          return false;
        }
      });
    },
  },
};
</script>

<style>
</style>

