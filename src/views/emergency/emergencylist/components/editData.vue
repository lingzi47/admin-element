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
      <el-form :model="ruleForm" ref="ruleForm">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="设备编号:"> {{ num }}</el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="设备供货药房:"
              >{{ province }}-{{ city }}-{{ area }}-{{ big_name }}-{{ name }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="租赁服务日期:"
              >{{ created_at }}--
              <el-date-picker
                style="width: 180px"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="due_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="通信服务日期:"
              >{{ serve_star_time }}--
              {{ serve_end_time }}
              <!-- <el-date-picker
                style="width: 180px"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="serve_end_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="推荐人设备租赁号:">{{ pid }} </el-form-item>
          </el-col>

          <el-col :span="12" v-if="type == 10">
            <el-form-item label="渠道商ID:">公司 </el-form-item>
          </el-col>
          <el-col :span="12" v-else>
            <el-form-item label="渠道商ID:">{{ use_pid }} </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="租赁商ID:"
              >{{ uid }}
              <!-- <el-button type="primary" @click="zhuan">转让</el-button> -->
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备租赁号:">{{ name1 }} </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="分润设置:">
              <span v-if="share == 10"
                >设备总流水的{{ total_profit }}%进行分润</span
              >
              <span v-if="share == 20"
                >药品售卖差价的{{ total_profit }}%进行分润</span
              >
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="分润比例设置:"> </el-form-item>
          </el-col>

          <el-col :span="24" v-for="(item, index) in list" :key="index">
            <el-form-item
              >日期{{ index + 1 }}
              <el-date-picker
                v-model="item.start_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                style="width: 135px"
                placeholder="选择日期"
              >
              </el-date-picker>
              --
              <el-date-picker
                v-model="item.end_time"
                style="width: 135px"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              租赁商分润比例:<el-input
                v-model="item.lease_profit"
                style="width: 80px"
              ></el-input
              >%
              <!-- , 渠道商分润比例:<el-input
                v-model="item.channel_profit"
                style="width: 80px"
              ></el-input
              >% -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      class="AddDialog"
      title="转让"
      :visible.sync="dialogVisible1"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close1"
    >
      <el-form
        :rules="rules"
        label-width="auto"
        :model="goodsForm"
        ref="goodsForm"
      >
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="租赁商ID:">
              <el-input
                v-model="uid"
                style="width: 180px"
                placeholder="请输入租赁商ID"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="quxiao">取 消</el-button>
        <el-button type="primary" @click="submitForm1">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { boxset, priceedsinfo, goodsedit } from "@/request/api";
import { areaListData } from "@/utils/area";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      area: "",
      big_name: "",
      city: "",
      name: "",
      province: "",
      share: "",
      box_type: "",
      position_info: "",
      type: "",
      created_at: "",
      due_time: "",
      num: "",
      name1: "",
      pid: "",
      serve_end_time: "",
      serve_star_time: "",
      uid: "",
      use_pid: "",
      goodsForm: {
        box_number: "",
      },
      list: [],

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
      ruleForm: {
        value1: "",
        type: "",
        number: "",
        box_key: "",
        deviceIemi: "",
      },
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

    show(type, row) {
      this.dialogVisible = true;
      this.type = type;
      if (this.type == 2) {
        this.tittle = "编辑";
        this.id = row.id;
        this.huo();
      } else {
        this.tittle = "添加";
      }
    },
    huo() {
      let params = {
        token: sessionStorage.getItem("token"),
        id: this.id,
      };
      priceedsinfo(params).then((res) => {
        this.province = res.data.data.officina.province;
        this.city = res.data.data.officina.city;
        this.area = res.data.data.officina.area;
        this.big_name = res.data.data.officina.big_name;
        this.name = res.data.data.officina.name;
        this.uid = res.data.data.usehave.uid;
        this.name1 = res.data.data.usehave.name;
        this.use_pid = res.data.data.usehave.use_pid;
        this.box_type = res.data.data.usehave.box_type;
        this.created_at = res.data.data.usehave.created_at;
        this.due_time = res.data.data.usehave.due_time;
        this.serve_star_time = res.data.data.usehave.serve_star_time;
        this.serve_end_time = res.data.data.usehave.serve_end_time;
        this.num = res.data.data.contact.box_number;
        this.position_user = res.data.data.position_info.position_user;
        this.type = res.data.data.position_info.type;
        this.share = res.data.data.officina.share;
        this.total_profit = res.data.data.officina.total_profit;
        this.list = res.data.data.proceeds;
      });
    },
    close() {
      this.dialogVisible = false;
    },

    submitForm() {
      var formdata = this.list;
      let json = JSON.stringify(formdata);
      var that = this;
      let flag = that.list.every((item) => !!item.lease_profit);
      let flag2 = that.list.every((item) => !!item.start_time);
      let flag3 = that.list.every((item) => !!item.end_time);
      if (!flag2) {
        this.$message.error("时间不能为空");
        return;
      } else if (!flag3) {
        this.$message.error("时间不能为空");
        return;
      } else if (!flag) {
        this.$message.error("租赁商分润不能为空");
        return;
      } else {
        let token = sessionStorage.getItem("token");
        this.token = token;
        let params = {
          token: sessionStorage.getItem("token"),
          list: json,
          id: this.id,
          due_time: this.due_time,
          // serve_end_time: this.serve_end_time,
          uid: this.uid,
        };
        boxset(params).then((res) => {
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
