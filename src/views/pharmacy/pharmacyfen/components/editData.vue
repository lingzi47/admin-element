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
          <!-- <el-col :span="24">
            <el-form-item label="收益分润:">
              <el-input v-model="input" style="width: 80px"></el-input
              >%</el-form-item
            >
          </el-col> -->
          <el-col :span="24">
            <el-form-item label="分润模式:">
              <el-radio v-model="radio" label="10" @change="checked"
                >药品售价 -
                <el-input
                  v-model="input1"
                  style="width: 100px"
                  :disabled="isDisable1"
                ></el-input
                >%税率
              </el-radio>
              <p style="margin-left: 150px"></p>
              <el-radio
                style="margin-top: 10px; margin-left: 71px"
                v-model="radio"
                label="20"
                @change="checked"
                >药品售价 -
                <el-input
                  v-model="inp1"
                  style="width: 100px"
                  :disabled="isDisable"
                >
                </el-input
                >%税率的 - 药品成本
              </el-radio>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="收益分配:"></el-form-item
          ></el-col>
          <el-col :span="18">
            <el-form-item label="渠道商分润:" style="margin-left: -50px">
              <el-input v-model="total_profit" style="width: 80px"></el-input
              >%</el-form-item
            >
            <el-form-item
              label="药房分润:"
              style="margin-left: -50px"
              v-if="radio == 10"
            >
              <el-input v-model="other_profit" style="width: 80px"></el-input
              >%</el-form-item
            >
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
      other_profit: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      dialogVisible1: false,
      tax: "",
      radio: "",
      lessors: "",
      firm: "",
      input: "",
      input1: "",

      inp1: "",
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
      this.events = events;
      if (events == 10) {
        this.isDisable = true;
        this.isDisable1 = false;
        this.inp1 = "";
      } else {
        this.isDisable = false;
        this.isDisable1 = true;

        this.input1 = "";
      }
    },

    show(type, row) {
      this.dialogVisible = true;
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";

        this.big_name = row.big_name;
        this.total_profit = row.total_profit;
        this.id = row.id;
        if (row.share == 10) {
          this.radio = "10";
          this.other_profit = row.other_profit;
          this.input1 = row.tax;

          this.isDisable = true;
        } else if (row.share == 20) {
          this.radio = "20";
          this.isDisable1 = true;

          this.inp1 = row.tax;
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
      this.tax = "";
      this.other_profit = "";
      this.input1 = "";

      this.inp1 = "";
    },

    submitForm() {
      if (this.input1 == "") {
        this.tax = this.inp1;
      } else {
        this.tax = this.input1;
      }

      if (this.radio == "") {
        this.$message.error("请选择分润模式");
        return;
      }
      if (this.total_profit == "") {
        this.$message.error("分润不能为空");
        return;
      }
      if (this.tax == "") {
        this.$message.error("税率不能为空");
        return;
      }
      if (this.radio == 10) {
        if (this.other_profit === "") {
          this.$message.error("药房分润不能为空");

          return;
        }
      } else {
      }

      // let a = Number(this.lessors) + Number(this.firm);
      // if (a === 100) {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
        big_name: this.big_name,
        share: this.radio,
        total_profit: this.total_profit,
        tax: this.tax,
        other_profit: this.other_profit,
        // lessors: this.lessors,
        // firm: this.firm,
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
      // } else if (a <= 100) {
      //   this.$message.error("分润占比总和不能小于100%");
      // } else {
      //   this.$message.error("分润占比总和不能超过100%");
      // }
    },
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
