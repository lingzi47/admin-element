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
            <el-form-item label="位置" prop="value1">
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
            <el-form-item label="小区名" prop="name">
              <el-input
                v-model="ruleForm.name"
                style="width: 180px"
                placeholder="请输入小区名"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="物业" prop="property">
              <el-input
                v-model="ruleForm.property"
                style="width: 180px"
                placeholder="请输入物业"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="设备数" prop="num">
              <el-input
                v-model="ruleForm.num"
                style="width: 180px"
                placeholder="请输入设备数"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="经纬度" prop="position">
              <el-input
                v-model="ruleForm.position"
                style="width: 180px"
                placeholder="请输入经纬度"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="状态" prop="status">
              <el-select
                v-model="ruleForm.status"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="已安装" value="10"></el-option>
                <el-option label="待安装" value="20"></el-option>
                <el-option label="待查验" value="30"></el-option>
              </el-select>
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
import { propertyadd, propertyedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",

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
        value1: [],

        name: "",
        property: "",
        status: "",
        position: "",
        num: "",
      },
      rules: {
        value1: [{ required: true, message: "请选择省市区", trigger: "blur" }],
        property: [{ required: true, message: "请输入物业", trigger: "blur" }],
        num: [{ required: true, message: "请输入数量", trigger: "blur" }],
        name: [{ required: true, message: "请输入小区名", trigger: "blur" }],
        status: [{ required: true, message: "请选择状态", trigger: "blur" }],
        position: [
          { required: true, message: "请输入经纬度", trigger: "blur" },
        ],
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

        this.ruleForm.name = row.name;
        this.ruleForm.property = row.property;
        this.ruleForm.status = row.status;
        this.ruleForm.position = row.position;
        this.ruleForm.num = row.num;

        let arr1 = [];
        arr1.push(row.province);
        arr1.push(row.city);
        arr1.push(row.area);

        console.log(arr1);
        this.ruleForm.value1 = arr1;
        console.log(this.ruleForm.value1);
      } else {
        this.tittle = "添加";
      }
    },

    close() {
      this.dialogVisible = false;

      this.ruleForm.name = "";
      this.ruleForm.property = "";
      this.ruleForm.status = "";
      this.ruleForm.position = "";
      this.ruleForm.num = "";

      this.isDisable = false;

      this.ruleForm.value1 = "";
    },

    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              num: this.ruleForm.num,

              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              property: this.ruleForm.property,
              status: this.ruleForm.status,
              position: this.ruleForm.position,
              province: this.ruleForm.value1[0],
              city: this.ruleForm.value1[1],
              area: this.ruleForm.value1[2],
            };
            propertyadd(params).then((res) => {
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
              num: this.ruleForm.num,
              id: this.id,
              token: sessionStorage.getItem("token"),
              name: this.ruleForm.name,
              property: this.ruleForm.property,
              status: this.ruleForm.status,
              position: this.ruleForm.position,
              province: this.ruleForm.value1[0],
              city: this.ruleForm.value1[1],
              area: this.ruleForm.value1[2],
            };
            propertyedit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
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

<style>
.yao {
  margin-left: -75px !important;
}
</style>
