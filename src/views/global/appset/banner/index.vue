<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item style="float: right">
          <el-button
            type="primary"
            @click="addData()"
            style="margin-bottom: 10px"
            >添加</el-button
          >
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

      <el-table-column label="banner图片" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img" min-width="70" height="70" />
        </template>
      </el-table-column>
      <el-table-column
        prop="people"
        label="商品类型 (shop_type)"
        align="center"
      >
        <template slot-scope="scope">
          <span v-if="scope.row.shop_type == 1">预见专区</span>
          <span v-if="scope.row.shop_type == 2">遇见商城</span>
          <span v-if="scope.row.shop_type == 3">遇见生活</span>
          <span v-if="scope.row.shop_type == 4">推广专区</span>
          <span v-if="scope.row.shop_type == 5">APP轮播</span>
          <span v-if="scope.row.shop_type == 99">首页banner</span>
          <span v-if="scope.row.shop_type == 88">活动中心</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="goodstype"
        label="商品分类(goodstype)"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="weigh" label="排序" align="center">
      </el-table-column>
      <el-table-column prop="totype" label="分类" align="center">
      </el-table-column>
      <el-table-column prop="toinfo" label="信息(toinfo)" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="editData(2, scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button @click="deleteData(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </page-table>
    <edit-data ref="editData" />
  </div>
</template>

<script>
import { bannerlist, bannerdel, userStart, userBlm } from "@/request/api";
import { checkPermission } from "@/utils/permissions";
import editData from "./components/editData.vue";
import pageTable from "@/components/pageTable.vue";

export default {
  name: "user",
  components: {
    pageTable,
    editData,
  },
  data() {
    return {
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
  watch: {},
  created() {
    this.getUserList(); //获取用户列表
  },
  mounted() {},
  computed: {},
  methods: {
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.currentPage = page;
      this.page.pageSize = size;
      this.getUserList();
    },
    //监听表格多选

    getUserList() {
      //console.log(this.form.time);
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
      };
      bannerlist(params).then((res) => {
        this.userList = res.data.data;
        this.page.total = res.data.count;

        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
    addData() {
      // 1:新增，2:编辑
      this.$refs.editData.show(1, {});
    },

    editData(type, row) {
      let rowData = row;
      this.$refs.editData.show(2, JSON.parse(JSON.stringify(rowData)));
    },
    deleteData(row) {
      this.$confirm("是否删除此数据？", "提示", {
        type: "warning",
      })
        .then(async () => {
          //console.log(id);
          let params = {
            token: sessionStorage.getItem("token"),
            id: row.id,
          };
          bannerdel(params).then((res) => {
            //console.log(res.data);
            if (res.data.code == 200) {
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
  },
};
</script>

<style lang="scss" scoped>
</style>
