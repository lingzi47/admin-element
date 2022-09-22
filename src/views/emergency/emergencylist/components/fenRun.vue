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
              >{{ shen }}-{{ shi }}-{{ qu }}-{{ details }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="设备位置:"
              >{{ province }}-{{ city }}-{{ area }}-{{ big_name }}-{{ name }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="收益时长:">{{ time }} </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="租赁服务日期:"
              >{{ created_at }}-- {{ due_time }}
              <!-- <el-date-picker
                :disabled="true"
                style="width: 180px"
                value-format="yyyy-MM-dd HH:mm:ss"
                v-model="due_time"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker> -->
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="通信服务日期:">
              <span v-if="serve_star_time == ''">无</span>
              <span v-else>{{ serve_star_time }}</span>
              --
              <span v-if="serve_end_time == ''">无</span>
              <span v-else>{{ serve_end_time }}</span>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="推荐人设备租赁号:">{{ pid }} </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="设备状态:">{{ deviceStatus }} </el-form-item>
          </el-col>

          <el-col :span="12" v-if="type == 10">
            <el-form-item label="渠道商ID:">公司 </el-form-item>
          </el-col>
          <el-col :span="12" v-else>
            <el-form-item label="渠道商ID:">{{ position_user }} </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="租赁商ID:">{{ uid }} </el-form-item>
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
                :disabled="true"
                v-model="item.start_time"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                style="width: 135px"
                placeholder="选择日期"
              >
              </el-date-picker>
              --
              <el-date-picker
                :disabled="true"
                v-model="item.end_time"
                style="width: 135px"
                value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                placeholder="选择日期"
              >
              </el-date-picker>
              租赁商分润比例:<el-input
                :disabled="true"
                v-model="item.lease_profit"
                style="width: 50px"
              ></el-input
              >%
              <!-- , 渠道商分润比例:<el-input
                :disabled="true"
                v-model="item.channel_profit"
                style="width: 50px"
              ></el-input
              >% -->
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
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
      shen: "",
      shi: "",
      qu: "",
      details: "",
      big_name: "",
      city: "",
      name: "",
      province: "",
      deviceStatus: "",
      share: "",
      box_type: "",
      position_info: "",
      type: "",
      position_user: "",
      created_at: "",
      due_time: "",
      num: "",
      name1: "",
      time: "",
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

    quxiao() {
      this.dialogVisible1 = false;
    },
    close1() {
      this.dialogVisible1 = false;
    },

    show(row) {
      this.dialogVisible = true;

      this.tittle = "查看";
      console.log(row);
      this.deviceStatus = row.deviceStatus;
      this.id = row.id;
      this.huo();
    },
    huo() {
      let params = {
        token: sessionStorage.getItem("token"),
        id: this.id,
      };
      priceedsinfo(params).then((res) => {
        console.log(res.data.data);
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
        this.shen = res.data.data.position_info.province;
        this.shi = res.data.data.position_info.city;
        this.qu = res.data.data.position_info.area;
        this.details = res.data.data.position_info.details;
        this.time = res.data.data.position_info.time;
        this.share = res.data.data.officina.share;
        this.total_profit = res.data.data.officina.total_profit;
        this.list = res.data.data.proceeds;
      });
    },
    close() {
      this.dialogVisible = false;
      this.province = "";
      this.city = "";
      this.area = "";
      this.time = "";
      this.big_name = "";
      this.name = "";
      this.uid = "";
      this.name1 = "";
      this.use_pid = "";
      this.box_type = "";
      this.created_at = "";
      this.due_time = "";
      this.serve_star_time = "";
      this.serve_end_time = "";
      this.num = "";
      this.position_user = "";
      this.type = "";
      this.share = "";
      this.total_profit = "";
      this.list = "";
      this.deviceStatus = "";
      this.id = "";
      this.shen = "";
      this.shi = "";
      this.qu = "";
      this.details = "";
    },
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
