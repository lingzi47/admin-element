<template>
  <div class="operationEditDialog">
    <el-dialog title="编辑" :visible.sync="dialogVisible" width="400px" :close-on-click-modal="false" @close="close">
      <el-form :model="operationForm" ref="operationForm" :rules="rules" label-width="auto">
        <el-input type="hidden" v-model="operationForm.id"></el-input>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="操作" prop="name">
              <el-input v-model="operationForm.name" placeholder="请输入操作" disabled>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="操作名称" prop="title">
              <el-input v-model="operationForm.title" placeholder="请输入操作名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="操作描述" prop="describe">
              <el-input v-model="operationForm.describe" placeholder="请输入操作描述"></el-input>
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
import { editOperation } from '@/api/operation'
export default {
  name: "operationEditDialog",
  components: {},
  data() {
    return {
      dialogVisible: false,
      operationForm: {},
      rules: {
        title: [{ required: true, message: '操作名称不能为空', trigger: 'blur' }],
      }
    }
  },
  created: function () { },
  mounted: function () { },
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.operationForm = row;
    },
    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.operationForm.clearValidate(); //关闭清空校验规则
      })
    },
    submitForm() {
      this.$refs.operationForm.validate(async (valid) => {
        if (valid) {
          let res = await editOperation(this.operationForm);
          if (res.status == 200) this.$message.success(res.message);
          this.$parent.getOperation();
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
