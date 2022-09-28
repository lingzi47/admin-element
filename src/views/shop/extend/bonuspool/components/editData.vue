<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="奖金池新增市场"
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
        <el-row :gutter="20">
          <el-col :span="15">
            <el-form-item label="绑定id" prop="id">
              <el-input
                v-model="ruleForm.id"
                style="width: 180px"
                placeholder="请输入绑定id"
              ></el-input>
            </el-form-item>
          </el-col>

          <!-- <el-col :span="15">
            <el-form-item label="用户名称" prop="name">
              <el-input
                v-model="ruleForm.name"
                style="width: 180px"
                placeholder="请输入用户名称"
              ></el-input>
            </el-form-item>
          </el-col> -->
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
import {
  addpool,
  doctoradd,
  goodseditshow,
  goodsedit,
  chooseboxuid,
} from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      token: "",
      dialogVisible: false,
      ruleForm: {
        id: "",
        name: "",
      },
      rules: {
        id: [{ required: true, message: "请输入绑定id", trigger: "blur" }],

        name: [{ required: true, message: "请输入用户名称", trigger: "blur" }],
      },
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.name = "";
      this.ruleForm.id = "";
    },

    go() {
      this.$router.back();
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            uid: this.ruleForm.id,
            // name: this.ruleForm.name,
          };
          addpool(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("新增成功");
              this.$parent.getUserList();
              this.close();

              this.dialogVisible = false;
            } else {
              this.$message.error(res.data.msg);
              this.$parent.getUserList();
              this.close();
              this.dialogVisible = false;
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
.xian {
  margin-left: -75px !important;
}
</style>
