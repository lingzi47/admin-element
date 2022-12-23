<template>
  <div class="user">
    <div class="block-quote">
      <el-form :inline="true" :model="form" ref="form">
        <el-form-item label="ID" prop="id">
          <el-input
            v-model="form.id"
            clearable
            placeholder="请输入ID"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="goods_name">
          <el-input
            v-model="form.goods_name"
            clearable
            placeholder="请输入商品名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="type_id">
          <el-cascader
            ref="cascader"
            v-model="form.type_id"
            :options="typelist"
            class="typewidth"
            :props="customProps"
            filterable
            clearable
            @change="handleChange"
          ></el-cascader>
        </el-form-item>

        <el-form-item label="上/下架" prop="is_show">
          <el-select v-model="form.is_show" clearable placeholder="请选择">
            <el-option label="全部" value="">全部</el-option>
            <el-option label="上架" value="10">上架</el-option>
            <el-option label="下架" value="20">下架</el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('usersearch')"
            type="primary"
            icon="el-icon-search"
            @click="searchinfo"
            >搜索</el-button
          >
          <el-button
            v-if="checkPermission('useradd')"
            type="primary"
            icon="el-icon-plus"
            @click="addData"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <page-table
      ref="dataTable"
      :data="goodsList"
      @changeCurrentPage="changeCurrent"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
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
        prop="id"
        fixed
        label="商品id"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="goods_name"
        fixed
        label="商品名称"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="new_price"
        fixed
        label="价格"
        width="100"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="id"
        fixed
        label="商品规格"
        width="220"
        :resizable="false"
      >
        <template slot-scope="scope">
          <el-button @click="sku(1, scope.row)">sku规格</el-button>
          <el-button @click="skuset(scope.row)">sku设置</el-button>
        </template>
      </el-table-column>
      <el-table-column fixed label="封面图片" width="160" :resizable="false"
        ><template slot-scope="scope">
          <img :src="scope.row.goods_img" min-width="70" height="70" />
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        fixed
        label="分类"
        width="140"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="weigh"
        fixed
        label="排序"
        width="60"
        :resizable="false"
      ></el-table-column>
      <el-table-column
        prop="shop_id"
        fixed
        label="商家"
        width="140"
        :resizable="false"
      ></el-table-column>

      <el-table-column label="上/下架" width="90" :resizable="false">
        <template slot-scope="scope">
          <el-button v-if="scope.row.is_show == 10" size="mini" type="success"
            >上架</el-button
          >
          <el-button v-else size="mini" type="danger">下架</el-button>
        </template>
      </el-table-column>

      <el-table-column label="审核状态" width="100" :resizable="false">
        <template slot-scope="scope">
          <el-button v-if="scope.row.sta == 10" size="mini" type="success"
            >待审核</el-button
          >
          <el-button v-if="scope.row.sta == 20" size="mini" type="danger"
            >已通过</el-button
          >
          <el-button v-if="scope.row.sta == 30" size="mini" type="danger"
            >已拒绝</el-button
          >
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
            v-if="scope.row.is_show == 10"
            type="primary"
            style="margin-right: 10px"
            @click="goodsup(scope.row)"
            >下架</el-link
          >
          <el-link
            v-else
            type="primary"
            style="margin-right: 10px"
            @click="goodsup(scope.row)"
            >上架</el-link
          >
          <el-link
            style="margin-right: 10px"
            type="primary"
            @click="datashow(3, scope.row)"
            >查看</el-link
          >
          <el-link
            style="margin-right: 10px"
            type="primary"
            @click="editData(2, scope.row)"
            >编辑</el-link
          >
          <el-link
            type="danger"
            style="margin-right: 10px"
            @click="deleteData(scope.row)"
            >删除</el-link
          >
          <el-link
            style="margin-right: 10px"
            type="primary"
            @click="pkset(scope.row)"
            >PK值设置</el-link
          >
          <el-link
            style="margin-right: 10px"
            type="primary"
            @click="pin(scope.row)"
            >评论</el-link
          >
        </template>
      </el-table-column>
    </page-table>
    <!-- 新增编辑弹窗 -->
    <add-dialog ref="addData" />
    <set-pin ref="pinSet" />
    <!-- sku规格弹窗 -->
    <sku-index ref="skulist" />
    <set-pk ref="pkSet" />
    <set-sku ref="skuSet" />
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import { shopGoods, shoptype, shopGoodsup, shopGoodsdel } from "@/api/shop";

import pageTable from "@/components/pageTable.vue";
import addDialog from "./components/addOrEditDialog.vue";
import skuIndex from "./components/skulist.vue";
import setPk from "./components/pkSet.vue";
import setSku from "./components/skuSet.vue";
import setPin from "./components/pinSet.vue";
export default {
  name: "user",
  components: {
    pageTable,
    addDialog,
    skuIndex,
    setPk,
    setPin,
    setSku,
  },
  data() {
    return {
      customProps: {
        multiple: false, // 启用多选
        emitPath: true, // 只返回该节点的值
        value: "id", // 自定义当前数组的键名
        label: "name",
        children: "children",
      },
      typelist: [],
      list: [],
      goodsList: [],
      token: "",
      is_show: "",
      form: {
        id: "",
        type_id: "",
        goods_name: "",
      },
      goodstype: { type: 4 },
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: "", //总条数
      },
      tableSelectList: [], // 多选列表
    };
  },
  created() {
    this.token = sessionStorage.getItem("token");
    this.shopList(); //获取列表
    this.gettypelist();
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
    handleChange(val) {
      let nodesInfo = this.$refs["cascader"].getCheckedNodes();
      this.form.type_id = nodesInfo[0].value;
    },
    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shopList();
    },
    //商品列表
    async searchinfo() {
      this.page.page = 1;

      let res = await shopGoods({
        page: 1,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        shop_type: 4,
        is_show: this.form.is_show,
        id: this.form.id,
        type_id: this.form.type_id,
        goods_name: this.form.goods_name,
      });
      if (res.status == 200) {
        this.page.total = res.data.count;
        this.goodsList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      }
    },
    //商品列表
    async shopList() {
      this.form.shop_type = 4;
      let res = await shopGoods({
        page: this.page.page,
        limit: this.page.limit,
        token: sessionStorage.getItem("token"),
        shop_type: 4,
        is_show: this.form.is_show,
        id: this.form.id,
        type_id: this.form.type_id,
        goods_name: this.form.goods_name,
      });
      if (res.status == 200) {
        this.page.total = res.data.count;
        this.goodsList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      }
    },

    //上下架
    async goodsup(row) {
      if (row.is_show == 20) {
        this.is_show = 10;
      } else {
        this.is_show = 20;
      }
      this.$confirm("是否上下架？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let res = await shopGoodsup({
            id: row.id,
            is_show: this.is_show,
            token: sessionStorage.getItem("token"),
          });
          if (res.status == 200) {
            this.shopList();
            this.$message.success("操作成功");
          }
        })
        .catch(() => {});
    },

    //分类选择
    async gettypelist() {
      let res = await shoptype({
        goodstype: this.goodstype,
        token: sessionStorage.getItem("token"),
      });
      if (res.status == 200) {
        this.typelist = res.data.data;
      }
    },
    pin(row) {
      this.$refs.pinSet.show(JSON.parse(JSON.stringify(row)));
    },
    //新增
    addData() {
      // 1:新增，2:编辑
      this.$refs.addData.show(1, {});
    },
    //新增
    datashow(type, row) {
      // 1:新增，2:编辑
      this.$refs.addData.show(3, JSON.parse(JSON.stringify(row)));
    },

    //sku规格
    sku(type, row) {
      this.$refs.skulist.show(1, JSON.parse(JSON.stringify(row)));
    },
    //pk
    pkset(row) {
      this.$refs.pkSet.show(JSON.parse(JSON.stringify(row)));
    },
    skuset(row) {
      this.$refs.skuSet.show(JSON.parse(JSON.stringify(row)));
    },
    editData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        let rowData = type == 1 ? this.tableSelectList[0] : row;
        // 1:新增，2:编辑
        this.$refs.addData.show(2, JSON.parse(JSON.stringify(rowData)));
      } else {
        this.$message.warning("请选择一条数据编辑");
      }
    },

    //删除
    deleteData(row) {
      this.$confirm("是否删除？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let res = await shopGoodsdel({
            id: row.id,
            token: sessionStorage.getItem("token"),
          });
          if (res.status == 200) {
            this.shopList();
            this.$message.success("删除成功");
          }
        })
        .catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.typewidth {
  width: 400px;
}
</style>
