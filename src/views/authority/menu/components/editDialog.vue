<template>
  <div class="menuEditDialog">
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="400px" :close-on-click-modal="false" @close="close">
      <el-form :model="menuForm" ref="menuForm" :rules="rules" label-width="auto">
        <el-input type="hidden" v-model="menuForm.id"></el-input>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="菜单" prop="name">
              <el-input v-model="menuForm.name" placeholder="请输入菜单" disabled>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="菜单名称" prop="title">
              <el-input v-model="menuForm.title" placeholder="请输入菜单名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="菜单路径" prop="path">
              <el-input v-model="menuForm.path" placeholder="请输入菜单路径" disabled></el-input>
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
import { editMenu } from '@/api/operation'
export default {
  name: "menuEditDialog",
  components: {},
  data() {
    return {
      dialogVisible: false,
      menuForm: {},
      rules: {
        title: [{ required: true, message: '菜单名称不能为空', trigger: 'blur' }],
      }
    }
  },
  created: function () { },
  mounted: function () { },
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.menuForm = row;
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.menuForm.clearValidate(); //关闭清空校验规则
      })
    },
    submitForm() {
      this.$refs.menuForm.validate(async (valid) => {
        if (valid) {
          let res = await editMenu(this.menuForm);
          if (res.status == 200) this.$message.success(res.message);
          this.$parent.getMenu();
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
