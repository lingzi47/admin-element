<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="审核状态" prop="value">
          <el-select
            v-model="sta"
            placeholder="请选择"
            style="width: 160px"
            clearable
          >
            <el-option :value="10" label="待审核"></el-option>
            <el-option :value="20" label="通过"></el-option>
            <el-option :value="30" label="拒绝"></el-option>
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
          <el-button type="primary" @click="add">添加</el-button>
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

      <el-table-column prop="created_at" label="上传时间" align="center">
      </el-table-column>
      <el-table-column label="项目说明" align="center"
        ><template slot-scope="scope">
          <img :src="scope.row.img" min-width="70" height="70" />
        </template>
      </el-table-column>
      <!-- <el-table-column label="推广分润逻辑" align="center"
        ><template slot-scope="scope">
          <img :src="scope.row.img2" min-width="70" height="70" />
        </template>
      </el-table-column> -->
      <el-table-column prop="updated_at" label="审核时间" align="center">
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(3, scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >
          <!-- <el-link
            type="primary"
            v-if="scope.row.sta == 20 && scope.row.contact_time == ''"
            @click="addup(1, scope.row)"
            style="margin-left: 10px"
            >绑定</el-link
          >
          <el-link
            type="primary"
            v-if="scope.row.sta == 20 && scope.row.contact_time !== ''"
            @click="editup(2, scope.row)"
            style="margin-left: 10px"
            >修改绑定</el-link
          > -->
          <el-link
            type="success"
            v-if="scope.row.sta == 20 || scope.row.sta == 30"
            style="margin-left: 10px"
            @click="fenrun(2, scope.row)"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <!-- <fen-run ref="fenRun" />
    <up-set ref="upSet" /> -->
  </div>
</template>

<script>
import { officinalist, configindex, configdelete } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
// import fenRun from "./components/fenRun.vue";
// import upSet from "./components/upSet.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    // fenRun,
    // upSet,
  },
  data() {
    return {
      sta: "",
      time: "",
      userList: [], // 列表
      time: "",
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
      this.eprovince = data[0];
      this.ecity = data[1];
      this.earea = data[2];
    },
    change1(data) {
      this.province = data[0];
      this.city = data[1];
      this.area = data[2];
      this.get();
    },
    get() {
      let params = {
        token: sessionStorage.getItem("token"),
        province: this.province,
        city: this.city,
        area: this.area,
      };
      officinalist(params).then((res) => {
        this.list = res.data.data;
      });
    },
    add() {
      this.$refs.editData.show(1, {});
    },
    addup(type, row) {
      let rowData = row;
      this.$refs.upSet.show(1, JSON.parse(JSON.stringify(rowData)));
    },
    editup(type, row) {
      let rowData = row;
      this.$refs.upSet.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      this.$confirm("确认删除此项目信息", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          configdelete(params).then((res) => {
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
    fenrun(type, row) {
      let rowData = row;

      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    showtable(type, row) {
      let rowData = row;

      this.$refs.editData.show(3, JSON.parse(JSON.stringify(rowData)));
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
        time1: this.time[0],
        time2: this.time[1],
        sta: this.sta,
      };
      configindex(params).then((res) => {
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
        time1: this.time[0],
        time2: this.time[1],
        sta: this.sta,
      };
      configindex(params).then((res) => {
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
