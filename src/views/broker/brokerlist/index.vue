<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="设备租赁号" prop="name">
          <el-input
            style="width: 180px"
            v-model="name"
            clearable
            placeholder="请输入设备租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item label="推荐人id" prop="use_pid">
          <el-input
            style="width: 180px"
            v-model="use_pid"
            clearable
            placeholder="请输入推荐人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="租赁人id" prop="use_pid">
          <el-input
            style="width: 180px"
            v-model="uid"
            clearable
            placeholder="请输入租赁人id"
          ></el-input>
        </el-form-item>
        <el-form-item label="推荐人租赁号" prop="pid">
          <el-input
            style="width: 180px"
            v-model="pid"
            clearable
            placeholder="请输入推荐人租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item label="购买服务" prop="box_type">
          <el-select
            v-model="box_type"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="终身" value="3"></el-option>
            <el-option label="三年" value="1"></el-option>
            <el-option label="五年" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="租赁号状态" prop="status">
          <el-select v-model="status" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="已绑定" value="20"></el-option>
            <el-option label="排队中" value="10"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态" prop="status">
          <el-select
            v-model="ex_status"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="全部状态" value=""></el-option>
            <el-option label="通过" value="2"></el-option>
            <el-option label="待审核" value="1"></el-option>
            <el-option label="拒绝" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否真实购买" prop="status">
          <el-select
            v-model="device_type"
            placeholder="请选择"
            style="width: 150px"
          >
            <el-option label="是" value="10"></el-option>
            <el-option label="否" value="20"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">手动添加租赁人</el-button>
          <el-button @click="dao">导出</el-button>
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
    >
      <el-table-column label="序号" align="center">
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column prop="box_number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column label="是否真实购买" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.device_type == 10">是</span>
          <span v-if="scope.row.device_type == 20">否</span>
        </template>
      </el-table-column>
      <el-table-column label="租赁人数" align="center">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)">{{
            scope.row.count
          }}</el-link>
        </template>
      </el-table-column>

      <el-table-column label="推荐人租赁号" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.pid == null">无</span>
          <span v-else>{{ scope.row.pid }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="use_pid" label="推荐人" align="center">
      </el-table-column>
      <el-table-column label="购买药柜租赁服务" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.box_type == 1">三年</span>
          <span v-if="scope.row.box_type == 2">五年</span>
          <span v-if="scope.row.box_type == 3">终身</span>
        </template>
      </el-table-column>
      <el-table-column label="所属市场" align="center" :resizable="false">
        <template slot-scope="scope">
          <el-link v-if="scope.row.user_team == 1">全国</el-link>
          <el-link v-if="scope.row.user_team == 2">大连</el-link>
          <el-link v-if="scope.row.user_team == 3">大庆</el-link>
          <el-link v-if="scope.row.user_team == 5">本溪</el-link>
          <el-link type="danger" v-if="scope.row.user_team == null"
            >暂无</el-link
          >
        </template></el-table-column
      >
      <el-table-column label="购买区域" align="center" :resizable="false">
        <template slot-scope="scope">
          <el-link v-if="scope.row.box_team == 1">全国</el-link>
          <el-link v-if="scope.row.box_team == 2">大连</el-link>
          <el-link v-if="scope.row.box_team == 3">大庆</el-link>
          <el-link v-if="scope.row.box_team == 4">北京</el-link>
          <el-link v-if="scope.row.box_team == 5">本溪</el-link>
          <el-link type="danger" v-if="scope.row.box_team == null"
            >暂无</el-link
          >
        </template></el-table-column
      >
      <el-table-column prop="queue" label="队列编号" align="center">
      </el-table-column>
      <el-table-column prop="remark" label="备注" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.ex_status == 2"
            >已通过</el-link
          >
          <el-link type="danger" v-if="scope.row.ex_status == 3"
            >未通过</el-link
          >
          <el-link type="primary" v-if="scope.row.ex_status == 1"
            >待审核</el-link
          >
        </template>
      </el-table-column>

      <el-table-column label="状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.status == 20">已绑定</el-link>
          <el-link type="danger" v-if="scope.row.status == 10">排队中</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看应急箱</el-link
          >

          <el-link
            type="success"
            style="margin-left: 10px"
            @click="fenrun(scope.row)"
            >商务团队信息</el-link
          >

          <el-link
            type="warning"
            style="margin-left: 10px"
            @click="addup(1, scope.row)"
            v-if="scope.row.pid == 0 && scope.row.ex_status == 2"
            >绑定上级</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="账户信息"
      :visible.sync="dialogVisible"
      width="600px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-table ref="dataTable" :data="List" border>
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{
              (page.currentPage - 1) * page.pageSize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="uid" label="用户id" align="center">
        </el-table-column>

        <el-table-column prop="phone" label="联系方式" align="center">
        </el-table-column>
        <el-table-column prop="share" label="分润占比" align="center">
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="edit(scope.row)"
              >编辑</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog
      title="信息修改"
      :visible.sync="Visible"
      width="600px"
      :close-on-click-modal="false"
      @close="closee"
    >
      <el-form :rules="rules" label-width="auto" :model="Form" ref="Form">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="用户id:" prop="uid">
              <el-input
                disabled
                v-model="Form.uid"
                style="width: 180px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="联系方式:" prop="phone">
              <el-input
                v-model="Form.phone"
                style="width: 180px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="分润占比:" prop="share">
              <el-select
                disabled
                v-model="Form.share"
                placeholder="请选择"
                style="width: 100px"
              >
                <el-option label="12.5%" value="12.50"></el-option>
                <el-option label="25%" value="25.00"></el-option>
                <el-option label="50%" value="50.00"></el-option>
                <el-option label="100%" value="100.00"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closee">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <fen-run ref="fenRun" />
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { doctorlist, upPid, shareInfo, shareedit } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
import fenRun from "./components/fenRun.vue";
import upSet from "./components/upSet.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    fenRun,
    upSet,
  },
  data() {
    return {
      dialogVisible: false,
      Visible: false,
      name: "",
      uid: "",
      pid: "",
      use_pid: "",
      uid: "",
      box_type: "",
      box_name: "",
      status: "",
      ex_status: "",

      device_type: "",
      buy_time: "",
      userList: [], // 列表
      List: [], // 列表
      Form: {
        id: "",
        uid: "",
        phone: "",
        share: "",
      },
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      rules: {
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
        share: [{ required: true, message: "请选择分润占比", trigger: "blur" }],
      },
    };
  },
  watch: {
    buy_time(newVal) {
      if (newVal == null) {
        this.buy_time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      window.location.href =
        "https://testapi.yujian02.xyz/admin/box/exportList" +
        "?token=" +
        this.token +
        "&name=" +
        this.name +
        "&pid=" +
        this.pid +
        "&box_type=" +
        this.box_type +
        "&use_pid=" +
        this.use_pid +
        "&status=" +
        this.status +
        "&device_type=" +
        this.device_type +
        "&ex_status=" +
        this.ex_status;
    },
    submit() {
      let params = {
        id: this.Form.id,
        phone: this.Form.phone,
        share: this.Form.share,
        token: sessionStorage.getItem("token"),
      };
      shareedit(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("编辑成功");
          this.closee();
          this.dialogVisible = true;
          this.getList();
        } else {
          this.$message.error(res.data.msg);
          this.closee();
          this.dialogVisible = true;
          this.getList();
        }
      });
    },
    closee() {
      this.Form.id = "";
      this.Form.uid = "";
      this.Form.phone = "";
      this.Form.share = "";
      this.Visible = false;
      this.dialogVisible = true;
    },
    edit(row) {
      this.Form.id = row.id;
      this.Form.uid = row.uid;
      this.Form.phone = row.phone;
      this.Form.share = row.share;
      this.Visible = true;
    },
    handleClick(row) {
      this.box_name = row.name;
      this.getList();
    },
    getList() {
      let params = {
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
      };
      shareInfo(params).then((res) => {
        this.List = res.data.data;
      });
      this.dialogVisible = true;
    },
    submitForm() {
      this.dialogVisible = false;
    },

    close() {
      this.dialogVisible = false;
    },
    add() {
      this.$refs.editData.show(1, {});
    },
    addup(type, row) {
      let rowData = row;
      this.$refs.upSet.show(1, JSON.parse(JSON.stringify(rowData)));
    },
    setup(type, row) {
      let rowData = row;
      this.$refs.upSet.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    fenrun(row) {
      let rowData = row;
      this.$refs.fenRun.show(JSON.parse(JSON.stringify(rowData)));
    },
    showtable(row) {
      this.$router.push({
        path: "/showtable",
        query: {
          row: row,
        },
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        pid: this.pid,
        box_type: this.box_type,
        uid: this.uid,
        use_pid: this.use_pid,
        status: this.status,
        ex_status: this.ex_status,

        device_type: this.device_type,
      };
      doctorlist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        name: this.name,
        pid: this.pid,
        box_type: this.box_type,
        uid: this.uid,
        use_pid: this.use_pid,
        status: this.status,
        ex_status: this.ex_status,
        device_type: this.device_type,
      };
      doctorlist(params).then((res) => {
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
