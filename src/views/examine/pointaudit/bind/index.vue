<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="渠道商id" prop="name">
          <el-input
            style="width: 180px"
            v-model="position_user"
            clearable
            placeholder="请输入渠道商id"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备租赁号" prop="box_name">
          <el-input
            style="width: 180px"
            v-model="box_name"
            clearable
            placeholder="请输入设备租赁号"
          ></el-input>
        </el-form-item>
        <el-form-item label="租赁商id" prop="box_uid">
          <el-input
            style="width: 180px"
            v-model="box_uid"
            clearable
            placeholder="请输入租赁商id"
          ></el-input>
        </el-form-item>
        <el-form-item label="设备编号" prop="number">
          <el-input
            style="width: 180px"
            v-model="box_number"
            clearable
            placeholder="请输入设备编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="点位来源" prop="status">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="公司" value="10"></el-option>
            <el-option label="渠道商" value="20"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审核状态" prop="status">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="待审核" value="10"></el-option>
            <el-option label="已通过" value="20"></el-option>
            <el-option label="未通过" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
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

      <el-table-column label="点位位置" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.province }}-{{ scope.row.city }}-{{
              scope.row.area
            }}-{{ scope.row.details }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="year" label="点位过期时间" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.due_time == '2099-01-01 00:00:00'"
            >永久</el-link
          >
          <el-link type="primary" v-else>{{ scope.row.due_time }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="点位来源" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.type == 20">渠道商</el-link>
          <el-link type="primary" v-if="scope.row.type == 10">公司</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="position_user" label="渠道商id" align="center">
      </el-table-column>
      <el-table-column prop="box_name" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column prop="box_number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column label="供货药房" align="center">
        <template slot-scope="scope">
          <span
            >{{ scope.row.yaoprovince }}-{{ scope.row.yaocity }}-{{
              scope.row.yaoarea
            }}-{{ scope.row.big_name }}-{{ scope.row.name }}</span
          >
        </template>
      </el-table-column>
      <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.bindsta == 20"
            >已通过</el-link
          >
          <el-link type="danger" v-if="scope.row.bindsta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.bindsta == 10"
            >待审核</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.bindsta == 10"
            @click="set(scope.row)"
            style="margin-left: 10px"
            >处理</el-link
          >
          <el-link
            type="success"
            v-if="scope.row.bindsta == 20"
            style="margin-left: 10px"
            >已通过</el-link
          >
          <el-link
            type="danger"
            v-if="scope.row.bindsta == 30"
            style="margin-left: 10px"
            >未通过</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="审核"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="是否允许该条信息审核通过" prop="role_name">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">拒绝</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { bindindex, bindsta } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
export default {
  name: "user",
  components: {
    pageTable,
  },
  data() {
    return {
      dialogVisible: false,
      setid: "",
      sev_id: "",
      phone: "",

      position_user: "",
      box_name: "",
      box_uid: "",
      box_number: "",
      type: "",
      sta: "",
      time: "",

      areaArr: [],
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
      province: "",
      city: "",
      name: "",
      person: "",
      area: "",
      uid: "",
      sta: "",
      time: "",
      userList: [], // 列表
      box_name: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  watch: {
    time(newVal) {
      if (newVal == null) {
        this.time = [];
      }
    },
  },
  created() {
    this.getUserList(); //获取用户列表
    this.setData(areaListData());
    this.areaArr = areaListData();
  },
  mounted() {},
  computed: {},
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
    submitForm() {
      //console.log("成功");
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
        box_name: this.box_name,
      };
      bindsta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    refuse() {
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 30,
        id: this.id,
        box_name: this.box_name,
      };
      bindsta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    close() {
      this.dialogVisible = false;
    },

    set(row) {
      this.dialogVisible = true;
      console.log(row);
      this.id = row.bind_id;
      this.box_name = row.box_name;
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
        position_user: this.position_user,
        box_name: this.box_name,
        box_uid: this.box_uid,
        box_number: this.box_number,
        type: this.type,
        sta: this.sta,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      bindindex(params).then((res) => {
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
        position_user: this.position_user,
        box_name: this.box_name,
        box_uid: this.box_uid,
        box_number: this.box_number,
        type: this.type,
        sta: this.sta,
        s_time: this.time[0],
        e_time: this.time[1],
      };
      bindindex(params).then((res) => {
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
