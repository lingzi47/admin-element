<template>
  <div class="AddDialog">
    <el-dialog
      title="评论设置"
      :visible.sync="dialogVisible"
      width="900px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
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
        <!-- <el-table-column prop="id" label="id" align="center"> </el-table-column> -->
        <el-table-column prop="uid" label="用户id" align="center">
        </el-table-column>

        <el-table-column prop="remark" label="评论" align="center">
        </el-table-column>
        <el-table-column prop="create_time" label="评论时间" align="center">
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link
              type="danger"
              style="margin-left: 10px"
              @click="deleteData(scope.row)"
              >删除</el-link
            >
            <el-link style="margin-left: 10px" @click="edit(scope.row)"
              >编辑</el-link
            >
          </template>
        </el-table-column>
      </page-table>
    </el-dialog>
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="visable"
      width="700px"
      :close-on-click-modal="false"
      @close="close1"
    >
      <el-form
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="auto"
      >
        <el-col :span="24">
          <el-form-item label="用户id" prop="uid" v-if="this.type == 1">
            <el-input
              v-model="ruleForm.uid"
              placeholder="请输入用户id"
              style="width: 350px"
            >
            </el-input>
          </el-form-item>
          <el-form-item label="用户id" prop="uid" v-else>
            {{ ruleForm.uid }}
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="评论内容" prop="remark">
            <el-input
              clearable
              type="textarea"
              v-model="ruleForm.remark"
              style="width: 350px"
              placeholder="请输入评论内容："
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="时间" prop="create_time">
            <el-date-picker
              style="width: 200px"
              v-model="ruleForm.create_time"
              value-format="yyyy-MM-dd HH:mm:ss"
              type="datetime"
              placeholder="选择日期时间"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="visable = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { dislist, disadd, disdel, disupdate } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "pkSet",
  components: { pageTable },
  data() {
    return {
      id: "",
      gid: "",
      token: "",
      type: "",
      dialogVisible: false,
      visable: false,
      ruleForm: {
        uid: "",
        remark: "",
        create_time: "",
      },
      userList: [],
      page: {
        //分页信息
        currentPage: 1, //当前页
        pageSize: 10, //每页条数
        total: 0, //总条数
      },
      rules: {
        uid: [{ required: true, message: "请输入用户id", trigger: "blur" }],
        remark: [
          { required: true, message: "请输入评论内容", trigger: "blur" },
        ],
        create_time: [
          { required: true, message: "请选择时间", trigger: "blur" },
        ],
      },
    };
  },
  created: function () {},
  mounted: function () {},
  methods: {
    close1() {
      this.ruleForm.uid = "";
      this.ruleForm.remark = "";
      this.ruleForm.create_time = "";
      this.visable = false;
      this.shoplist();
    },
    show(row) {
      this.id = row.id;
      this.dialogVisible = true;
      this.shoplist();
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.shoplist();
    },
    shoplist() {
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        goods_id: this.id,
      };
      dislist(params).then((res) => {
        this.userList = res.data.data;
        this.page.total = res.data.count;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    close() {
      this.dialogVisible = false;
    },
    add() {
      this.visable = true;
      this.type = 1;
    },
    edit(row) {
      this.visable = true;
      this.type = 2;
      this.gid = row.id;
      this.ruleForm.uid = row.uid;
      this.ruleForm.create_time = row.create_time;
      this.ruleForm.remark = row.remark;
    },
    submitForm() {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          if (this.type == 1) {
            let params = {
              token: sessionStorage.getItem("token"),
              goods_id: this.id,
              uid: this.ruleForm.uid,
              remark: this.ruleForm.remark,
              create_time: this.ruleForm.create_time,
            };
            disadd(params).then((res) => {
              if (res.data.status == 200) {
                this.$message.success("添加成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.close1();
              this.shoplist();
            });
          } else {
            let params = {
              token: sessionStorage.getItem("token"),
              // goods_id: this.goods_id,
              // uid: this.ruleForm.uid,
              remark: this.ruleForm.remark,
              id: this.gid,
              create_time: this.ruleForm.create_time,
            };
            disupdate(params).then((res) => {
              if (res.data.status == 200) {
                this.$message.success("编辑成功");
              } else {
                this.$message.error(res.data.msg);
              }
              this.close1();
            });
          }
        } else {
          return false;
        }
      });
    },
    deleteData(row) {
      this.$confirm("是否删除此信息？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          disdel(params).then((res) => {
            if (res.data.status == 200) {
              this.$message.success("删除成功");
            } else {
              this.$message.error(res.data.msg);
            }
            this.shoplist();
          });
        })
        .catch(() => {});
    },
  },
};
</script>

<style>
</style>
