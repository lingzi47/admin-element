<template>
  <div class="user">
    <el-button type="primary" @click="go()">返回上一级</el-button>
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="用户id" prop="id">
          <el-input
            style="width: 180px"
            v-model="form.id"
            clearable
            placeholder="请输入用户id"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户名称" prop="username">
          <el-input
            style="width: 180px"
            v-model="form.username"
            clearable
            placeholder="请输入用户名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="用户身份" prop="member">
          <el-select
            style="width: 180px"
            v-model="form.member"
            clearable
            placeholder="请选择用户身份"
          >
            <el-option label="普通用户" :value="0"></el-option>
            <el-option label="MT黑卡" :value="1"></el-option>
            <el-option label="C级推广员" :value="2"></el-option>
            <el-option label="B级推广员" :value="3"></el-option>
            <el-option label="A级推广员" :value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="收款用户" prop="id">
          <el-input
            style="width: 180px"
            v-model="form.openid_app"
            clearable
            placeholder="请输入收款用户"
          ></el-input>
        </el-form-item>
        <el-form-item label="注册时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="daterange"
            value-format="yyyy-MM-dd HH:mm:ss"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="userList"
      @changeCurrentPage="changeCurrent"
      @selection-change="getSelection"
    >
      <el-table-column
        label="序号"
        align="center"
        width="80"
        fixed
        :resizable="false"
      >
        <template slot-scope="scope">
          <span>{{
            (page.currentPage - 1) * page.pageSize + scope.$index + 1
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="diamonds"
        label="钻石"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="pk_v"
        label="pk值等级"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="pk"
        label="pk值"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="nickname"
        label="名称"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="head_img"
        label="头像"
        align="center"
        width="100"
        :resizable="false"
      >
        <template slot-scope="scope">
          <img :src="scope.row.head_img" class="table-img" width="60px" />
        </template>
      </el-table-column>

      <el-table-column
        label="用户上级"
        align="center"
        width="80"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link @click="upuser(scope.row)">{{ scope.row.pid }} </el-link>
        </template>
      </el-table-column>
      <el-table-column
        prop="pname"
        label="上级名称"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="member"
        label="用户身份"
        align="center"
        width="100"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        label="所属团队"
        align="center"
        width="100"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-link v-if="scope.row.team == 1">全国</el-link>
          <el-link v-if="scope.row.team == 2">大连</el-link>
          <el-link v-if="scope.row.team == 3">大庆</el-link>
          <el-link v-if="scope.row.team == 4">北京</el-link>
          <el-link v-if="scope.row.team == 5">本溪</el-link>
          <el-link type="danger" v-if="scope.row.team == null">暂无</el-link>
        </template></el-table-column
      >
      <el-table-column
        prop="created_at"
        label="注册时间"
        align="center"
        width="100"
        :resizable="false"
      ></el-table-column>

      <el-table-column
        label="是否启用"
        width="80"
        :resizable="false"
        align="center"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="2"
            active-color="#02538C"
            inactive-color="#B9B9B9"
            @change="changeSwitch(scope.row)"
          />
        </template>
      </el-table-column>
      <!-- <el-table-column
        prop="zisu_lv"
        label="紫苏等级"
        align="center"
        width="80"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        label="不老莓"
        width="80"
        :resizable="false"
        align="center"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.is_blm"
            :active-value="1"
            :inactive-value="2"
            active-color="#02538C"
            inactive-color="#B9B9B9"
            @change="changeBlm(scope.row)"
          />
        </template>
      </el-table-column>
      <el-table-column
        label="紫苏分利"
        width="80"
        :resizable="false"
        align="center"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.zisu_fl"
            :active-value="1"
            :inactive-value="2"
            active-color="#02538C"
            inactive-color="#B9B9B9"
            @change="changeZisu(scope.row)"
          />
        </template>
      </el-table-column> -->
      <el-table-column
        fixed="right"
        label="操作"
        align="center"
        :resizable="false"
        v-if="checkPermission(['useredit', 'userdelete'])"
      >
        <template slot-scope="scope">
          <el-link
            v-if="checkPermission('useredit')"
            type="primary"
            style="margin-left: 10px"
            @click="editData(scope.row)"
            >信息修改</el-link
          >
          <el-link
            v-if="checkPermission('useredit')"
            type="warning"
            style="margin-left: 10px"
            @click="usertext(scope.row)"
            >分利信息</el-link
          >
          <el-link
            v-if="checkPermission('useredit')"
            type="success"
            style="margin-left: 10px"
            @click="nextUser(scope.row)"
            >查看下级</el-link
          >
          <el-link
            v-if="checkPermission('useredit')"
            type="warning"
            style="margin-left: 10px"
            @click="userShow(scope.row)"
            >用户详情</el-link
          >
          <el-link
            v-if="checkPermission('useredit')"
            style="margin-left: 10px"
            @click="pkshow(scope.row)"
            >pk值详情</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { appuserList, userZisu, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import { getUserList, deleteUser } from "@/api/user";
import { getRoles } from "@/api/role";
import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
      arr: [],
      cid: "",
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表
      form: {
        username: "",
        member: "",
        time: "",
        id: "",
        openid_app: "",
      },
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  created() {
    this.cid = this.$route.query.id;
    this.getUserList(); //获取用户列表
  },
  // watch: {
  //   cid(val) {
  //     this.cid = val;
  //     this.getUserList(); //获取用户列表
  //   },
  // },
  mounted() {},
  computed: {
    getRole() {
      return (role) => {
        return this.rolesList.filter((item) => item.name == role)[0].title;
      };
    },
  },
  methods: {
    pkshow(row) {
      this.$router.push({
        path: "/pkshow",
        query: {
          id: row.id,
        },
      });
    },
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        cid: this.cid,
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        username: this.form.username,
        id: this.form.id,
        member: this.form.member,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
        openid_app: this.form.openid_app,
      };
      appuserList(params).then((res) => {
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    upuser(row) {
      this.$router.push({
        path: "/upuser",
        query: {
          id: row.pid,
        },
      });
    },
    go() {
      if (this.arr.length < 1) {
        this.$router.back();
      } else {
        let a = this.arr[this.arr.length - 1];
        this.cid = a.toString();
        this.getUserList();
        var m = this.arr.slice(0);
        m.splice(m.length - 1, 1);
      }
      this.arr = m;
      return m;
    },
    usertext(row) {
      this.$router.push({
        path: "/usertext",
        query: {
          id: row.id,
        },
      });
    },
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口
    changeZisu(row) {
      let params = {
        token: sessionStorage.getItem("token"),
        is_zisu: row.zisu_fl,
        id: row.id,
      };
      userZisu(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("修改成功");
          this.getUserList();
        } else {
          this.$message.error("修改失败");
        }
      });
    },
    changeSwitch(row) {
      let params = {
        token: sessionStorage.getItem("token"),
        status: row.status,
        id: row.id,
      };
      userStart(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("修改成功");
          this.getUserList();
        } else {
          this.$message.error("修改失败");
        }
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    //监听表格多选
    getSelection(select) {
      this.tableSelectList = select;
    },
    changeBlm(row) {
      let params = {
        token: sessionStorage.getItem("token"),
        is_blm: row.is_blm,
        id: row.id,
      };
      userBlm(params).then((res) => {
        if (res.data.code == 200) {
          this.$message.success("修改成功");
          this.getUserList();
        } else {
          this.$message.error("修改失败");
        }
      });
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        cid: this.cid,
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        username: this.form.username,
        id: this.form.id,
        member: this.form.member,
        start_time: this.form.time[0],
        end_time: this.form.time[1],
        openid_app: this.form.openid_app,
      };
      appuserList(params).then((res) => {
        this.page.total = res.data.data.total;
        this.page.currentPage = res.data.data.current_page;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    userShow(row) {
      this.$router.push({
        path: "/userShow",
        query: {
          id: row.id,
        },
      });
    },
    nextUser(row) {
      this.pid = row.pid;
      let idarr = [];
      idarr.push(this.pid);
      this.arr.push(idarr);
      this.cid = row.id;
      this.getUserList();
    },
    editData(row) {
      let rowData = row;
      this.$refs.editData.show(JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此用户？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let rowData = type == 1 ? this.tableSelectList[0] : row;
            let res = await deleteUser({
              id: rowData.id,
            });
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
