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
            <el-form-item label="组合名称:" prop="name">
              <el-input
                v-model="ruleForm.name"
                style="width: 180px"
                placeholder="请输入组合名称"
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
import { planadd } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      tittle: "",
      name: "",
      arr: [],
      buy_price: "",
      price: "",
      dialogVisible: false,
      ruleForm: {
        name: "",
      },
      rules: {
        name: [{ required: true, message: "请输入组合名称", trigger: "blur" }],
      },
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      if (type == 1) {
        this.dialogVisible = true;
        this.tittle = "添加";
      } else {
        this.dialogVisible = true;
        this.tittle = "二级添加";
        this.pid = row.id;
      }
    },

    close() {
      this.dialogVisible = false;

      this.ruleForm.name = "";
    },

    submitForm() {
      if (this.tittle == "添加") {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let params = {
              token: sessionStorage.getItem("token"),
              pid: 0,
              name: this.ruleForm.name,
            };
            planadd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
              }
            });
          } else {
            return false;
          }
        });
      } else {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let params = {
              token: sessionStorage.getItem("token"),
              pid: this.pid,
              name: this.ruleForm.name,
            };
            planadd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
              }
            });
          } else {
            return false;
          }
        });
      }
    },
  },
};
</script>

<style>
.yao {
  margin-left: -75px !important;
}
</style>
