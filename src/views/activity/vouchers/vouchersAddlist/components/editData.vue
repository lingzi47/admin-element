<template>
  <div class="editData">
    <el-dialog
      title="代金券任务"
      :visible.sync="dialogVisible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-row :gutter="30">
          <el-col :span="13">
            <el-form-item label="钻石提现获得钻石体现数值的千分之" prop="num">
              <el-input
                v-model="ruleForm.num"
                placeholder="请输入数量"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="" prop="coupon_id">
              <el-select v-model="ruleForm.coupon_id" placeholder="请选择">
                <el-option
                  v-for="item in List"
                  :value="item.id"
                  :key="item.value"
                  :label="item.name"
                ></el-option>
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
import { coupontaskadd, couponlist } from "@/requestw/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      List: [],
      ruleForm: {
        coupon_id: "",
        num: "",
      },
      img: "",
      rules: {
        coupon_id: [
          { required: true, message: "请选择代金券", trigger: "blur" },
        ],
        num: [{ required: true, message: "请输入数量", trigger: "blur" }],
      },
      dialogVisible: false,
    };
  },
  created() {
    let params = {
      token: sessionStorage.getItem("token"),
      sta: 20,
    };
    couponlist(params).then((res) => {
      //console.log(res.data.data);

      this.List = res.data.data;
    });
  },
  mounted: function () {},
  methods: {
    show() {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      //console.log(this.ruleForm.time);

      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            num: this.ruleForm.num,
            coupon_id: this.ruleForm.coupon_id,
          };
          coupontaskadd(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
              this.ruleForm.coupon_id = "";
              this.ruleForm.num = "";
            }
          });

          this.close();
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
