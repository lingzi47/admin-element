<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="点位编号" prop="id">
          <el-input
            style="width: 180px"
            v-model="id"
            clearable
            placeholder="请输入点位编号"
          ></el-input>
        </el-form-item>
        <el-form-item label="点位位置">
          <el-cascader
            v-model="form.value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="点位来源" prop="status">
          <el-select v-model="type" placeholder="请选择" style="width: 150px">
            <el-option label="全部" value=""></el-option>
            <el-option label="公司" value="10"></el-option>
            <el-option label="渠道商" value="20"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="点位状态" prop="status">
          <el-select v-model="sta" placeholder="请选择" style="width: 150px">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="已绑定" value="20"></el-option>

            <el-option label="未绑定" value="10"></el-option>
            <el-option label="废弃" value="30"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="设备租赁号" prop="box_name">
          <el-input
            style="width: 180px"
            v-model="box_name"
            clearable
            placeholder="请输入设备租赁号"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item label="商圈" prop="box_name">
          <el-input
            style="width: 180px"
            v-model="shop"
            clearable
            placeholder="请输入商圈"
          ></el-input>
        </el-form-item>
        <el-form-item label="附近商圈" prop="box_name">
          <el-input
            style="width: 180px"
            v-model="shop_name"
            clearable
            placeholder="请输入附近商圈"
          ></el-input>
        </el-form-item>
        <el-form-item label="是否学区">
          <el-select v-model="school" placeholder="请选择" style="width: 150px">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item> -->
        <el-form-item label="点位创建时间" prop="time">
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
        <!-- <el-form-item label="建成时间">
          <el-date-picker
            v-model="time1"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="房价">
          <el-input
            v-model="house_price"
            style="width: 180px"
            placeholder="请输入房价"
          ></el-input>
        </el-form-item> -->
        <el-form-item style="float: right">
          <el-button type="primary" icon="el-icon-search" @click="searchinfo"
            >搜索</el-button
          >
          <el-button type="primary" @click="add">添加</el-button>
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
      <el-table-column prop="id" label="点位编号" align="center">
      </el-table-column>
      <el-table-column label="点位位置" align="center" width="250">
        <template slot-scope="scope">
          <span
            >{{ scope.row.province }}-{{ scope.row.city }}-{{
              scope.row.area
            }}-{{ scope.row.details }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="点位来源" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.type == 20">渠道商</el-link>
          <el-link type="primary" v-if="scope.row.type == 10">公司</el-link>
        </template>
      </el-table-column>
      <el-table-column label="点位使用截止日期" align="center" width="150">
        <template slot-scope="scope">
          <el-link type="danger" v-if="formatStr(scope.row.due_time) == '2038'"
            >永久</el-link
          >
          <el-link type="success" v-else>{{ scope.row.due_time }}</el-link>
        </template>
      </el-table-column>
      <el-table-column label="点位状态" align="center">
        <template slot-scope="scope">
          <el-link type="danger" v-if="scope.row.bind == 10">未绑定</el-link>
          <el-link type="success" v-if="scope.row.bind == 20">已绑定</el-link>
          <el-link v-if="scope.row.bind == 30">废弃</el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="create_time"
        label="点位创建时间"
        align="center"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="box_number" label="机器编号" align="center">
      </el-table-column>
      <el-table-column prop="position_user" label="渠道商id" align="center">
      </el-table-column>
      <el-table-column label="租赁人数" align="center">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)">{{
            scope.row.count
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="box_name" label="设备租赁号" align="center">
      </el-table-column>
      <el-table-column
        prop="bind_time"
        label="点位绑定时间"
        align="center"
        width="150"
      >
      </el-table-column>
      <el-table-column label="点位审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
        </template>
      </el-table-column>
      <el-table-column label="绑定审核状态" align="center">
        <template slot-scope="scope">
          <el-link v-if="scope.row.bindsta == null">未绑定</el-link>
          <el-link type="success" v-if="scope.row.bindsta == 20"
            >已通过</el-link
          >
          <el-link type="danger" v-if="scope.row.bindsta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.bindsta == 10"
            >待审核</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >

          <el-link
            type="primary"
            v-if="scope.row.sta == 20 && scope.row.bindsta == null"
            @click="addup(1, scope.row)"
            style="margin-left: 10px"
            >绑定</el-link
          >

          <el-link
            type="primary"
            v-if="scope.row.sta == 20 && scope.row.bindsta == 20"
            @click="editup(2, scope.row)"
            style="margin-left: 10px"
            >修改绑定</el-link
          >
          <el-link
            type="primary"
            v-if="scope.row.sta == 20 && scope.row.bindsta == 30"
            @click="editup(2, scope.row)"
            style="margin-left: 10px"
            >修改绑定</el-link
          >
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="fenrun(2, scope.row)"
            >编辑</el-link
          >
          <!-- <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          > -->
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
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确认</el-button>
      </div>
    </el-dialog>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <fen-run ref="fenRun" />
    <up-set ref="upSet" />
  </div>
</template>

<script>
import { positionindex, positiondelete, shareInfo } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
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
      box_uid: "",
      token: "",
      box_name: "",
      id: "",
      areaArr: [],
      form: {
        value1: "",
        value2: "",
        value3: "",
      },
      shop: "",
      shop_name: "",
      house_price: "",
      school: "",
      province: "",
      city: "",
      dialogVisible: false,
      List: [], // 列表
      type: "",
      sta: "",
      box_name: "",
      area: "",
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
    this.token = sessionStorage.getItem("token");
  },
  mounted() {},
  computed: {},
  methods: {
    dao() {
      if (this.time[1] == undefined) {
        window.location.href =
          "https://y4.wjw.cool/admin/box/posExport" +
          "?token=" +
          this.token +
          "&box_name=" +
          this.box_name +
          "&uid=" +
          this.box_uid +
          "&id=" +
          this.id +
          "&province=" +
          this.province +
          "&type=" +
          this.type +
          "&city=" +
          this.city +
          "&bind=" +
          this.sta +
          "&area=" +
          this.area;
      } else {
        window.location.href =
          "https://y4.wjw.cool/admin/box/posExport" +
          "?token=" +
          this.token +
          "&box_name=" +
          this.box_name +
          "&uid=" +
          this.box_uid +
          "&id=" +
          this.id +
          "&province=" +
          this.province +
          "&type=" +
          this.type +
          "&city=" +
          this.city +
          "&bind=" +
          this.sta +
          "&area=" +
          this.area +
          "&time1=" +
          this.time[0] +
          "&time2=" +
          this.time[1];
      }
    },
    handleClick(row) {
      console.log(row);
      this.box_name = row.box_name;
      this.getList();
    },
    getList() {
      let params = {
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
      };
      shareInfo(params).then((res) => {
        console.log(res);
        this.List = res.data.data;
        console.log(this.List);
      });
      this.dialogVisible = true;
    },
    submitForm() {
      this.dialogVisible = false;
    },

    close() {
      this.dialogVisible = false;
    },
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
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          positiondelete(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },

    formatStr(str) {
      if (str) {
        return `${str.substr(0, 4)}`;
      } else {
        return "";
      }
    },

    fenrun(type, row) {
      let rowData = row;

      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    showtable(row) {
      let rowData = row;

      this.$refs.fenRun.show(JSON.parse(JSON.stringify(rowData)));
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    searchinfo() {
      this.page.currentPage = 1;

      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
        uid: this.box_uid,
        id: this.id,
        province: this.province,
        type: this.type,
        city: this.city,
        bind: this.sta,
        area: this.area,
        time1: this.time[0],
        time2: this.time[1],
      };
      positionindex(params).then((res) => {
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
        box_name: this.box_name,
        box_uid: this.box_uid,
        id: this.id,
        province: this.province,
        type: this.type,
        city: this.city,
        area: this.area,
        time1: this.time[0],
        time2: this.time[1],
      };
      positionindex(params).then((res) => {
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
