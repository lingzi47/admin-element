<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="this.typeid == 1 ? '绑定' : '修改绑定'"
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
            <el-form-item label="点位位置">
              {{ province }}-{{ city }}-{{ area }}-{{ details }}
            </el-form-item>
          </el-col>
          <!-- <el-col :span="10">
            <el-form-item label="点位详细位置">
              {{ province }}
            </el-form-item>
          </el-col> -->
          <el-col :span="24">
            <el-form-item label="点位截止日期">
              {{ create_time }}--{{ due_time }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="点位来源:"> {{ type }}</el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="渠道商id:">{{ position_user }} </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备编号:" prop="box_number">
              <el-input
                v-model="goodsForm.box_number"
                style="width: 180px"
                placeholder="请输入设备编号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备租赁号:" prop="box_name">
              <el-input
                :disabled="disable"
                v-model="goodsForm.box_name"
                style="width: 180px"
                placeholder="请输入设备租赁号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="绑定设备供货药房:" prop="value1">
              <el-cascader
                style="width: 250px"
                v-model="value1"
                :options="areaArr"
                :props="{ value: 'name', label: 'name' }"
                placeholder="请选择省市区"
                filterable
                @change="change"
              ></el-cascader>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item prop="officina_id">
              <el-select
                v-model="name"
                placeholder="请选择药房"
                style="width: 150px"
                clearable
                @change="change1"
              >
                <el-option
                  v-for="item in list"
                  :value="item.big_name"
                  :key="item.big_name"
                  :label="item.big_name"
                ></el-option>
              </el-select>
              <el-select
                v-model="goodsForm.officina_id"
                placeholder="请选择药房"
                style="width: 150px"
                clearable
                @change="chan"
              >
                <el-option
                  v-for="item in list1"
                  :value="item.id"
                  :key="item.id"
                  :label="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="绑定分润:"></el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item
              label="渠道商:"
              style="margin-left: -60px"
            ></el-form-item>
          </el-col>
          <el-col
            v-if="type == '渠道商'"
            style="margin-left: -50px; margin-top: -61px"
            :span="24"
          >
            <el-form-item v-for="(v, k) in position" :key="k" prop="tel">
              <span>账号{{ k + 1 }}</span>
              绑定身份:
              <el-input
                v-model="v.name"
                style="width: 80px"
                placeholder="请输入"
              ></el-input>
              绑定id:
              <el-input
                v-model="v.uid"
                style="width: 80px"
                placeholder="请输入"
              ></el-input>

              分润占比:
              <el-input
                v-model="v.value"
                style="width: 80px"
                placeholder="请输入"
              ></el-input
              >%
              <el-button
                type="primary"
                style="margin-left: 10px"
                size="mini"
                v-if="k == position.length - 1"
                @click="insert"
                >+</el-button
              >
              <el-button
                type="danger"
                size="mini"
                v-if="k !== 0 && k == position.length - 1"
                @click="remove(k)"
                >-</el-button
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
import { goodsadd, officinalist, bind, bindedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      goodsForm: {
        box_name: "",
        box_number: "",
        officina_id: "",
        bind_id: "",
      },
      due_time: "",
      token: "",
      province1: "",
      disable: false,
      city1: "",
      area1: "",
      province: "",
      city: "",
      area: "",
      name: "",
      officinaprovince: "",
      officinacity: "",
      officinaarea: "",

      type: "",
      details: "",
      create_time: "",
      position: [{ id: "", name: "", uid: "", value: "" }],
      user: { id: "", uid: "", name: "", value: "" },
      list: [],
      list1: [],
      value1: "",
      typeid: "",
      position_user: "",
      sum: "",
      type: "", //1新增，2编辑
      dialogVisible: false,

      uid: "",

      rules: {
        box_name: [
          { required: true, message: "请输入设备租赁号", trigger: "blur" },
        ],
        box_number: [
          { required: true, message: "请输入设备编号", trigger: "blur" },
        ],
        officina_id: [
          { required: true, message: "请选择药房", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  watch: {
    name(newVal) {
      // console.log(newVal);
      this.huolist1();
    },
  },
  mounted() {},
  methods: {
    insert() {
      this.user = { id: "", name: "", uid: "", value: "" };
      this.position.push(this.user);
    },
    remove(index) {
      this.position.splice(index, 1);
    },
    huolist1() {
      let params = {
        //big_name 改4
        token: sessionStorage.getItem("token"),
        big_name: this.name,
        province: this.province1,
        city: this.city1,
        area: this.area1,
      };
      officinalist(params).then((res) => {
        console.log(res.data.data);
        this.list1 = res.data.data;
      });
    },
    setData(data) {
      data.map((item) => {
        item["value"] = item.code;
        item["label"] = item.name;
        if (item.children) {
          this.setData(item.children);
        }
      });
    },
    chan(id) {
      console.log(id);
      console.log(this.list1.findIndex((item) => item.id == id));
      let index = this.list1.findIndex((item) => item.id == id);
      console.log(index);
      console.log(this.list1[index]);
      let obj = this.list1[index];
      this.sum = String(obj.total_profit);
      // console.log(this.sum);
    },
    change1(data) {
      console.log(data);
      this.goodsForm.officina_id = "";
    },
    change(data) {
      console.log(data);
      this.province1 = data[0];
      this.city1 = data[1];
      this.area1 = data[2];
      this.name = "";
      this.goodsForm.officina_id = "";
      this.get();
    },
    get() {
      let params = {
        token: sessionStorage.getItem("token"),
        province: this.province1,
        city: this.city1,
        area: this.area1,
      };
      officinalist(params).then((res) => {
        // console.log(res.data.data);
        this.list = res.data.data;
      });
    },
    show(type, row) {
      console.log(type);
      this.typeid = type;
      console.log(row);
      console.log(row.total_profit);

      if (row.type == 20) {
        this.type = "渠道商";
        this.position = row.position;
      } else {
        this.type = "公司";
      }
      this.province = row.province;
      this.city = row.city;
      this.create_time = row.create_time;

      this.area = row.area;
      this.due_time = row.due_time;
      this.dialogVisible = true;
      this.id = row.id;
      this.details = row.details;
      this.position_user = row.position_user;
      if (this.typeid == 1) {
        this.disable = false;
      } else {
        this.disable = true;
        this.goodsForm.box_name = row.box_name;
        this.due_time = row.due_time;
        this.goodsForm.bind_id = row.bind_id;
        this.goodsForm.box_number = row.box_number;
        this.id = row.id;
        this.name = row.big_name;
        this.position = row.position;

        this.goodsForm.officina_id = String(row.officina_id);
        this.sum = String(row.total_profit);

        let arr1 = [];
        arr1.push(row.yaoprovince);
        arr1.push(row.yaocity);
        arr1.push(row.yaoarea);
        this.officinaprovince = row.yaoprovince;
        this.officinacity = row.yaocity;
        this.officinaarea = row.yaoarea;
        console.log(arr1);
        this.value1 = arr1;

        let params = {
          token: sessionStorage.getItem("token"),
          province: this.officinaprovince,
          city: this.officinacity,
          area: this.officinaarea,
        };
        officinalist(params).then((res) => {
          // console.log(res.data.data);
          this.list = res.data.data;
        });
      }
    },
    close() {
      this.dialogVisible = false;
      this.goodsForm.box_name = "";
      this.goodsForm.box_number = "";
      this.value1 = "";
      this.goodsForm.officina_id = "";
      this.list = [];
      this.list1 = [];
      this.name = "";
      this.position = [{ id: "", uid: "", name: "", value: "" }];
    },
    checked() {
      console.log(11);
    },
    go() {
      this.$router.back();
    },
    submitForm() {
      if (this.typeid == 1) {
        this.$refs.goodsForm.validate(async (valid) => {
          if (valid) {
            let sum = 0;
            this.position.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum += Number(item.value);
            });
            console.log(sum);
            if (sum > this.sum) {
              this.$message.error("分润占比超过最大");
              return;
            }
            var that = this;
            let flag = that.position.every((item) => !!item.uid);
            let flag1 = that.position.every((item) => !!item.name);
            let flag2 = that.position.every((item) => !!item.value);
            if (!flag) {
              this.$message.error("绑定id不能为空");
              return;
            }
            if (!flag1) {
              this.$message.error("绑定身份不能为空");
              return;
            }
            if (!flag2) {
              this.$message.error("分润占比不能为空");
              return;
            }
            // var formdata = this.position;
            // let json = JSON.stringify(formdata);
            // console.log(json);
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              box_name: this.goodsForm.box_name,
              box_number: this.goodsForm.box_number,
              position_id: this.id,
              officina_id: this.goodsForm.officina_id,
              position: this.position,
            };
            bind(params).then((res) => {
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
          } else {
            return false;
          }
        });
      } else {
        this.$refs.goodsForm.validate(async (valid) => {
          if (valid) {
            let sum = 0;
            this.position.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum += Number(item.value);
            });
            console.log(sum);
            console.log(this.sum);
            if (sum > this.sum) {
              this.$message.error("分润占比超过最大");
              return;
            }
            var that = this;
            let flag = that.position.every((item) => !!item.uid);
            let flag1 = that.position.every((item) => !!item.name);
            let flag2 = that.position.every((item) => !!item.value);
            if (!flag) {
              this.$message.error("绑定id不能为空");
              return;
            }
            if (!flag1) {
              this.$message.error("绑定身份不能为空");
              return;
            }
            if (!flag2) {
              this.$message.error("分润占比不能为空");
              return;
            }
            // var formdata = this.position;
            // let json = JSON.stringify(formdata);
            // console.log(json);
            let token = sessionStorage.getItem("token");
            this.token = token;
            let params = {
              token: sessionStorage.getItem("token"),
              box_name: this.goodsForm.box_name,
              box_number: this.goodsForm.box_number,
              position_id: this.id,
              id: this.goodsForm.bind_id,
              officina_id: this.goodsForm.officina_id,
              position: this.position,
            };
            bindedit(params).then((res) => {
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
.xian {
  margin-left: -75px !important;
}
</style>
