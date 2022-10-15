<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="出库商品信息"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-form-item style="float: right">
          <el-button type="primary" @click="add">新增</el-button>
        </el-form-item>
      </el-form>
      <el-table ref="dataTable" :data="userList" border>
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="商品编号" align="center">
        </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" align="center">
        </el-table-column>

        <el-table-column prop="price" label="成本价" align="center">
        </el-table-column>
        <el-table-column prop="number" label="库存数" align="center">
        </el-table-column>
        <el-table-column prop="num" label="出库数" align="center">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.num"
              @change="onInputChange(scope.row)"
            >
            </el-input>
          </template>
        </el-table-column>
        <el-table-column prop="sum_price" label="成本总价" align="center">
        </el-table-column>
        <el-table-column prop="name" label="标签" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="danger" @click="deleteData(scope.row)">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination
        style="margin-left: 350px; margin-top: 20px"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 50, 100]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog
      class="AddDialog"
      title="选择商品"
      :visible.sync="isDisable"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="closee"
    >
      <el-form label-width="auto">
        <el-form :inline="true">
          <el-form-item label="商品编号" prop="name">
            <el-input
              style="width: 150px"
              v-model="gid"
              clearable
              placeholder="请输入商品编号"
            ></el-input>
          </el-form-item>
          <el-form-item label="商品名称" prop="name">
            <el-input
              style="width: 290px"
              v-model="goods_name"
              clearable
              placeholder="请输入商品名称"
            ></el-input>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" icon="el-icon-search" @click="searchinfo"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
      </el-form>
      <page-table
        ref="dataTable"
        :data="list"
        @changeCurrentPage="changeCurrent1"
      >
        <el-table-column label="序号" align="center">
          <template slot-scope="scope">
            <span>{{ (page1.Page - 1) * page1.Size + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="goods_id" label="商品编号" align="center">
        </el-table-column>
        <el-table-column prop="goods_name" label="商品名称" align="center">
        </el-table-column>
        <el-table-column prop="number" label="当前库存" align="center">
        </el-table-column>
        <el-table-column prop="name" label="标签" align="center">
        </el-table-column>
        <el-table-column prop="price" label="成本价" align="center">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-link type="danger" v-if="scope.row.status == 1">已出库</el-link>
            <el-link
              type="success"
              v-if="scope.row.status != 1 && scope.row.number != 0"
              @click="chu(scope.row)"
              >出库</el-link
            >
          </template>
        </el-table-column>
      </page-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDisable = false">取 消</el-button>
        <el-button type="primary" @click="submitForm1">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  subOrder,
  infoList,
  infoDel,
  choGoList,
  creOrderInfo,
  saveNum,
} from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      dialogVisible: false,
      isDisable: false,
      userList: [],
      goods_name: "",
      gid: "",
      list: [],
      zhuid: "",
      //分页信息
      currentPage: 1, //当前页
      pageSize: 10, //每页条数
      total: 0, //总条数

      page1: {
        //分页信息
        Page: 1, //当前页
        Size: 10, //每页条数
        count: 0, //总条数
      },
    };
  },

  created() {},
  mounted() {},
  methods: {
    searchinfo() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: 1,
        limit: this.page1.Size,
        token: sessionStorage.getItem("token"),
        type: 2,
        gid: this.gid,
        goods_name: this.goods_name,
      };
      choGoList(params).then((res) => {
        this.page1.count = res.data.data.total;
        this.list = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page1.count,
        });
      });
    },
    checkPermission,
    // 切换分页
    changeCurrent1(page, size) {
      this.page1.Page = page;
      this.page1.Size = size;
      this.getlist();
    },
    add() {
      this.isDisable = true;
      this.getlist();
    },
    getlist() {
      let params = {
        page: this.page1.Page,
        limit: this.page1.Size,
        token: sessionStorage.getItem("token"),
        type: 2,
        oid: this.zhuid,
      };
      choGoList(params).then((res) => {
        console.log(res.data.data.data);
        this.page1.count = res.data.data.total;
        this.list = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page1.count,
        });
      });
    },
    chu(row) {
      console.log(row);
      this.$confirm("是否出库？", "提示", {
        type: "warning",
      })
        .then(async () => {
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            gid: row.goods_id,
            type: 2,
            oid: this.zhuid,
          };
          creOrderInfo(params).then((res) => {
            if (res.data.code == 200) {
              this.$message.success("成功");
            } else {
              this.$message.dannger(res.data.msg);
            }
            this.getlist();
          });
        })
        .catch(() => {});
    },
    onInputChange(row) {
      console.log(row.num);
      if (row.num > row.number) {
        this.$message.error("出库数量不能大于当前库存");
        row.num = "";
        return;
      } else {
        let params = {
          token: sessionStorage.getItem("token"),
          type: 2,
          id: row.i_id,
          num: row.num,
        };
        saveNum(params).then((res) => {
          if (res.data.code == 200) {
            this.$message.success("修改成功");
          } else {
            this.$message.dannger(res.data.msg);
          }
          this.getUserList();
        });
      }
    },
    show(type, row) {
      this.dialogVisible = true;
      console.log(type);
      this.type = type;
      if (this.type == 2) {
        console.log(row);
        this.zhuid = row.id;
        console.log(row.id, "外层主键id");
      } else {
      }
      this.getUserList();
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    //   this.pageSize = val;
    //   this.getUserList();
    // },
    // handleCurrentChange(val) {
    //   this.currentPage = val;
    //   this.getUserList();
    // },
    getUserList() {
      let params = {
        // page: this.currentPage,
        // limit: this.pageSize,
        token: sessionStorage.getItem("token"),
        type: 2,
        id: this.zhuid,
      };
      infoList(params).then((res) => {
        // console.log(res.data.data.total);
        // this.total = res.data.data.total;
        this.userList = res.data.data;
      });
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
            id: row.i_id,
            type: 2,
          };
          infoDel(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
              this.$message.success("删除成功");
            } else {
              this.$message.dannger(res.data.msg);
            }
            this.getUserList();
          });
        })
        .catch(() => {});
    },
    close() {
      this.dialogVisible = false;
      this.isDisable = false;
      this.zhuid = "";
    },
    closee() {
      this.dialogVisible = true;
      this.isDisable = false;
      this.getUserList();
    },
    submitForm1() {
      this.dialogVisible = true;
      this.isDisable = false;
      this.getUserList();
    },
    submitForm() {
      console.log(11);
      console.log(this.userList);
      if (this.userList == "") {
        this.$message.error("没有商品无法操作");
        return;
      } else {
        var that = this;
        let flag = that.userList.every((item) => !!item.num);
        if (flag == 0) {
          this.$message.error("数目不能为空");
          return;
        } else {
          if (this.type == 1) {
            console.log(this.userList);
            var ids = this.userList.map((i) => i.i_id).toString();
            console.log(ids);
            let params = {
              token: sessionStorage.getItem("token"),
              id: ids,
              type: 2,
            };
            subOrder(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("新增成功");
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              }
            });
          } else {
            console.log(this.userList);
            var ids = this.userList.map((i) => i.i_id).toString();
            console.log(ids);
            console.log("修改id", this.zhuid);
            let params = {
              token: sessionStorage.getItem("token"),
              oid: this.zhuid,
              id: ids,
              type: 2,
            };
            subOrder(params).then((res) => {
              if (res.data.code == 200) {
                this.$message.success("编辑成功");
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              } else {
                this.$message.error(res.data.msg);
                this.$parent.getUserList();
                this.close();
                this.isDisable = false;
              }
            });
          }
        }
      }
    },
  },
};
</script>

<style>
.yao {
  margin-left: -75px !important;
}
</style>
