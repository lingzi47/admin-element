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
          <el-col :span="20">
            <el-form-item label="点位位置" prop="value1">
              <el-cascader
                style="width: 250px"
                v-model="ruleForm.value1"
                :options="areaArr"
                :props="{ value: 'name', label: 'name' }"
                placeholder="请选择省市区"
                filterable
                @change="change"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="点位详细位置" prop="details">
              <el-input
                v-model="ruleForm.details"
                style="width: 180px"
                placeholder="请输入点位详细位置"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="10">
            <el-form-item label="点位来源" prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择"
                style="width: 150px"
                @change="change1"
              >
                <el-option label="公司" value="10"></el-option>
                <el-option label="渠道商" value="20"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="点位到期时间" prop="year">
              <el-date-picker
                style="width: 200px"
                v-model="ruleForm.year"
                :disabled="isDisable"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="datetime"
                placeholder="选择日期时间"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item class="xian1">
              <el-checkbox v-model="check" @change="checked"
                >无期限</el-checkbox
              >
            </el-form-item></el-col
          >
          <el-col :span="24">
            <el-form-item
              label="渠道商id:"
              prop="position_user"
              v-if="this.ruleForm.type == 20"
            >
              <el-input
                v-model="ruleForm.position_user"
                style="width: 180px"
                placeholder="请输入渠道商id"
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
import { positionadd, positionedit, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      check: false,
      token: "",
      isDisable: false,
      tittle: "",
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
      province: "",
      type: "",
      city: "",
      id: "",
      area: "",
      type: "", //1新增，2编辑
      dialogVisible: false,
      ruleForm: {
        value1: "",
        type: "",
        year: "",
        position_user: "",
        details: "",
      },
      rules: {
        year: [
          { required: true, message: "请选择点位到期时间", trigger: "blur" },
        ],
        value1: [{ required: true, message: "请选择省市区", trigger: "blur" }],

        details: [
          { required: true, message: "请输入详情信息", trigger: "blur" },
        ],
        position_user: [
          { required: true, message: "请输入渠道商id", trigger: "blur" },
        ],
        type: [{ required: true, message: "请选择点位来源", trigger: "blur" }],
      },
    };
  },
  created() {
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  methods: {
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },
    change1(val) {
      console.log(val);
      if (val == 10) {
        this.isDisable = true;
        this.ruleForm.year = "2099-01-01 00:00:00";
        console.log(this.ruleForm.year);
      } else {
        console.log(this.ruleForm.year);
        this.isDisable = false;
        this.ruleForm.year = "";
      }
    },
    checked(events) {
      // console.log(events);
      this.events = events;
      if (events == true) {
        if (this.ruleForm.type == 10) {
          this.isDisable = true;
          this.ruleForm.year = "2099-01-01 00:00:00";
        } else {
          this.isDisable = true;
          this.ruleForm.year = "2099-01-01 00:00:00";
        }
      } else {
        if (this.ruleForm.type == 10) {
          this.isDisable = true;
          this.ruleForm.year = "2099-01-01 00:00:00";
        } else {
          this.isDisable = false;
          this.ruleForm.year = "";
        }
      }
      //
      // console.log("被禁言");
      // this.ruleForm.uid = 0;
    },
    change(data) {
      console.log(data);
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
    },
    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        console.log(row);
        this.id = row.id;

        this.ruleForm.type = row.type;
        this.ruleForm.year = row.due_time;
        this.ruleForm.details = row.details;
        // this.ruleForm.value1 = "";
        if (row.due_time == "2099-01-01 00:00:00") {
          this.isDisable = true;
          this.ruleForm.year = row.due_time;
          this.ruleForm.position_user = row.position_user;
          this.check = true;
          console.log("被选中");
        } else {
          console.log(111);
          this.ruleForm.position_user = row.position_user;
          this.ruleForm.year = row.due_time;
        }
        let arr1 = [];
        arr1.push(row.province);
        arr1.push(row.city);
        arr1.push(row.area);
        this.province = row.province;
        this.city = row.city;
        this.area = row.area;
        console.log(arr1);
        this.ruleForm.value1 = arr1;
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;
      this.ruleForm.type = "";
      this.ruleForm.position_user = "";
      this.ruleForm.year = "";
      this.ruleForm.details = "";
      this.isDisable = false;
      this.check = false;
      this.ruleForm.value1 = "";
    },

    submitForm() {
      console.log(this.ruleForm.year);
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              position_user: this.ruleForm.position_user,
              type: this.ruleForm.type,
              due_time: this.ruleForm.year,
              token: sessionStorage.getItem("token"),
              details: this.ruleForm.details,
              province: this.province,
              city: this.city,
              area: this.area,
            };
            positionadd(params).then((res) => {
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
          } else {
            return false;
          }
        });
      } else {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              position_user: this.ruleForm.position_user,
              type: this.ruleForm.type,
              due_time: this.ruleForm.year,
              token: sessionStorage.getItem("token"),
              details: this.ruleForm.details,
              province: this.province,
              city: this.city,
              area: this.area,
              id: this.id,
            };
            positionedit(params).then((res) => {
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
          } else {
            return false;
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.xian1 {
  margin-left: -55px !important;
}
</style>
