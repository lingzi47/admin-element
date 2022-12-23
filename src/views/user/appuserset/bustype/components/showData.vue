<template>
  <div class="editData">
    <el-dialog
      title="查看"
      :visible.sync="dialogVisible"
      width="1200px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form :inline="true">
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            @click="addData"
            >添加</el-button
          >
        </el-form-item>
      </el-form>
      <page-table
        ref="dataTable"
        :data="userList"
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column label="序号" align="center" fixed :resizable="false">
          <template slot-scope="scope">
            <span>{{
              (page.currentPage - 1) * page.pageSize + scope.$index + 1
            }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="uid"
          label="用户id"
          align="center"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          prop="name"
          label="用户名"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="bank"
          label="银行卡号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="phone"
          label="手机号"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <el-link
              v-if="checkPermission('useredit')"
              type="danger"
              style="margin-left: 10px"
              @click="editData(scope.row)"
              >修改</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </el-dialog>
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="Visible"
      width="800px"
      :close-on-click-modal="false"
      @close="close1"
    >
      <el-form
        label-width="auto"
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
      >
        <el-row>
          <el-col :span="10">
            <el-form-item label="uid" prop="uid">
              <el-input
                v-model="ruleForm.uid"
                placeholder="请输入"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="10">
            <el-form-item label="用户名" prop="name">
              <el-input
                v-model="ruleForm.name"
                placeholder="请输入"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="10">
            <el-form-item label="银行卡号" prop="bank">
              <el-input
                v-model="ruleForm.bank"
                placeholder="请输入"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="10">
            <el-form-item label="手机号" prop="phone">
              <el-input
                v-model="ruleForm.phone"
                placeholder="请输入"
              ></el-input> </el-form-item
          ></el-col>
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
import { teamindex, teamadd, teamedit } from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      id: "",
      type: "",
      dialogVisible: false,
      Visible: false,
      ruleForm: { uid: "", name: "", bank: "", phone: "" },
      teamid: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      userList: [], // 用户列表
      rules: {
        uid: [{ required: true, message: "请输入uid", trigger: "blur" }],
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        bank: [{ required: true, message: "请输入银行卡号", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确",
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    addData() {
      this.type = 1;
      this.Visible = true;
    },
    editData(row) {
      this.id = row.id;
      this.ruleForm.uid = row.uid;
      this.ruleForm.bank = row.bank;
      this.ruleForm.phone = row.phone;
      this.ruleForm.name = row.name;
      this.type = 2;
      this.Visible = true;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        id: this.teamid,
      };
      teamindex(params).then((res) => {
        this.page.total = res.data.count;
        // this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    show(row) {
      this.dialogVisible = true;
      this.teamid = row.id;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
      this.teamid = "";
    },
    close1() {
      this.Visible = false;
      this.id = "";
      this.ruleForm.uid = "";
      this.ruleForm.bank = "";
      this.ruleForm.name = "";
      this.ruleForm.phone = "";
    },
    submitForm() {
      if (this.type == 1) {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let params = {
              uid: this.ruleForm.uid,
              name: this.ruleForm.name,
              team: this.teamid,
              bank: this.ruleForm.bank,
              phone: this.ruleForm.phone,

              token: sessionStorage.getItem("token"),
            };
            teamadd(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.getUserList();
                this.close1();
              } else {
                this.$message(res.data.msg);
                this.close1();
                this.getUserList();
              }
            });
          } else {
            return false;
          }
        });
      } else {
        this.$refs.ruleForm.validate(async (valid) => {
          if (valid) {
            let params = {
              uid: this.ruleForm.uid,
              name: this.ruleForm.name,
              team: this.teamid,
              bank: this.ruleForm.bank,
              phone: this.ruleForm.phone,
              id: this.id,
              token: sessionStorage.getItem("token"),
            };
            teamedit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("修改成功");
                this.close1();
                this.getUserList();
              } else {
                this.$message(res.data.msg);
                this.close1();
                this.getUserList();
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
</style>
