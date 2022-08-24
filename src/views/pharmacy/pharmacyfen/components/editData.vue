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
      <el-form>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="药房名称:"> {{ big_name }}</el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="分润设置"> </el-form-item>
          </el-col>

          <el-col>
            <el-form-item>
              <el-radio v-model="radio" label="10" @change="checked"
                >设备总流水的<el-input
                  v-model="input"
                  style="width: 250px; margin-left: 15px"
                  :disabled="isDisable1"
                ></el-input
                >%进行分润</el-radio
              >
              <el-radio
                style="margin-top: 10px"
                v-model="radio"
                label="20"
                @change="checked"
                >药品售卖差价的<el-input
                  v-model="input1"
                  style="width: 250px"
                  :disabled="isDisable"
                ></el-input
                >%进行分润</el-radio
              >
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
import { fenrunset, positionedit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      goodsForm: {
        box_number: "",
      },
      big_name: "",
      tittle: "",
      isDisable: false,
      isDisable1: false,
      total_profit: "",
      input: "",
      input1: "",
      radio: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      dialogVisible1: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    zhuan() {
      this.dialogVisible1 = true;
    },
    submitForm1() {
      this.dialogVisible1 = false;
    },
    quxiao() {
      this.dialogVisible1 = false;
    },
    close1() {
      this.dialogVisible1 = false;
    },
    checked(events) {
      console.log(events);
      this.events = events;
      if (events == 10) {
        this.isDisable = true;
        this.isDisable1 = false;
        console.log("1解开2不能用");
        this.input1 = "";
      } else {
        this.isDisable = false;
        this.isDisable1 = true;
        console.log("2解开1不能用");
        this.input = "";
      }
    },

    show(type, row) {
      this.dialogVisible = true;
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        console.log(row);
        this.big_name = row.big_name;
        this.id = row.id;
        if (row.share == 10) {
          this.radio = "10";
          this.input = row.total_profit;
          this.isDisable = true;
        } else if (row.share == 20) {
          this.radio = "20";
          this.isDisable1 = true;
          this.input1 = row.total_profit;
        } else {
        }
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;
      this.radio = "";
      this.big_name = "";
      this.total_profit = "";
      this.input = "";
      this.input1 = "";
    },

    submitForm() {
      if (this.input1 == "") {
        this.total_profit = this.input;
      } else {
        this.total_profit = this.input1;
      }
      if (this.radio == "") {
        this.$message.error("请选择分润模式");
        return;
      }
      if (this.total_profit == "") {
        this.$message.error("分润不能为空");
        return;
      }

      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        big_name: this.big_name,
        share: this.radio,
        total_profit: this.total_profit,
      };
      fenrunset(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("新增成功");
          this.$parent.getUserList();
          this.close();
          this.isDisable = false;
        } else {
          this.$message.error(res.data.msg);
          this.$parent.getUserList();
          this.close();
          this.isDisable = false;
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
