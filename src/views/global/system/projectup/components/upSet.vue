<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="绑定"
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
              {{ create_time }}--{{ year }}
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="点位来源:"> {{ type }}</el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="渠道商id:">{{ position_user }} </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="设备编号:" prop="box_number">
              <el-input
                v-model="goodsForm.box_number"
                style="width: 180px"
                placeholder="请输入设备编号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
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
          <el-col :span="10">
            <el-form-item prop="officina_id">
              <el-select
                v-model="goodsForm.officina_id"
                placeholder="请选择药房"
                style="width: 160px"
                clearable
              >
                <el-option
                  v-for="item in list"
                  :value="item.id"
                  :key="item.id"
                  :label="item.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="设备租赁号:" prop="box_name">
              <el-input
                v-model="goodsForm.box_name"
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
      year: "",
      token: "",
      province: "",
      city: "",
      officinaprovince: "",
      officinacity: "",
      officinaarea: "",
      area: "",
      type: "",
      details: "",
      create_time: "",
      list: [
        // { id: "18", name: "111" },
        // { id: "19", name: "333" },
      ],
      value1: "",
      typeid: "",
      position_user: "",
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
      this.get();
    },
    get() {
      let params = {
        token: sessionStorage.getItem("token"),
        province: this.province,
        city: this.city,
        area: this.area,
      };
      officinalist(params).then((res) => {
        console.log(res.data.data);
        this.list = res.data.data;
      });
    },
    show(type, row) {
      console.log(type);
      this.typeid = type;
      if (row.type == 20) {
        this.type = "渠道商";
      } else {
        this.type = "公司";
      }
      this.province = row.province;
      this.city = row.city;
      this.create_time = row.create_time;
      if (row.year == 999) {
        this.year = "永久";
      } else {
        this.year = row.year;
      }
      this.area = row.area;
      this.dialogVisible = true;
      this.id = row.id;
      this.details = row.details;
      this.position_user = row.position_user;
      if (this.typeid == 1) {
      } else {
        this.goodsForm.box_name = row.box_name;
        this.goodsForm.bind_id = row.bind_id;
        this.goodsForm.box_number = row.box_number;
        this.id = row.id;
        console.log(row.officina_id);
        this.goodsForm.officina_id = String(row.officina_id);
        console.log(this.goodsForm.officina_id);
        console.log(row);
        let arr1 = [];
        arr1.push(row.officinaprovince);
        arr1.push(row.officinacity);
        arr1.push(row.officinaarea);
        this.officinaprovince = row.officinaprovince;
        this.officinacity = row.officinacity;
        this.officinaarea = row.officinaarea;
        console.log(arr1);
        this.value1 = arr1;
        let params = {
          token: sessionStorage.getItem("token"),
          province: this.officinaprovince,
          city: this.officinacity,
          area: this.officinaarea,
        };
        officinalist(params).then((res) => {
          console.log(res.data.data);
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
    },
    checked() {
      console.log(11);
    },
    go() {
      this.$router.go(-1);
    },
    submitForm() {
      if (this.typeid == 1) {
        let token = sessionStorage.getItem("token");
        this.token = token;
        let params = {
          token: sessionStorage.getItem("token"),
          box_name: this.goodsForm.box_name,
          box_number: this.goodsForm.box_number,
          position_id: this.id,
          officina_id: this.goodsForm.officina_id,
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
        let token = sessionStorage.getItem("token");
        this.token = token;
        let params = {
          token: sessionStorage.getItem("token"),
          box_name: this.goodsForm.box_name,
          box_number: this.goodsForm.box_number,
          position_id: this.id,
          id: this.goodsForm.bind_id,
          officina_id: this.goodsForm.officina_id,
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
