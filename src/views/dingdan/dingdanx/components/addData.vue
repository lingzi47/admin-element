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
            <el-form-item label="组合名称" prop="name">
              <el-select
                v-model="ruleForm.name"
                clearable
                style="width: 150px"
                filterable
                placeholder="请选择"
                @change="change"
              >
                <el-option
                  v-for="item in arr"
                  :value="item.id"
                  :label="item.name"
                  :key="item.id"
                ></el-option>
              </el-select>
              <el-select
                v-model="ruleForm.plan_id"
                clearable
                style="width: 150px"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in arr1"
                  :value="item.id"
                  :label="item.name"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="设备编号:" prop="orderDeviceCode">
              <el-input
                v-model="ruleForm.orderDeviceCode"
                style="width: 180px"
                placeholder="请输入设备编号"
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
import { unrealOrderAdd, choosePlan } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",
      name: "",
      arr: [],
      arr1: [],
      buy_price: "",
      price: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
        plan_id: "",
        orderDeviceCode: "",
      },
      rules: {
        name: [{ required: true, message: "请选择商品名称", trigger: "blur" }],
        orderDeviceCode: [
          { required: true, message: "请输入设备编号", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    "ruleForm.name"(newval) {
      this.ruleForm.plan_id = "";
      this.arr1 = [];
    },
  },
  created() {
    this.getlist();
  },
  mounted() {},
  methods: {
    change(data) {
      console.log(data);
      this.pid = data;

      this.geterlist();
    },
    geterlist() {
      let params = {
        token: sessionStorage.getItem("token"),
        pid: this.pid,
      };
      choosePlan(params).then((res) => {
        console.log(res.data.data);
        this.arr1 = res.data.data;
      });
    },
    show() {
      this.dialogVisible = true;
      this.tittle = "组合添加";
    },

    close() {
      this.dialogVisible = false;
      this.price = "";
      this.buy_price = "";
      this.ruleForm.name = "";
      this.ruleForm.orderDeviceCode = "";
    },
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
        pid: 0,
      };
      choosePlan(params).then((res) => {
        console.log(res.data.data);
        this.arr = res.data.data;
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            orderDeviceCode: this.ruleForm.orderDeviceCode,
            plan_id: this.ruleForm.plan_id,

            orderCreateTime: new Date(+new Date() + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, ""),
          };
          unrealOrderAdd(params).then((res) => {
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
