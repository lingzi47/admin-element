<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="新增分润等级"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :rules="rules"
        label-width="auto"
        :model="goodsForm"
        ref="goodsForm"
      >
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="等级:" prop="level">
              <el-input
                v-model="goodsForm.level"
                style="width: 180px"
                placeholder="请输入等级"
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
import { createProfit, BoxProfitdel, bind, bindedit } from "@/request/api";

export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      skuList: [], //列表
      goodsForm: {
        level: "",
      },
      id: "",
      box_type: "",
      dialogVisible: false,

      rules: {
        level: [{ required: true, message: "请输入等级", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type, id) {
      this.id = id;
      this.box_type = type;
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.goodsForm.level = "";
    },

    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),
        level: this.goodsForm.level,
        id: this.id,
        box_type: this.box_type,
      };
      createProfit(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("成功");
          this.$parent.tableshow();
          this.close();
        } else {
          this.$message.error(res.data.msg);
          this.$parent.tableshow();
          this.close();
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
