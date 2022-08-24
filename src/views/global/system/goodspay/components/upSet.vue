<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="处理"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <div slot="footer" class="dialog-footer">
        <el-button @click="admin">处理中</el-button>
        <el-button type="primary" @click="submit">已处理</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { handleEx, bind, bindedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      console.log(row);
      this.dialogVisible = true;
    },
  },
  close() {
    this.dialogVisible = false;
  },
  admin() {
    let token = sessionStorage.getItem("token");
    this.token = token;
    let params = {
      token: sessionStorage.getItem("token"),
      status: 2,
      id: this.id,
    };
    handleEx(params).then((res) => {
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
  submit() {
    let token = sessionStorage.getItem("token");
    this.token = token;
    let params = {
      token: sessionStorage.getItem("token"),
      status: 3,
      id: this.id,
    };
    handleEx(params).then((res) => {
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
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
