<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="新增"
      :visible.sync="dialogVisible"
      width="1000px"
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
        <el-row :gutter="25">
          <el-col :span="20">
            <el-form-item label="购买类型" prop="type">
              <el-select
                v-model="ruleForm.type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="单人购买" value="1"></el-option>
                <el-option label="多人购买" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="推荐人设备租赁号" prop="pid">
              <el-input
                v-model="ruleForm.pid"
                :disabled="isDisable"
                style="width: 180px"
                placeholder="请输入设备租赁号"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item class="xian">
              <el-checkbox v-model="check" @change="checked"
                >无推荐人</el-checkbox
              >
            </el-form-item></el-col
          >
          <el-col :span="24" v-if="ruleForm.pid !== 0">
            <el-form-item label="推荐人id" prop="use_pid">
              <el-select
                v-model="ruleForm.use_pid"
                clearable
                style="width: 230px"
                filterable
                placeholder="请选择推荐人id"
              >
                <el-option
                  v-for="item in arr"
                  :value="item.uid"
                  :label="item.uid"
                  :key="item.uid"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="租赁商id" prop="uid" v-if="ruleForm.type == 1">
              <el-input
                v-model="ruleForm.uid"
                style="width: 180px"
                placeholder="请输入租赁人用户id"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item
              label="租赁人手机号"
              prop="tel"
              v-if="ruleForm.type == 1"
            >
              <el-input
                v-model="ruleForm.tel"
                style="width: 180px"
                placeholder="请输入租赁人手机号"
              ></el-input>
            </el-form-item>
          </el-col>
          <!-- <el-col v-if="ruleForm.type == 2">
            <el-form-item label="主账号:">
              租赁商id:
              <el-input
                v-model="ruleForm.uid"
                style="width: 100px"
                placeholder="请输入"
              ></el-input>
              分润占比:
              <el-input
                v-model="ruleForm.bl"
                style="width: 100px"
                placeholder="请输入"
              ></el-input>
              手机号:
              <el-input
                v-model="ruleForm.tel"
                style="width: 150px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col> -->
          <el-col v-if="ruleForm.type == 2" style="margin-left: -57px">
            <el-form-item v-for="(v, k) in list" :key="k" prop="tel">
              <span>账号{{ k + 1 }}</span>
              租赁商id:
              <el-input
                v-model="v.uid"
                style="width: 100px"
                placeholder="请输入"
              ></el-input>
              分润占比:
              <el-select
                v-model="v.bl"
                placeholder="请选择"
                style="width: 100px"
              >
                <el-option label="12.5%" value="12.5"></el-option>
                <el-option label="25%" value="25"></el-option>
                <el-option label="50%" value="50"></el-option>
              </el-select>

              手机号:
              <el-input
                @blur="checkRight(v)"
                v-model="v.tel"
                style="width: 150px"
                placeholder="请输入"
              ></el-input>
              <el-button
                type="primary"
                style="margin-left: 10px"
                size="mini"
                v-if="k == list.length - 1 && k <= 6"
                @click="insert"
                >+</el-button
              >
              <el-button
                type="danger"
                size="mini"
                v-if="k !== 1 && k == list.length - 1"
                @click="remove(k)"
                >-</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="20">
            <el-form-item label="购买服务" prop="box_type">
              <el-select
                v-model="ruleForm.box_type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="三年" value="1"></el-option>
                <el-option label="五年" value="2"></el-option>
                <el-option label="终身" value="3"></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="20">
            <el-form-item label="是否真实购买" prop="device_type">
              <el-select
                v-model="ruleForm.device_type"
                placeholder="请选择"
                style="width: 150px"
              >
                <el-option label="是" value="10"></el-option>
                <el-option label="否" value="20"></el-option>
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
import {
  addbox,
  doctoradd,
  goodseditshow,
  goodsedit,
  chooseboxuid,
} from "@/request/api";
export default {
  name: "AddDialog",
  components: {},
  data() {
    return {
      id: "",
      check: false,
      token: "",
      arr: [],
      uid: "",
      bl: "",
      kshow: true,
      tel: "",
      isDisable: false,
      type: "", //1新增，2编辑
      dialogVisible: false,
      list: [
        { uid: "", tel: "", bl: "" },
        { uid: "", tel: "", bl: "" },
      ],
      user: { uid: "", tel: "", bl: "" },
      ruleForm: {
        uid: "",
        tel: "",
        use_pid: "",
        type: "",

        box_type: "",
        device_type: "",
        pid: "",
      },
      rules: {
        type: [{ required: true, message: "请选择购买类型", trigger: "blur" }],
        use_pid: [
          { required: true, message: "请选择推荐人id", trigger: "blur" },
        ],
        uid: [
          { required: true, message: "请输入租赁人用户id", trigger: "blur" },
        ],
        tel: [
          { required: false, message: "请输入租赁人手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        box_type: [
          { required: true, message: "请选择购买服务", trigger: "blur" },
        ],
        device_type: [
          { required: true, message: "请选择是否真实购买", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请输入设备租赁号", trigger: "blur" }],
      },
    };
  },
  watch: {
    "ruleForm.pid"(newVal) {
      console.log(newVal);
      this.huoopin();
    },
  },
  created() {},
  mounted() {},
  methods: {
    checkRight(v) {
      console.log(v);
      const tel = v.tel;
      var reg = /^1[3456789]\d{9}$/;
      console.log(reg.test(tel));
      if (reg.test(tel) == false) {
        this.$message.error("手机号错误");
      }
    },
    insert() {
      this.user = { uid: "", tel: "", bl: "" };
      this.list.push(this.user);
    },
    remove(index) {
      this.list.splice(index, 1);
    },
    huoopin() {
      let params = {
        token: sessionStorage.getItem("token"),
        name: this.ruleForm.pid,
      };
      chooseboxuid(params).then((res) => {
        console.log(res.data.data);
        this.arr = res.data.data;
      });
    },
    show(type, row) {
      this.dialogVisible = true;
    },
    close() {
      this.dialogVisible = false;
      this.ruleForm.pid = "";
      this.ruleForm.use_pid = "";
      this.ruleForm.tel = "";
      this.ruleForm.box_type = "";
      this.list = [
        { uid: "", tel: "", bl: "" },
        { uid: "", tel: "", bl: "" },
      ];
      this.ruleForm.uid = "";
      this.ruleForm.device_type = "";
      this.isDisable = false;

      this.check = false;
    },
    checked(events) {
      // console.log(events);
      this.events = events;
      if (events == true) {
        this.isDisable = true;
        this.ruleForm.pid = 0;
      } else {
        this.isDisable = false;
        this.ruleForm.pid = "";
      }
      //
      // console.log("被禁言");
      // this.ruleForm.uid = 0;
    },
    go() {
      this.$router.go(-1);
    },

    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.ruleForm.type == 1) {
            //单人
            let params = {
              token: sessionStorage.getItem("token"),
              uid: this.ruleForm.uid,
              tel: this.ruleForm.tel,
              box_type: this.ruleForm.box_type,
              pid: this.ruleForm.pid,
              use_pid: this.ruleForm.use_pid,
              device_type: this.ruleForm.device_type,
              str: this.ruleForm.uid
                .concat(",")
                .concat(this.ruleForm.tel)
                .concat(",")
                .concat(100),
            };
            addbox(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();

                this.isDisable = false;
                this.check = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
                this.check = false;
              }
            });
          } else {
            //多人
            console.log(this.list);
            var that = this;
            let flag = that.list.every((item) => !!item.uid);
            let flag1 = that.list.every((item) => !!item.tel);
            let flag2 = that.list.every((item) => !!item.bl);
            if (!flag) {
              this.$message.error("租赁商id不能为空");
              return;
            } else if (!flag1) {
              this.$message.error("手机号不能为空");
              return;
            } else if (!flag2) {
              this.$message.error("分润占比不能为空");
              return;
            }

            //定义
            let sum = 0;
            this.list.forEach((item) => {
              //遍历prodAllPrice这个字段，并累加
              sum += Number(item.bl);
            });
            //返回

            console.log(sum);
            if (sum === 100) {
              let res = "";
              for (let i = 0; i < this.list.length; i++) {
                res +=
                  this.list[i].uid +
                  "," +
                  this.list[i].tel +
                  "," +
                  this.list[i].bl +
                  "&&";
              }
              console.log(res);
              const str = res.substring(0, res.length - 2);
              console.log("结果是---->", str);
              let params = {
                token: sessionStorage.getItem("token"),
                uid: this.list[0].uid,
                tel: this.list[0].tel,
                box_type: this.ruleForm.box_type,
                pid: this.ruleForm.pid,
                use_pid: this.ruleForm.use_pid,
                device_type: this.ruleForm.device_type,
                str: str,
              };
              addbox(params).then((res) => {
                if (res.data.code == 200) {
                  this.$message.success("新增成功");
                  this.$parent.getUserList();
                  this.close();
                  this.isDisable = false;
                  this.check = false;
                } else {
                  this.$message.error(res.data.msg);
                  this.$parent.getUserList();
                  this.close();

                  this.isDisable = false;
                  this.check = false;
                }
              });
            } else if (sum <= 100) {
              this.$message.error("分润占比总和不能小于100%");
            } else {
              this.$message.error("分润占比总和不能超过100%");
            }
          }
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
