<template>
  <div class="editData">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        label-width="auto"
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
      >
        <el-row>
          <el-col :span="10" class="xian">
            <el-form-item label="区域" prop="place">
              <el-input
                v-model="ruleForm.place"
                placeholder="请输入"
              ></el-input> </el-form-item
          ></el-col>
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
import { placeadd, placeedit } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      type: "",
      dialogVisible: false,
      ruleForm: { place: "" },

      rules: {
        place: [{ required: true, message: "请输入区域", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      if (type == 2) {
        this.ruleForm.place = row.place;
        this.id = row.id;
      }
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.place = "";
    },

    submitForm() {
      let id = this.id;
      if (this.type == 1) {
        let params = {
          place: this.ruleForm.place,
          token: sessionStorage.getItem("token"),
        };
        placeadd(params).then((res) => {
          if (res.data.code == 200) {
            this.$message.success("新增成功");
            this.$parent.getUserList();
            this.close();
          } else {
            this.$message(res.data.msg);
            this.close();
            this.$parent.getUserList();
          }
        });
      } else {
        let params = {
          place: this.ruleForm.place,
          id: this.id,
          token: sessionStorage.getItem("token"),
        };
        placeedit(params).then((res) => {
          if (res.data.code == 200) {
            this.$message.success("修改成功");
            this.close();
            this.$parent.getUserList();
          } else {
            this.$message(res.data.msg);
            this.close();
            this.$parent.getUserList();
          }
        });
      }
    },
  },
};
</script>

<style>
</style>
