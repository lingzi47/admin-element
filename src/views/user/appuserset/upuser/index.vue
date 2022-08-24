<template>
  <div class="user">
    <el-button type="primary" @click="go()">返回</el-button>
    <div class="block-quote"></div>
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
          <span @click="upuser(scope.row)">{{ scope.row.pid }}</span>
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
      <el-table-column
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
      </el-table-column>
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
      arr1: [],
      pid: "",
      baseUrl: "http://y6.wjw.cool/",
      rolesList: [], //角色列表
      userList: [], // 用户列表

      form: {
        username: "",
        member: "",
        time: "",
        id: "",
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
  watch: {
    "form.time"(newVal) {
      if (newVal == null) {
        this.form.time = [];
      }
    },
  },
  created() {
    this.pid = this.$route.query.id;
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {
    getRole() {
      return (role) => {
        return this.rolesList.filter((item) => item.name == role)[0].title;
      };
    },
  },
  methods: {
    // row是我从上边函数传下来的数据，可以拿到当前选中的状态值，下边的请求是因为我要传给后端调的接口
    changeSwitch(row) {
      //console.log(row.status);
      //console.log(row.id);
      //console.log(sessionStorage.getItem("token"));
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
    usertext(row) {
      //console.log(row);
      this.$router.push({
        path: "/usertext",
        query: {
          id: row.id,
        },
      });
    },
    go() {
      if (this.arr1.length < 1) {
        //console.log("我不显示");
        history.go(-1);
      } else {
        // console.log("我要的", this.arr.slice(-1));
        let a = this.arr1[this.arr1.length - 1];
        this.pid = a.toString();
        console.log(this.pid);
        this.getUserList();
        var m = this.arr1.slice(0);
        m.splice(m.length - 1, 1);
        //console.log(m);
      }
      this.arr1 = m;
      return m;
    },
    changeZisu(row) {
      //console.log(row.zisu_fl);
      //console.log(row.id);
      //console.log(sessionStorage.getItem("token"));
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
    upuser(row) {
      this.cid = row.id;
      let idarr = [];
      console.log(this.arr1 instanceof Array);
      idarr.push(this.cid);
      console.log(idarr);
      this.arr1.push(idarr);
      console.log(this.arr1);

      this.pid = row.pid;

      this.getUserList();
    },
    changeBlm(row) {
      //console.log(row.is_blm);
      //console.log(row.id);
      //console.log(sessionStorage.getItem("token"));
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

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        id: this.pid,
        member: this.form.member,
        username: this.form.username,
      };
      appuserList(params).then((res) => {
        //console.log(res.data.data.member_count);
        this.arr = res.data.data.member_count;
        this.page.total = res.data.data.total;
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
      //console.log(row);
      this.$router.push({
        path: "/userShow",
        query: {
          id: row.id,
        },
      });
    },
    nextUser(row) {
      //console.log(row);
      this.$router.push({
        path: "/nextUser",
        query: {
          id: row.id,
        },
      });
    },
    editData(row) {
      //console.log(row);
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
