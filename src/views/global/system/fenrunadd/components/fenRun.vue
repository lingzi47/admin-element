<template>
  <div>
    <el-dialog
      class="AddDialog"
      :title="tittle"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-button type="primary" plain id="btn" @click="add()">新增</el-button>
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
        <el-table-column prop="level" label="分润等级" align="center">
        </el-table-column>
        <el-table-column prop="profit" label="分润" align="center">
        </el-table-column>
        <el-table-column prop="bonus" label="绩效" align="center">
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link
              type="success"
              style="margin-left: 10px"
              @click="dataedit(scope.row)"
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
    </el-dialog>
    <el-dialog
      class="AddDialog"
      :title="tittle + '级分润编辑'"
      :visible.sync="visable"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="closee"
    >
      <el-form
        :rules="rules"
        label-width="auto"
        :model="goodsForm"
        ref="goodsForm"
      >
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="用户:" prop="number">
              <el-input
                v-model="goodsForm.number"
                style="width: 180px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24">
            <el-form-item label="给A分利:" prop="profit">
              <el-input
                v-model="goodsForm.profit"
                style="width: 180px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="给A绩效:" prop="bonus">
              <el-input
                v-model="goodsForm.bonus"
                style="width: 180px"
                placeholder="请输入"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="closee">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listProfit, createData, delProfit, updateProfit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      dialogVisible: false,
      visable: false,
      tittle: "",
      goodsForm: {
        number: "",
        profit: "",
        bonus: "",
      },
      id: "",
      userList: [],
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      type: "",
      cid: "",
      rules: {
        number: [{ required: true, message: "请输入用户", trigger: "blur" }],
        profit: [{ required: true, message: "请输入分润", trigger: "blur" }],
        bonus: [{ required: true, message: "请输入绩效", trigger: "blur" }],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    dataedit(row) {
      this.type = 2;
      console.log(row);
      console.log(row.id);
      this.cid = row.id;
      this.visable = true;
      this.goodsForm.number = row.level[1];
      this.goodsForm.profit = row.profit;
      this.goodsForm.bonus = row.bonus;
    },
    deleteData(row) {
      console.log(row);
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          delProfit(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.getUserList();
              this.$message.success("删除成功");
            }
          });
        })
        .catch(() => {});
    },
    submitForm() {
      if (this.type == 2) {
        console.log("现在是编辑");
        this.$refs.goodsForm.validate(async (valid) => {
          if (valid) {
            let params = {
              token: sessionStorage.getItem("token"),
              id: this.cid,
              number: this.goodsForm.number,
              profit: this.goodsForm.profit,
              bonus: this.goodsForm.bonus,
            };
            updateProfit(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("成功");
                this.getUserList();
                this.closee();
              } else {
                this.$message.error(res.data.msg);
                this.getUserList();
                this.closee();
              }
            });
          } else {
            return false;
          }
        });
      } else {
        this.$refs.goodsForm.validate(async (valid) => {
          if (valid) {
            let params = {
              token: sessionStorage.getItem("token"),
              id: this.id,
              number: this.goodsForm.number,
              profit: this.goodsForm.profit,
              bonus: this.goodsForm.bonus,
            };
            createData(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("成功");
                this.getUserList();
                this.closee();
              } else {
                this.$message.error(res.data.msg);
                this.getUserList();
                this.closee();
              }
            });
          } else {
            return false;
          }
        });
      }
    },
    show(row) {
      console.log(row);
      this.tittle = row.level;
      this.id = row.id;
      this.dialogVisible = true;
      this.getUserList();
    },
    close() {
      this.dialogVisible = false;
      this.$parent.tableshow();
    },
    closee() {
      this.goodsForm.number = "";
      this.goodsForm.profit = "";
      this.goodsForm.bonus = "";
      this.visable = false;
      this.dialogVisible = true;
      this.$parent.tableshow();
    },
    add() {
      this.typoe = 1;
      this.dialogVisible = false;
      this.visable = true;
    },
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),

        id: this.id,
      };
      listProfit(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
  },
};
</script>

<style>
</style>
