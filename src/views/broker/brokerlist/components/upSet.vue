<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="this.type == 1 ? '绑定上级' : '修改上级'"
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
            <el-form-item label="推荐人设备租赁号" prop="device_num">
              <el-input
                v-model="goodsForm.device_num"
                style="width: 180px"
                placeholder="请输入设备租赁号"
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
import { upPid, goodseditshow, goodsedit } from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      check: "",
      token: "",
      setid: "",

      type: "", //1新增，2编辑
      dialogVisible: false,
      goodsForm: { device_num: "" },
      uid: "",
      rules: {
        device_num: [
          { required: true, message: "请输入设备租赁号", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(type, row) {
      console.log(type);
      this.type = type;
      console.log(row);
      this.id = row.id;

      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
    },

    go() {
      this.$router.back();
    },
    submitForm() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        id: this.id,
        device: this.device_num,
      };
      upPid(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("成功");
          this.$parent.getUserList();
          this.close();
        } else {
          this.$message.error(res.data.msg);
          this.$parent.getUserList();
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
