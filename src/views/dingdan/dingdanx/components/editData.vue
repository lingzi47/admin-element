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
            <el-form-item label="商品名称" prop="name">
              <el-select
                v-model="ruleForm.name"
                clearable
                style="width: 230px"
                filterable
                placeholder="请选择商品名称"
                @change="change"
              >
                <el-option
                  v-for="item in arr"
                  :value="item"
                  :label="item.goods_name"
                  :key="item.goods_name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="销售价:">
              <span v-if="buy_price == ''">暂无</span>
              <span>{{ buy_price }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="成本价:">
              <span v-if="price == ''">暂无</span>
              <span v-else>{{ price }}</span>
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
import { xunniadd, xunnigoods } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",
      name: "",
      arr: [],
      buy_price: "",
      price: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
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
  watch: {},
  created() {
    this.getlist();
  },
  mounted() {},
  methods: {
    change(data) {
      this.buy_price = data.buy_price;
      this.price = data.price;
      this.ruleForm.name = data.goods_name;
    },
    show() {
      this.dialogVisible = true;
      this.tittle = "添加";
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
      };
      xunnigoods(params).then((res) => {
        this.arr = res.data.data;
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            orderDeviceCode: this.ruleForm.orderDeviceCode,
            productName: this.ruleForm.name,
            productCostPrice: this.price,
            orderMoneyPaid: this.buy_price,
            orderCreateTime: new Date(+new Date() + 8 * 3600 * 1000)
              .toISOString()
              .replace(/T/g, " ")
              .replace(/\.[\d]{3}Z/, ""),
          };
          xunniadd(params).then((res) => {
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
