<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="新增"
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
          <el-col :span="15">
            <el-form-item label="租赁商id" prop="uid">
              <el-input
                v-model="ruleForm.uid"
                style="width: 180px"
                placeholder="请输入租赁人用户id"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="租赁人手机号" prop="tel">
              <el-input
                v-model="ruleForm.tel"
                style="width: 180px"
                placeholder="请输入租赁人手机号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="购买服务" prop="box_type">
              <el-select
                v-model="ruleForm.box_type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="三年" value="1"></el-option>
                <el-option label="五年" value="2"></el-option>
                <el-option label="终身" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="推荐人设备租赁号" prop="pid">
              <el-input
                v-model="ruleForm.pid"
                :disabled="isDisable"
                style="width: 180px"
                placeholder="请输入设备租赁号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item class="xian">
              <el-checkbox v-model="check" @change="checked"
                >无推荐人</el-checkbox
              >
            </el-form-item></el-col
          >
          <el-col :span="20">
            <el-form-item label="是否真实购买" prop="device_type">
              <el-select
                v-model="ruleForm.device_type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="是" value="10"></el-option>
                <el-option label="否" value="20"></el-option>
              </el-select>
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
import { doctoradd, goodseditshow, goodsedit } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      check: false,
      token: "",
      isDisable: false,
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        uid: "",
        tel: "",
        box_type: "",
        device_type: "",
        pid: "",
      },
      rules: {
        uid: [
          { required: true, message: "请输入租赁人用户id", trigger: "blur" },
        ],
        tel: [
          { required: false, message: "请输入租赁人手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        box_type: [
          { required: true, message: "请选择购买服务", trigger: "blur" },
        ],
        device_type: [
          { required: true, message: "请选择是否真实购买", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请输入设备租赁号", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.pid = "";
      this.ruleForm.tel = "";
      this.ruleForm.box_type = "";

      this.ruleForm.uid = "";
      this.ruleForm.device_type = "";
      this.isDisable = false;

      this.check = false;
    },
    checked(events) {
      // console.log(events);
      this.events = events;
      if (events == true) {
        this.isDisable = true;
        this.ruleForm.pid = 0;
      } else {
        this.isDisable = false;
        this.ruleForm.pid = "";
      }
      //
      // console.log("被禁言");
      // this.ruleForm.uid = 0;
    },
    go() {
      this.$router.go(-1);
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let token = sessionStorage.getItem("token");
          this.token = token;
          let params = {
            pid: this.ruleForm.pid,
            tel: this.ruleForm.tel,
            token: sessionStorage.getItem("token"),
            box_type: this.ruleForm.box_type,
            uid: this.ruleForm.uid,
            device_type: this.ruleForm.device_type,
          };
          doctoradd(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
              this.$parent.getUserList();
              this.close();

              this.isDisable = false;
              this.check = false;
            } else {
              this.$message.error(res.data.msg);
              this.$parent.getUserList();
              this.close();

              this.isDisable = false;
              this.check = false;
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
.xian {
  margin-left: -75px !important;
}
</style>
