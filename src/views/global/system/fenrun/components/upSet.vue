<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="新增"
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
            <el-form-item label="名称:" prop="name">
              <el-input
                v-model="goodsForm.name"
                style="width: 180px"
                placeholder="请输入名称"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="是否为特殊分润模式:" prop="is_special">
              <el-select
                v-model="goodsForm.is_special"
                placeholder="请选择"
                style="width: 180px"
              >
                <el-option label="是" value="2"></el-option>
                <el-option label="否" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" v-if="goodsForm.is_special == 2">
            <el-form
              :model="skulist"
              ref="skulist"
              label-width="100px"
              class="demo-dynamic"
            >
              <el-form-item
                v-for="(domain, index) in skulist.domains"
                :label="'设备租赁号' + index"
                :key="domain.key"
                :prop="'domains.' + index + '.value'"
              >
                <el-input v-model="domain.value" style="width: 180px"></el-input
                ><el-button @click.prevent="removeDomain(domain)"
                  >删除</el-button
                >
              </el-form-item>
              <el-form-item>
                <el-button @click="addDomain">新增</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <el-col :span="24">
            <el-form-item label="备注:" prop="remark">
              <el-input
                v-model="goodsForm.remark"
                style="width: 180px"
                placeholder="请输入备注"
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
import { boxProfitcreate, BoxProfitdel, bind, bindedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      skulist: {
        domains: [
          {
            value: "",
          },
        ],
        name: "",
      },
      skuList: [], //列表
      goodsForm: {
        name: "",
        is_special: "",
        remark: "",
        device_num: "",
      },
      dialogVisible: false,

      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        is_special: [
          { required: true, message: "请选择是否为特殊分润", trigger: "blur" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    removeDomain(item) {
      var index = this.skulist.domains.indexOf(item);
      if (index !== -1) {
        this.skulist.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.skulist.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    show(type, row) {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.goodsForm.is_special = "";
      this.goodsForm.device_num = "";

      this.goodsForm.remark = "";
    },
    checked() {
      console.log(11);
    },
    go() {
      this.$router.go(-1);
    },
    submitForm() {
      this.$refs.goodsForm.validate(async (valid) => {
        if (valid) {
          console.log(this.skulist.domains);
          const arrs = this.skulist.domains;
          function getNewArr(arrs) {
            let newArr = arrs.map((item) => {
              let curKey = Object.keys(item); //Object.keys可以提取出对象中的key值,注意取出的key是数组
              return item[curKey[0]];
            });
            return newArr;
          }
          let newArr = getNewArr(arrs);
          console.log(newArr); //[ 1, 1, 2 ]
          var device_num = newArr.toString();
          console.log(device_num);
          let token = sessionStorage.getItem("token");
          this.token = token;
          let params = {
            token: sessionStorage.getItem("token"),
            name: this.goodsForm.name,
            is_special: this.goodsForm.is_special,
            device_num: device_num,
            remark: this.goodsForm.remark,
          };
          boxProfitcreate(params).then((res) => {
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
    },
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
