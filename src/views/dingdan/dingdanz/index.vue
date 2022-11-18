<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" ref="form">
        <el-form-item style="float: right">
          <el-button type="primary" @click="editData">添加</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      ref="dataTable"
      :data="userList"
      row-key="id"
      :tree-props="{ children: 'children' }"
      border
    >
      <el-table-column prop="name" label="组合" align="center">
      </el-table-column>

      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-link
            type="primary"
            v-if="scope.row.pid == 0"
            style="margin-left: 10px"
            @click="add(scope.row)"
            >新增</el-link
          >
          <el-link
            type="primary"
            style="margin-left: 10px"
            v-else
            @click="showtype(scope.row)"
            >查看</el-link
          >
          <el-link
            type="danger"
            style="margin-left: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 新增编辑弹窗 -->
    <edit-data ref="editData" />
    <show-data ref="showData" />
  </div>
</template>

<script>
import { planlist, plandel } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
import { areaListData } from "@/utils/area";
import editData from "./components/editData.vue";
import showData from "./components/showData.vue";
export default {
  name: "user",
  components: {
    pageTable,
    editData,
    showData,
  },
  data() {
    return {
      userList: [], // 列表
    };
  },
  watch: {},
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    showtype(row) {
      this.$refs.showData.show(JSON.parse(JSON.stringify(row)));
    },
    editData() {
      this.$refs.editData.show(1);
    },
    add(row) {
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(row)));
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            id: row.id,
            token: sessionStorage.getItem("token"),
          };
          plandel(params).then((res) => {
            if (res.status == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
              this.getUserList();
            }
          });
        })
        .catch(() => {});
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        token: sessionStorage.getItem("token"),
      };
      planlist(params).then((res) => {
        this.userList = res.data.data;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
