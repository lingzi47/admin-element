<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="手机号" prop="phone">
          <el-input
            style="width: 180px"
            v-model="phone"
            clearable
            placeholder="请输入手机号"
          ></el-input>
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

      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" align="center">
      </el-table-column>

      <el-table-column prop="remark" label="申请详情" align="center">
      </el-table-column>
      <el-table-column prop="created_at" label="时间" align="center">
      </el-table-column>
      <!-- <el-table-column prop="sta_time" label="审核时间" align="center">
      </el-table-column>
      <el-table-column prop="sta_user" label="审核人" align="center">
      </el-table-column> -->
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已处理</el-link>

          <el-link type="primary" v-if="scope.row.sta == 10">未处理</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="360">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.sta == 10"
            @click="set(scope.row)"
            style="margin-left: 10px"
            >处理</el-link
          >
          <el-link
            type="success"
            v-if="scope.row.sta == 20"
            style="margin-left: 10px"
            >已处理</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="点位申请"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="点位申请处理" prop="role_name"> </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">取消</el-button>
        <el-button type="primary" @click="submitForm">处理</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { boxapply, boxapplysta } from "@/request/api";
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
      let params = {
        token: sessionStorage.getItem("token"),
        sta: 20,
        id: this.id,
      };
      boxapplysta(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.dialogVisible = false;
          this.getUserList();
        }
      });
    },

    refuse() {
      this.dialogVisible = false;
      this.getUserList();
    },

    close() {
      this.dialogVisible = false;
    },

    set(row) {
      this.dialogVisible = true;
      //console.log(row.id);
      this.id = row.id;
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
        phone: this.phone,
        time1: this.time[0],
        time2: this.time[1],
      };
      boxapply(params).then((res) => {
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
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        phone: this.phone,
        time1: this.time[0],
        time2: this.time[1],
      };

      boxapply(params).then((res) => {
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
