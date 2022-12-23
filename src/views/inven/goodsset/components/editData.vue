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
            <el-form-item label="商品名称" prop="goods_name">
              <el-input
                v-model="ruleForm.goods_name"
                style="width: 180px"
                placeholder="请输入商品名称"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="销售价格" prop="buy_price">
              <el-input
                v-model="ruleForm.buy_price"
                style="width: 180px"
                placeholder="请输入销售价格"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="成本价格" prop="price">
              <el-input
                v-model="ruleForm.price"
                style="width: 180px"
                placeholder="请输入价格"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="商品品类" prop="type">
              <el-input
                v-model="ruleForm.type"
                style="width: 180px"
                placeholder="请输入商品品类"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="标签" prop="name">
              <el-select v-model="ruleForm.name" placeholder="请选择标签">
                <el-option
                  v-for="item in list"
                  :value="item.id"
                  :key="item.id"
                  :label="item.name"
                  @change="change"
                ></el-option>
              </el-select>
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
import { goodsAdd, goodsSave, tagList } from "@/request/api";
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
      list: [],
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        goods_name: "",
        price: "",
        type: "",
        id: "",
        remark: "",
        name: "",
        buy_price: "",
      },
      rules: {
        name: [{ required: true, message: "请输入标签", trigger: "blur" }],
        price: [{ required: true, message: "请输入成本价格", trigger: "blur" }],
        buy_price: [
          { required: true, message: "请输入销售价格", trigger: "blur" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
        goods_name: [
          { required: true, message: "请输入商品名称", trigger: "blur" },
        ],
        type: [{ required: true, message: "请输入商品品类", trigger: "blur" }],
      },
    };
  },
  watch: {},
  created() {
    this.getlist();
  },
  mounted() {},
  methods: {
    change(data) {},
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      tagList(params).then((res) => {
        this.list = res.data.data;
      });
    },
    show(type, row) {
      this.dialogVisible = true;

      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";

        this.id = row.id;
        this.ruleForm.remark = row.remark;
        this.ruleForm.type = row.type;
        this.ruleForm.name = row.tag_id;
        this.ruleForm.price = row.price;
        this.ruleForm.buy_price = row.buy_price;
        this.ruleForm.goods_name = row.goods_name;
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.remark = "";
      this.ruleForm.type = "";
      this.ruleForm.price = "";
      this.ruleForm.buy_price = "";
      this.ruleForm.name = "";

      this.ruleForm.goods_name = "";
    },

    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              goods_name: this.ruleForm.goods_name,
              price: this.ruleForm.price,
              buy_price: this.ruleForm.buy_price,
              token: sessionStorage.getItem("token"),
              tag_id: this.ruleForm.name,
              type: this.ruleForm.type,

              remark: this.ruleForm.remark,
            };
            goodsAdd(params).then((res) => {
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
              goods_name: this.ruleForm.goods_name,
              price: this.ruleForm.price,
              buy_price: this.ruleForm.buy_price,
              token: sessionStorage.getItem("token"),
              tag_id: this.ruleForm.name,
              type: this.ruleForm.type,
              remark: this.ruleForm.remark,
              id: this.id,
            };
            goodsSave(params).then((res) => {
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
