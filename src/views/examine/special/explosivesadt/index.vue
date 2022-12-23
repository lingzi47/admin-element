<template>
  <div class="user">
    <page-table
      ref="dataTable"
      :data="userList"
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

      <el-table-column prop="id" label="id" align="center"> </el-table-column>
      <el-table-column prop="goods_name" label="商品名称" align="center">
      </el-table-column>
      <el-table-column prop="new_price" label="价格" align="center">
      </el-table-column>
      <el-table-column label="封面图片" width="160" :resizable="false"
        ><template slot-scope="scope">
          <img :src="scope.row.goods_img" min-width="70" height="70" />
        </template>
      </el-table-column>
      <el-table-column prop="name" label="分类" align="center">
      </el-table-column>
      <el-table-column prop="weigh" label="排序" align="center">
      </el-table-column>
      <el-table-column prop="shop_id" label="商家" align="center">
      </el-table-column>

      <el-table-column label="操作" width="193" align="center">
        <template slot-scope="scope">
          <el-button @click="set(scope.row)" type="text" size="small"
            >处理</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <el-dialog
      title="审核"
      :visible.sync="dialogVisible"
      width="400px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="20">
          <el-col :span="24">
            <el-form-item label="是否允许该条信息审核通过" prop="role_name">
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="refuse">拒绝</el-button>
        <el-button type="primary" @click="submitForm">通过</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  shopGoodsindex,
  shopGoodssta,
  userStart,
  userBlm,
} from "@/request/api";
import { checkPermission } from "@/utils/permissions";

import pageTable from "@/components/pageTable.vue";

export default {
  components: {
    pageTable,
  },
  data() {
    return {
      userList: [], // 用户列表
      dialogVisible: false,
      id: "",
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: "", //总条数
      },
    };
  },
  watch: {},
  created() {
    this.getUserList();
  },
  mounted() {},
  computed: {},
  methods: {
    close() {
      this.dialogVisible = false;
    },
    submitForm() {
      let params = {
        sta: 20,
        id: this.id,
        token: sessionStorage.getItem("token"),
      };
      shopGoodssta(params).then((res) => {
        let msg = res.data.msg;

        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.getUserList();
        } else {
          this.$message(msg);
        }
      });

      this.dialogVisible = false;
    },

    refuse() {
      let params = {
        sta: 30,
        id: this.id,
        token: sessionStorage.getItem("token"),
      };
      shopGoodssta(params).then((res) => {
        let msg = res.data.msg;

        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.getUserList();
        } else {
          this.$message(msg);
        }
      });

      this.dialogVisible = false;
    },
    set(row) {
      this.id = row.id;
      this.dialogVisible = true;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.getUserList();
    },

    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.page,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        sta: 10,
        shop_type: 5,
      };
      shopGoodsindex(params).then((res) => {
        this.page.total = res.data.count;

        this.userList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
