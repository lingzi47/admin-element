<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true">
        <el-form-item label="设备位置">
          <el-cascader
            v-model="value"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="药房位置">
          <el-cascader
            v-model="value1"
            :options="areaArr"
            :props="{ value: 'name', label: 'name' }"
            placeholder="请选择省市区"
            filterable
            @change="change1"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="药房名称" prop="name">
          <el-form-item prop="officina_id">
            <el-select
              v-model="name"
              placeholder="请选择药房"
              style="width: 160px"
              clearable
            >
              <el-option
                v-for="item in list"
                :value="item.big_name"
                :key="item.big_name"
                :label="item.big_name"
              ></el-option>
            </el-select>
            <el-select
              v-model="officina_id"
              placeholder="请选择药房"
              style="width: 160px"
              clearable
            >
              <el-option
                v-for="item in list1"
                :value="item.id"
                :key="item.id"
                :label="item.name"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form-item>

        <el-form-item label="设备编号" prop="number">
          <el-input
            style="width: 180px"
            v-model="number"
            clearable
            placeholder="请输入设备编号"
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
      <el-table-column prop="number" label="设备编号" align="center">
      </el-table-column>
      <el-table-column label="点位位置" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.eprovince"
            >{{ scope.row.eprovince }}-{{ scope.row.ecity }}-{{
              scope.row.earea
            }}</span
          ><span v-else>暂无</span>
        </template>
      </el-table-column>
      <el-table-column label="设备供货药房" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.dprovince"
            >{{ scope.row.dprovince }}-{{ scope.row.dcity }}-{{
              scope.row.darea
            }}--{{ scope.row.dname }}</span
          >
          <span v-else>暂无</span>
        </template></el-table-column
      >
      <el-table-column prop="box_name" label="设备租赁号" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.box_name">{{ scope.row.box_name }}</span>
          <span v-else>暂无</span>
        </template>
      </el-table-column>
      <el-table-column label="租赁人数" align="center">
        <template slot-scope="scope">
          <el-link @click="handleClick(scope.row)">{{
            scope.row.count
          }}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="position_user" label="渠道商id" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.position_user">{{
            scope.row.position_user
          }}</span>
          <span v-else>暂无</span>
        </template>
      </el-table-column>

      <el-table-column label="租赁时长" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.box_type == 2">五年</el-link>
          <el-link type="danger" v-if="scope.row.box_type == 3">终身</el-link>
          <el-link type="primary" v-if="scope.row.box_type == 1">三年</el-link>
          <span v-if="scope.row.box_type == null">暂无</span>
        </template>
      </el-table-column>
      <el-table-column prop="deviceStatus" label="设备状态" align="center">
      </el-table-column>
      <el-table-column prop="onLineStatus" label="在线状态" align="center">
      </el-table-column>
      <el-table-column label="通讯服务费缴纳" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.is_serve == 20">是</el-link>
          <el-link type="danger" v-if="scope.row.is_serve == 10">否</el-link>
          <span v-if="scope.row.is_serve == null">暂无</span>
        </template>
      </el-table-column>
      <el-table-column prop="due_time" label="租赁截止时间" align="center">
        <template slot-scope="scope">
          <span v-if="scope.row.due_time">{{ scope.row.due_time }}</span>
          <span v-else>暂无</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="审核状态" align="center">
        <template slot-scope="scope">
          <el-link type="success" v-if="scope.row.sta == 20">已通过</el-link>
          <el-link type="danger" v-if="scope.row.sta == 30">未通过</el-link>
          <el-link type="primary" v-if="scope.row.sta == 10">待审核</el-link>
        </template>
      </el-table-column> -->
      <el-table-column label="操作" align="center" width="350">
        <template slot-scope="scope">
          <el-link
            type="primary"
            @click="showtable(scope.row)"
            style="margin-left: 10px"
            >查看</el-link
          >
          <el-link
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
          >
          <el-link
            type="success"
            style="margin-left: 10px"
            @click="fenrun(2, scope.row)"
            >编辑</el-link
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
import {
  officinalist,
  boxlistindex,
  positiondeletet,
  positiondelete,
  shareInfo,
} from "@/request/api";
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

      areaArr: [],
      List: [], // 列表
      number: "",
      value: "",
      dialogVisible: false,
      box_name: "",
      box_name1: "",
      value1: "",
      list: [],
      list1: [],
      name: "",
      officina_id: "",
      province: "",
      city: "",
      area: "",
      eprovince: "",
      ecity: "",
      earea: "",
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
    name(newVal) {
      this.huolist1();
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
    submitForm() {
      this.dialogVisible = false;
    },

    close() {
      this.dialogVisible = false;
    },
    getList() {
      let params = {
        token: sessionStorage.getItem("token"),
        box_name: this.box_name1,
      };
      shareInfo(params).then((res) => {
        this.List = res.data.data;
      });
      this.dialogVisible = true;
    },
    handleClick(row) {
      this.box_name1 = row.box_name;
      this.getList();
    },
    huolist1() {
      //big_name 改2
      let params = {
        token: sessionStorage.getItem("token"),
        big_name: this.name,
        province: this.province,
        city: this.city,
        area: this.area,
      };
      officinalist(params).then((res) => {
        this.list1 = res.data.data;
      });
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
      this.$refs.upSet.show(1, {});
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
      this.$confirm("是否删除此用户？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let id = row.id;
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          positiondelete(params).then((res) => {
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
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        box_name: this.box_name,
        box_uid: this.box_uid,
        time1: this.time[0],
        time2: this.time[1],
        number: this.number,
        eprovince: this.eprovince,
        officina_id: this.officina_id,
        ecity: this.ecity,
        earea: this.earea,
      };
      boxlistindex(params).then((res) => {
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
        box_name: this.box_name,
        box_uid: this.box_uid,
        time1: this.time[0],
        time2: this.time[1],
        number: this.number,
        eprovince: this.eprovince,
        officina_id: this.officina_id,
        ecity: this.ecity,
        earea: this.earea,
      };
      boxlistindex(params).then((res) => {
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
