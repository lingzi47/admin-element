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
        :rules="rules"
        label-width="auto"
        :model="goodsForm"
        ref="goodsForm"
      >
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="设备编号:" prop="number">
              <el-input
                v-model="goodsForm.number"
                style="width: 180px"
                placeholder="请输入设备编号"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="设备sim卡号:" prop="deviceSim">
              <el-input
                v-model="goodsForm.deviceSim"
                style="width: 180px"
                placeholder="请输入设备sim卡号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="设备IMEI号:" prop="deviceIemi">
              <el-input
                v-model="goodsForm.deviceIemi"
                style="width: 180px"
                placeholder="请输入设备IMEI号"
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
import { boxlistadd, bind, bindedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      goodsForm: {
        deviceSim: "",
        number: "",
        deviceIemi: "",
      },

      dialogVisible: false,

      rules: {
        deviceSim: [
          { required: true, message: "请输入设备sim卡号", trigger: "blur" },
        ],
        number: [
          { required: true, message: "请输入设备编号", trigger: "blur" },
        ],
        deviceIemi: [
          { required: true, message: "请输入设备IMEI号", trigger: "blur" },
        ],
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
      this.goodsForm.deviceSim = "";
      this.goodsForm.number = "";

      this.goodsForm.deviceIemi = "";
    },
    checked() {
      console.log(11);
    },
    go() {
      this.$router.go(-1);
    },
    submitForm() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        deviceSim: this.goodsForm.deviceSim,
        number: this.goodsForm.number,

        deviceIemi: this.goodsForm.deviceIemi,
      };
      boxlistadd(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("成功");
          this.$parent.getUserList();
          this.close();
        } else {
          this.$message.error(res.data.msg);
          this.$parent.getUserList();
          this.close();
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
