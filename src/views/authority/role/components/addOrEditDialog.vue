<template>
  <div class="roleAddOrEditDialog">
    <el-dialog :title="type==1?'新增':'编辑'" :visible.sync="dialogVisible" width="400px" :close-on-click-modal="false" @close="close">
      <el-form :model="ruleForm" ref="ruleForm" :rules="rules" label-width="auto">
        <el-input type="hidden" v-model="ruleForm.id"></el-input>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="角色" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入角色" :disabled="type==1?false:true">
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="角色名称" prop="title">
              <el-input v-model="ruleForm.title" placeholder="请输入角色名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="角色描述" prop="description">
              <el-input v-model="ruleForm.description" placeholder="请输入角色描述"></el-input>
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
import { addRoles, editRoles } from '@/api/role'
export default {
  name: "roleAddOrEditDialog",
  components: {},
  data() {
    return {
      type: 1, //1新增，2编辑
      dialogVisible: false,
      ruleForm: {},
      rules: {
        name: [{ required: true, message: '角色不能为空', trigger: 'blur' }],
        title: [{ required: true, message: '角色名称不能为空', trigger: 'blur' }]
      }
    }
  },
  created: function () { },
  mounted: function () { },
  methods: {
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      this.ruleForm = row;
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      })
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.type == 1) {
            let res = await addRoles(this.ruleForm);
            if (res.status == 200) this.$message.success(res.message);
            else this.$message.warning(res.message);
          } else {
            let res = await editRoles(this.ruleForm);
            if (res.status == 200) this.$message.success(res.message);
          }
          this.$parent.getRolesList();
          this.close();
        } else {
          return false;
        }
      });
    }
  }
}
</script>

<style>
</style>
