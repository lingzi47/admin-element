<template>
  <div class="AddDialog">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible1"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="100px"
        class="demo-dynamic"
      >
        <el-form-item prop="email" label="商品规格">
          <el-input v-model="dynamicValidateForm.email"></el-input>
        </el-form-item>
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'属性' + index"
          :key="domain.key"
          :prop="'domains.' + index + '.value'"
        >
          <el-input v-model="domain.value"></el-input
          ><el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')"
            >提交</el-button
          >
          <el-button @click="addDomain">新增属性</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "addSku",
  components: {},
  data() {
    return {
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },

      rolesList: [],
      type: 1,
      dialogVisible1: false,
      ruleForm: {
        id: "",
      },
      rules: {},
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    show(type, row) {
      this.type = type;
      this.dialogVisible1 = true;

      if (type == 2) {
      } else {
      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },

    close() {
      this.dialogVisible1 = false;
      this.$nextTick(() => {
        this.$refs.ruleForm.clearValidate(); //关闭清空校验规则
      });
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let res = await shopskuadd(this.ruleForm);
          if (res.status == 200) {
            this.$message.success("新增成功");
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

</script>

<style lang="scss" scoped>
</style>

