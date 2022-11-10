<template>
  <div class="user">
    <p class="text">用户详情</p>
    <p class="text1">详情信息</p>
    <table border="1">
      <tr>
        <th style="width: 400px" align="center">pk值</th>
        <th style="width: 200px" align="center">{{ pk_value }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="pk">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">pk值等级</th>
        <th style="width: 200px" align="center">{{ pk_v }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="ding">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">钻石</th>
        <th style="width: 200px" align="center">{{ diamonds }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="zushi">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">代金券</th>
        <th style="width: 200px" align="center">{{ coup_sum }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="dai">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">充值金额</th>
        <th style="width: 200px" align="center">{{ diamonds_sum }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="pay">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">消费金额</th>
        <th style="width: 300px" align="center">{{ pay_sum }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="dol">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">钻石抽奖次数</th>
        <th style="width: 200px" align="center">{{ luck_draw }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="chou">查看</el-tag>
        </th> -->
      </tr>
      <tr>
        <th style="width: 400px" align="center">订单数</th>
        <th style="width: 200px" align="center">{{ order_sum }}</th>
        <!-- <th style="width: 200px" align="center">
          <el-tag type="success" @click="ding">查看</el-tag>
        </th> -->
      </tr>
    </table>
    <!-- pk值弹窗 -->
    <el-dialog
      title="pk值"
      :visible.sync="pkshow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="来源"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="pk值"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 钻石弹窗 -->
    <el-dialog
      title="钻石"
      :visible.sync="zuanshow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="来源"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="钻石"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 代金券弹窗 -->
    <el-dialog
      title="代金券"
      :visible.sync="daishow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="5">
            <el-form-item label="来源"></el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="代金券数量"></el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="合计"></el-form-item>
          </el-col>
          <el-col :span="4">
            <el-form-item label="状态"></el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item label="时间"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 充值金额弹窗 -->
    <el-dialog
      title="充值金额"
      :visible.sync="payshow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="花费金额"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="充值钻石"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 消费金额弹窗 -->
    <el-dialog
      title="消费金额"
      :visible.sync="dolshow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="消费金额"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="消费事件"></el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="时间"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 钻石弹窗 -->
    <el-dialog
      title="钻石抽奖次数"
      :visible.sync="choushow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="次数"></el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="消耗钻石"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <!-- 订单数弹窗 -->
    <el-dialog
      title="订单数"
      :visible.sync="dingshow"
      width="800px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="已完成订单"></el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="未支付订单数"></el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="退款订单数"></el-form-item>
          </el-col>
          <el-col :span="18">
            <el-form-item label="总订单数"></el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { userinfo, userZisu, userStart, userBlm } from "@/request/api";
export default {
  name: "user",

  data() {
    return {
      id: "",
      coup_sum: "",
      diamonds: "",
      diamonds_sum: "",
      luck_draw: "",
      order_sum: "",
      pay_sum: "",
      pk_v: "",
      pk_value: "",
      pkshow: false,
      zuanshow: false,
      daishow: false,
      payshow: false,
      dolshow: false,
      choushow: false,
      dingshow: false,
    };
  },
  created() {
    this.id = this.$route.query.id;
    this.getUserList(); //获取用户列表
  },

  mounted() {},
  computed: {},
  methods: {
    getUserList() {
      let id = this.id;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      userinfo(params, id).then((res) => {
        this.coup_sum = res.data.data.coup_sum;
        this.diamonds = res.data.data.diamonds;
        this.diamonds_sum = res.data.data.diamonds_sum;
        this.luck_draw = res.data.data.luck_draw;
        this.order_sum = res.data.data.order_sum;
        this.pay_sum = res.data.data.pay_sum;
        this.pk_value = res.data.data.pk_value;
        this.pk_v = res.data.data.pk_v;
      });
    },
    pk() {
      this.pkshow = true;
    },
    zushi() {
      this.zuanshow = true;
    },
    dai() {
      this.daishow = true;
    },
    pay() {
      this.payshow = true;
    },
    dol() {
      this.dolshow = true;
    },
    chou() {
      this.choushow = true;
    },
    ding() {
      this.dingshow = true;
    },
    close() {
      this.pkshow = false;
      this.zuanshow = false;
      this.daishow = false;
      this.payshow = false;
      this.dolshow = false;
      this.choushow = false;
      this.dingshow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  color: rgb(90, 89, 89);
  font-size: 14px;
  margin-left: 20px;
  margin-top: 20px;
}
.text1 {
  color: rgb(90, 89, 89);
  font-size: 14px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

table {
  border-collapse: collapse;
  text-align: center;
}
table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 40px;
  font-size: 13px;
}
table thead th {
  background-color: #cce8eb;
  width: 100px;
}
table tr:nth-child(odd) {
  background: #fff;
}
table tr:nth-child(even) {
  background: #f5fafa;
}
</style>
