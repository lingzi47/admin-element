<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="type == 1 ? '新增' : '编辑'"
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
          <el-col :span="15">
            <el-form-item label="商品id" prop="gid">
              <el-input
                v-model="ruleForm.gid"
                style="width: 180px"
                placeholder="请输入商品id"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="赠送会员时长" prop="days">
              <el-input
                style="width: 180px"
                v-model="ruleForm.days"
                placeholder="请输入赠送会员时长"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="15">
            <el-form-item label="请选择赠送方式" prop="type">
              <el-radio-group v-model="ruleForm.type">
                <el-radio :label="1">首次赠送</el-radio>
                <el-radio :label="2">重复赠送</el-radio>
              </el-radio-group>
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
import { goodsadd, goodseditshow, goodsedit } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      token: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        id: "",
        time: "",
        type: "",
      },
      rules: {
        gid: [{ required: true, message: "请输入商品id", trigger: "blur" }],
        days: [{ required: true, message: "请输入会员时长", trigger: "blur" }],
        type: [{ required: true, message: "请选择赠送方式", trigger: "blur" }],
      },
    };
  },
  created: function () {
    //console.log(this.type);

    this.getUserEdit();
  },
  mounted: function () {},
  methods: {
    //获取修改的信息
    getUserEdit() {},
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 1) {
        this.ruleForm = {
          gid: "",
          days: "",
          type: "",
        };
      } else {
        let id = row.id;
        this.id = id;
        let params = {
          token: sessionStorage.getItem("token"),
          id: id,
        };
        goodseditshow(params).then((res) => {
          //console.log(res.data);
          this.ruleForm = res.data.data;
          //console.log(this.ruleForm);
        });
      }
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
          if (this.type == 1) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              gid: this.ruleForm.gid,
              days: this.ruleForm.days,
              token: sessionStorage.getItem("token"),
              type: this.ruleForm.type,
            };
            goodsadd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error("商品id不存在");
              }
            });
          } else {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let id = this.id;
            let params = {
              gid: this.ruleForm.gid,
              days: this.ruleForm.days,
              token: sessionStorage.getItem("token"),
              type: this.ruleForm.type,
              id: this.id,
            };

            goodsedit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error("商品id不存在");
              }
            });
          }
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
