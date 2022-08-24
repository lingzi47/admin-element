<template>
  <div class="editData">
    <el-dialog
      title="推荐购买送PK"
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
          <el-col :span="20">
            <el-form-item label="推荐用户购买" prop="gid">
              <el-input
                v-model="ruleForm.gid"
                placeholder="请输入商品id"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="推荐人获得   " prop="tpk">
              <el-input
                v-model="ruleForm.tpk"
                placeholder="请输入pk值："
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5"> pk值，</el-col>
          <el-col :span="15">
            <el-form-item label="用户获得   " prop="upk">
              <el-input
                v-model="ruleForm.upk"
                placeholder="请输入pk值："
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="5"> pk值</el-col>
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
import { addgoodsListPk } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      imageUrl: false,
      imageUrl: "",
      ruleForm: {
        gid: "",
        time: "",
        tpk: "",
        upk: "",
      },
      img: "",
      rules: {
        gid: [{ required: true, message: "请输入商品id", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        tpk: [
          { required: true, message: "请输入推荐人获得pk值", trigger: "blur" },
        ],
        upk: [
          { required: true, message: "请输入购买者获得pk值", trigger: "blur" },
        ],
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
            gid: this.ruleForm.gid,
            tpk: this.ruleForm.tpk,
            upk: this.ruleForm.upk,
            s_time: this.ruleForm.time[0],
            e_time: this.ruleForm.time[1],
          };
          addgoodsListPk(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
            }
          });

          this.$parent.getUserList();
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
