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
          prop="goods_name"
          label="商品名称"
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
              type="danger"
              style="margin-left: 10px"
              @click="deleteData(scope.row)"
              >删除</el-link
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
          <el-col :span="24">
            <el-form-item label="商品名称" prop="goods_id">
              <el-select
                v-model="ruleForm.goods_id"
                clearable
                style="width: 230px"
                filterable
                placeholder="请选择商品"
              >
                <el-option
                  v-for="item in arr"
                  :value="item.id"
                  :label="item.goods_name"
                  :key="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
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
import {
  plangoodslist,
  plangoodsadd,
  plangoodsdel,
  xunnigoods,
} from "@/request/api";
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
      ruleForm: { goods_id: "" },
      teamid: "",
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      arr: [],
      userList: [], // 用户列表
      rules: {
        goods_id: [{ required: true, message: "请选择商品", trigger: "blur" }],
      },
    };
  },
  created() {
    this.getlist();
  },
  mounted() {},
  methods: {
    addData() {
      this.type = 1;
      this.Visible = true;
    },
    getlist() {
      let params = {
        token: sessionStorage.getItem("token"),
      };
      xunnigoods(params).then((res) => {
        console.log(res.data.data);
        this.arr = res.data.data;
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
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
          plangoodsdel(params).then((res) => {
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
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        plan_id: this.teamid,
      };
      plangoodslist(params).then((res) => {
        console.log(res.data.data);
        this.page.total = res.data.count;
        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    show(row) {
      this.dialogVisible = true;
      this.teamid = row.id;
      console.log(row);
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
      this.teamid = "";
    },
    close1() {
      this.Visible = false;
      this.ruleForm.goods_id = "";
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          let params = {
            goods_id: this.ruleForm.goods_id,
            token: sessionStorage.getItem("token"),
            plan_id: this.teamid,
          };
          plangoodsadd(params).then((res) => {
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
    },
  },
};
</script>

<style>
</style>
