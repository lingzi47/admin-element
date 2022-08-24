<template>
  <div class="AddDialog">
    <el-dialog
      title="pk值设置"
      :visible.sync="dialogVisible"
      width="700px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form :rules="rules" :model="ruleForm" ref="ruleForm">
        <el-row>
          <el-col :span="3">
            <el-form-item label="消费满"> </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item prop="full_price">
              <el-input
                v-model="ruleForm.full_price"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="元，赠送"> </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item prop="multiple">
              <el-input
                v-model="ruleForm.multiple"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-form-item label="倍pk值"> </el-form-item>
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
import { pkset } from "@/api/shop";
export default {
  name: "pkSet",
  components: {},
  data() {
    return {
      id: "",
      token: "",

      dialogVisible: false,
      ruleForm: {
        full_price: "",
        multiple: "",
      },

      rules: {
        full_price: [
          { required: true, message: "请输入整数", trigger: "blur" },
          {
            pattern: /^-?\d+(\.\d{2})$/,
            message: "请输入两位小数",
            trigger: "blur",
          },
        ],

        multiple: [
          { required: true, message: "请输入整数", trigger: "blur" },
          {
            pattern: /^[1-9]\d*$/,
            message: "请输入整数",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    show(row) {
      //console.log(row.full_price);
      this.ruleForm.full_price = row.full_price;
      //console.log(row.multiple);
      this.ruleForm.multiple = row.multiple;
      this.id = row.id;

      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      });
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let token = sessionStorage.getItem("token");

          let res = await pkset({
            full_price: this.ruleForm.full_price,
            multiple: this.ruleForm.multiple,
            id: this.id,
            token: sessionStorage.getItem("token"),
          });

          if (res.data.code == 200) {
            this.$message.success("操作成功");
          }
        }
        this.$parent.shopList();
        this.close();
      });
    },
  },
};
</script>

<style>
</style>
