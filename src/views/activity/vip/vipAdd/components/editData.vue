<template>
  <div class="editData">
    <el-dialog
      title="消费送会员"
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
        <el-row :gutter="20">
          <el-col :span="10">
            <el-form-item label="普通用户商城消费单笔满" prop="money">
              <el-input
                v-model="ruleForm.money"
                placeholder="请输入金额"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="元，赠送MT黑卡会员   " prop="days">
              <el-input
                v-model="ruleForm.days"
                placeholder="请输入赠送时长："
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="1" style="margin-top: 10px"> 日 </el-col>
          <el-col :span="20">
            <el-form-item label="时间：" prop="time">
              <el-date-picker
                v-model="ruleForm.time"
                type="daterange"
                value-format="yyyy-MM-dd HH:mm:ss"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
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
import { payadd } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      ruleForm: {
        money: "",
        time: "",
        days: "",
      },
      img: "",
      rules: {
        money: [{ required: true, message: "请输入消费金额", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        days: [{ required: true, message: "请输入赠送时长", trigger: "blur" }],
      },
      dialogVisible: false,
    };
  },
  created: function () {
    //console.log(this.type);
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
            days: this.ruleForm.days,
            money: this.ruleForm.money,
            start_time: this.ruleForm.time[0],
            end_time: this.ruleForm.time[1],
          };
          payadd(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
            } else {
              this.$message.error(res.data.msg);
            }
          });

          this.$parent.getlist();
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
