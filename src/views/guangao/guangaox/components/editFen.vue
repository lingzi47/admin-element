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
            <el-form-item label="每日分润" prop="price">
              <el-input
                v-model="ruleForm.price"
                style="width: 180px"
                placeholder="请输入每日分润"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="租赁商" prop="zls">
              <el-input
                v-model="ruleForm.zls"
                style="width: 180px"
                placeholder="请输入租赁商"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="渠道商" prop="qds">
              <el-input
                v-model="ruleForm.qds"
                style="width: 180px"
                placeholder="请输入渠道商"
              ></el-input>
            </el-form-item>
          </el-col>
          <!--  每日分润:price  租赁商:zls  渠道商:qds  物业:wy 管理:gl -->
          <el-col :span="24">
            <el-form-item label="物业" prop="wy">
              <el-input
                v-model="ruleForm.wy"
                style="width: 180px"
                placeholder="请输入物业"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="管理" prop="gl">
              <el-input
                v-model="ruleForm.gl"
                style="width: 180px"
                placeholder="请输入管理"
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
import { fakeedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",

      dialogVisible: false,
      ruleForm: {
        gl: "",
        price: "",
        zls: "",
        qds: "",
        wy: "",
      },
      rules: {
        gl: [{ required: true, message: "请输入管理", trigger: "blur" }],
        price: [{ required: true, message: "请输入每日分润", trigger: "blur" }],
        zls: [{ required: true, message: "请输入租赁商", trigger: "blur" }],
        wy: [{ required: true, message: "请输入物业", trigger: "blur" }],
        qds: [{ required: true, message: "请输入渠道商", trigger: "blur" }],
      },
    };
  },

  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.tittle = "编辑";
      this.ruleForm.wy = row.wy;
      this.ruleForm.price = row.price;
      this.ruleForm.zls = row.zls;
      this.ruleForm.qds = row.qds;
      this.ruleForm.gl = row.gl;
      this.id = row.id;
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.wy = "";
      this.ruleForm.price = "";
      this.ruleForm.zls = "";
      this.ruleForm.qds = "";
      this.ruleForm.gl = "";
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let a = Number(this.ruleForm.price);
          let b =
            Number(this.ruleForm.wy) +
            Number(this.ruleForm.zls) +
            Number(this.ruleForm.qds) +
            Number(this.ruleForm.gl);
          console.log("大于", a > b);
          console.log(a);
          console.log(b);

          if (a >= b) {
            let params = {
              token: sessionStorage.getItem("token"),
              wy: this.ruleForm.wy,
              price: this.ruleForm.price,
              id: this.id,
              zls: this.ruleForm.zls,
              qds: this.ruleForm.qds,
              gl: this.ruleForm.gl,
            };
            fakeedit(params).then((res) => {
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
            this.$message.error(
              "租赁商,渠道商,物业,管理分润总和不能大于每日分润"
            );
          }
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
