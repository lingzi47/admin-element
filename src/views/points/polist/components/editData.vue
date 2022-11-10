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
          <el-col :span="20">
            <el-form-item label="点位位置">
              <el-input
                v-model="shop_name"
                style="width: 180px"
                placeholder="请输入点位位置"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="点位位置">
              <el-input
                v-model="shop_name"
                style="width: 180px"
                placeholder="请输入点位位置"
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
      property: "",
      exclude: "",
      house: "",
      medical: "",
      shop: "",
      shop_name: "",
      school: "",
      build: "",
      house_num: "",
      households: "",
      peopleall: "",
      house_price: "",
      remarks: "",
      check: false,
      token: "",
      isDisable: false,
      tittle: "",
      id: "",
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

    change(data) {
      console.log(data);
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
    },
    show(type, row) {
      this.dialogVisible = true;
      this.tittle = "添加";
    },

    close() {
      this.dialogVisible = false;
    },

    submitForm() {
      let params = {
        token: sessionStorage.getItem("token"),

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
    },
  },
};
</script>

<style lang="scss" scoped>
.xian1 {
  margin-left: -48px !important;
}
</style>
