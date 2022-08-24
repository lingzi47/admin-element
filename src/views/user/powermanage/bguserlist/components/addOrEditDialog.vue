<template>
  <div class="roleAddOrEditDialog">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="400px"
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
          <el-col :span="24">
            <el-form-item label="角色名称" prop="role_name">
              <el-input
                v-model="ruleForm.role_name"
                placeholder="请输入角色名称"
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
import { adduserGroup, edituserGroup } from "@/request/api";
export default {
  name: "roleAddOrEditDialog",
  components: {},
  data() {
    return {
      id: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {},
      rules: {
        role_name: [
          { required: true, message: "角色名称不能为空", trigger: "blur" },
        ],
      },
    };
  },
  created: function () {
    this.getUserEdit();
  },
  mounted: function () {},
  methods: {
    getUserEdit() {},
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      this.ruleForm = row;
      this.id = row.id;
      //console.log(this.id);
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
            let params = {
              u_type: 1,
              token: sessionStorage.getItem("token"),
              role_name: this.ruleForm.role_name,
            };
            adduserGroup(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getRolesList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getRolesList();
                this.close();
              }
            });
          } else {
            let id = this.id;
            //console.log(id);
            let params = {
              u_type: 1,
              token: sessionStorage.getItem("token"),
              role_name: this.ruleForm.role_name,
            };
            edituserGroup(params, id).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.$parent.getRolesList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getRolesList();
                this.close();
              }
            });
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
</style>
