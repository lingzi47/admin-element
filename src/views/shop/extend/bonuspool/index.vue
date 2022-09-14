<template>
  <div>
    <!-- 列表 -->
    <div class="user">
      <div class="block-quote">
        <el-form :inline="true" ref="form">
          <el-form-item style="float: right">
            <el-button type="primary" @click="add">添加</el-button>
          </el-form-item>
        </el-form>
      </div>
      <page-table
        ref="dataTable"
        :data="shoporder"
        @changeCurrentPage="changeCurrent"
      >
        <el-table-column
          label="序号"
          align="center"
          width="130"
          fixed
          :resizable="false"
        >
          <template slot-scope="scope">
            <span>{{ (page.page - 1) * page.limit + scope.$index + 1 }}</span>
          </template>
        </el-table-column>

        <el-table-column
          prop="uid"
          fixed
          label="id"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="nickname"
          fixed
          label="用户名称"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="have"
          fixed
          align="center"
          label="累计金额"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="use"
          fixed
          label="已释放"
          align="center"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          fixed
          label="当前金额"
          align="center"
          :resizable="false"
        >
          <template slot-scope="scope">
            <span>{{ scope.row.have - scope.row.use }}</span>
          </template></el-table-column
        >
        <el-table-column label="是否启用" :resizable="false" align="center">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.is_use"
              :active-value="10"
              :inactive-value="20"
              active-color="#02538C"
              inactive-color="#B9B9B9"
              @change="changeSwitch(scope.row)"
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
              @click="fenrun(scope.row)"
              type="primary"
              style="margin-left: 10px"
              >查看</el-link
            >
          </template>

          <el-link
            @click="open(scope.row)"
            type="danger"
            style="margin-left: 10px"
            >禁用</el-link
          >
          <el-link
            @click="open(scope.row)"
            type="danger"
            style="margin-left: 10px"
            >启用</el-link
          >
        </el-table-column>
      </page-table>
      <!-- 新增编辑弹窗 -->
      <edit-data ref="editData" />
      <fen-run ref="fenRun" />
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { boxpool, isuse } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
import editData from "./components/editData.vue";
import fenRun from "./components/fenRun.vue";

export default {
  name: "specialorder",
  components: {
    pageTable,
    editData,
    fenRun,
  },
  data() {
    return {
      shoporder: [],
      is_use: "",
      id: "",

      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
    };
  },
  created() {
    this.getUserList();
  },
  mounted() {},
  methods: {
    changeSwitch(row) {
      this.$confirm("是否修改启用状态？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            is_use: row.is_use,
            id: row.id,
          };
          isuse(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("修改成功");
              this.getUserList();
            } else {
              this.$message.error("修改失败");
            }
            this.getUserList();
          });
        })
        .catch(() => {
          this.$message.info("已取消");
          this.getUserList();
        });
    },
    getUserList() {
      let params = {
        token: sessionStorage.getItem("token"),

        page: this.page.page,
        limit: this.page.limit,
      };
      boxpool(params).then((res) => {
        console.log(res);
        this.shoporder = res.data.data;
        this.page.total = res.data.count;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.getUserList();
    },
    fenrun(row) {
      let rowData = row;
      this.$refs.fenRun.show(JSON.parse(JSON.stringify(rowData)));
    },
    open(row) {},
    add() {
      this.$refs.editData.show(1, {});
    },
  },
};
</script>

<style lang="scss" scoped>
.census {
  padding-left: 80px;
}
</style>
