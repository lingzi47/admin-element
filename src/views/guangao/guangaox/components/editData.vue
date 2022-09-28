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
            <el-form-item label="设备租赁号" prop="device">
              <el-input
                v-model="ruleForm.device"
                style="width: 180px"
                placeholder="请输入设备租赁号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="每日分润" prop="price">
              <el-input
                v-model="ruleForm.price"
                style="width: 180px"
                placeholder="请输入每日分润"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="点位来源" prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="汇置物业" value="1"></el-option>
                <el-option label="宋氏集团" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="投放周期" prop="time">
              <el-date-picker
                style="width: 380px"
                v-model="ruleForm.time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                align="right"
              >
              </el-date-picker>
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
import { fakecreate } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",

      dialogVisible: false,
      ruleForm: {
        device: "",
        price: "",
        type: "",
        time: "",
      },
      rules: {
        device: [
          { required: true, message: "请输入设备租赁号", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入每日分润", trigger: "blur" }],
        type: [{ required: true, message: "请选择点位来源", trigger: "blur" }],
        time: [{ required: true, message: "请选择投放周期", trigger: "blur" }],
      },
    };
  },
  watch: {
    "ruleForm.time"(newVal) {
      if (newVal == null) {
        this.ruleForm.time = [];
      }
    },
  },
  created() {},
  mounted() {},
  methods: {
    show() {
      this.dialogVisible = true;
      this.tittle = "添加";
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.device = "";
      this.ruleForm.price = "";
      this.ruleForm.type = "";
      this.ruleForm.time = "";
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            device: this.ruleForm.device,
            price: this.ruleForm.price,
            type: this.ruleForm.type,
            start_time: this.ruleForm.time[0],
            end_time: this.ruleForm.time[1],
          };
          fakecreate(params).then((res) => {
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
    },
  },
};
</script>

<style>
.yao {
  margin-left: -75px !important;
}
</style>
