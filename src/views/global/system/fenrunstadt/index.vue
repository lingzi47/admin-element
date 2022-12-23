<template>
  <div class="user">
    <el-form :rules="rules" label-width="auto">
      <el-row :gutter="24">
        <el-col :span="24">
          <el-form-item label="名称:" prop="name"> {{ name }}</el-form-item>
        </el-col>

        <el-col :span="24" v-if="is_special == 1">
          <el-form-item label="是否为特殊分润模式:">是 </el-form-item>
        </el-col>
        <el-col :span="24" v-else>
          <el-form-item label="是否为特殊分润模式:">否 </el-form-item>
        </el-col>
        <el-col :span="24" v-if="is_special == 1">
          <el-form-item label="设备租赁号" prop="remark"
            >{{ device_num }}
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="备注:" prop="remark">{{ remark }} </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <!-- <el-button type="primary" plain id="btn" @click="add(id)">新增</el-button> -->
    <el-table :data="third" border style="width: 80%">
      <el-table-column
        prop="level"
        label="用户等级"
        width="100px"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="details" label="三年分润" align="center">
      </el-table-column>
      <!-- <el-table-column label="操作" width="180px" align="center">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="dataedit(scope.row)"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column> -->
    </el-table>
    <!-- <el-button type="primary" plain id="btn" @click="add1(id)">新增</el-button> -->
    <el-table :data="five" border style="width: 80%">
      <el-table-column
        prop="level"
        label="用户等级"
        width="100px"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="details" label="五年分润" align="center">
      </el-table-column>
      <!-- <el-table-column label="操作" width="180px" align="center">
        <template slot-scope="scope">
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="dataedit(scope.row)"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column> -->
    </el-table>
    <div class="btn" v-if="id">
      <el-button type="danger" @click="admin2"> 拒绝</el-button>
      <el-button type="primary" @click="admin1">通过</el-button>
    </div>
    <up-set ref="upSet" />
    <fen-run ref="fenRun" />
  </div>
</template>

<script>
import { BoxProfitinfo, delLevel, exOperation } from "@/request/api";
import upSet from "./components/upSet.vue";
import fenRun from "./components/fenRun.vue";
export default {
  components: {
    upSet,
    fenRun,
  },
  data() {
    return {
      name: "",
      is_special: "",
      remark: "",
      device_num: "",
      five: [],
      third: [],
      rules: {
        name: [{ required: true, message: "请输入名称", trigger: "blur" }],
        is_special: [
          { required: true, message: "请选择是否为特殊分润", trigger: "blur" },
        ],
        remark: [{ required: true, message: "请输入备注", trigger: "blur" }],
      },
    };
  },
  watch: {},
  created() {
    let row = this.$route.query.row;

    this.id = row.id;

    this.tableshow();
  },
  mounted() {},
  computed: {},
  methods: {
    admin1() {
      let params = {
        token: sessionStorage.getItem("token"),
        ex_status: 2,
        id: this.id,
      };
      exOperation(params).then((res) => {
        if (res.status == 200) {
          this.$message.success("提交成功！");
          this.$router.back();
        }
      });
    },
    admin2() {
      let params = {
        token: sessionStorage.getItem("token"),
        ex_status: 3,
        id: this.id,
      };
      exOperation(params).then((res) => {
        if (res.status == 200) {
          this.$message.success("提交成功！");
          this.$router.back();
        }
      });
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          delLevel(params).then((res) => {
            if (res.data.code == 200) {
              this.tableshow();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
    dataedit(row) {
      let rowData = row;
      this.$refs.fenRun.show(JSON.parse(JSON.stringify(rowData)));
    },
    add(type) {
      let id = this.id;
      this.$refs.upSet.show(1, id);
    },
    add1(type) {
      let id = this.id;
      this.$refs.upSet.show(2, id);
    },
    tableshow() {
      let params = {
        token: sessionStorage.getItem("token"),
        id: this.id,
      };
      BoxProfitinfo(params).then((res) => {
        this.five = res.data.data.five;
        this.third = res.data.data.third;
        this.name = res.data.data.res.name;
        this.is_special = res.data.data.res.is_special;
        this.remark = res.data.data.res.remark;
        this.device_num = res.data.data.res.device_num;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-top: 20px;
  margin-left: 400px;
}
</style>
