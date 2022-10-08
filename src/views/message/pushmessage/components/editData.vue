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
            <el-form-item label="推送对象" prop="user_type">
              <el-select
                v-model="ruleForm.user_type"
                placeholder="请选择"
                style="width: 210px"
              >
                <el-option label="C级推广员" value="1"></el-option>
                <el-option label="C级,B级推广员" value="2"></el-option>
                <el-option label="C级,B级,A级推广员" value="3"></el-option>
                <el-option label="B级推广员" value="4"></el-option>
                <el-option label="C级,B级推广员" value="5"></el-option>
                <el-option label="A级推广员" value="6"></el-option>
                <el-option label="普通用户" value="7"></el-option>
                <el-option label="全部用户" value="8"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="通知编辑" prop="content">
              <el-input
                v-model="ruleForm.content"
                type="textarea"
                style="width: 210px"
                :rows="3"
                placeholder="请输入内容"
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
import { fakecreate } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",

      dialogVisible: false,
      ruleForm: {
        user_type: "",
        content: "",
      },
      rules: {
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        user_type: [
          { required: true, message: "请选择点位来源", trigger: "blur" },
        ],
      },
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    show() {
      this.dialogVisible = true;
      this.tittle = "添加";
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.user_type = "";
      this.ruleForm.content = "";
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            token: sessionStorage.getItem("token"),
            user_type: this.ruleForm.user_type,
            content: this.ruleForm.content,
          };
          fakecreate(params).then((res) => {
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
