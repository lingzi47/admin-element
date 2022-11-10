<template>
  <div class="AddDialog">
    <el-dialog
      title="sku设置"
      :visible.sync="dialogVisible"
      width="700px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form :inline="true">
        <el-form-item style="float: right">
          <el-button
            v-if="checkPermission('useradd')"
            type="primary"
            icon="el-icon-plus"
            @click="addData"
            >新增</el-button
          >
        </el-form-item>
      </el-form>
      <page-table
        ref="dataTable"
        :data="goodsList"
        @changeCurrentPage="changeCurrent"
        :header-cell-style="{ textAlign: 'center' }"
        :cell-style="{ textAlign: 'center' }"
      >
        <el-table-column
          prop="sku"
          fixed
          label="商品规格"
          :resizable="false"
        ></el-table-column>
        <el-table-column
          prop="price"
          fixed
          label="价格"
          :resizable="false"
        ></el-table-column>
        <!-- <el-table-column
          prop="new_price"
          fixed
          label="原价格"
          :resizable="false"
        ></el-table-column> -->

        <el-table-column
          prop="rebater"
          fixed
          label="推广佣金"
          :resizable="false"
        ></el-table-column>

        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          :resizable="false"
          v-if="checkPermission(['useredit', 'userdelete'])"
        >
          <template slot-scope="scope">
            <!-- <el-link
              style="margin-right: 10px"
              type="primary"
              @click="editData(2, scope.row)"
              >修改</el-link
            > -->
            <el-link
              type="danger"
              style="margin-right: 10px"
              @click="deleteData(scope.row)"
              >删除</el-link
            >
          </template>
        </el-table-column>
      </page-table>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div> -->
    </el-dialog>

    <div class="AddDialog">
      <el-dialog
        title="sku编辑"
        :visible.sync="dialogVisible1"
        width="900px"
        :close-on-click-modal="false"
        @close="close1"
      >
        <el-form
          :model="goodsForm"
          ref="goodsForm"
          :rules="rules"
          label-width="auto"
        >
          <el-col :span="12" v-for="(item, index) in list" :key="index">
            <el-form-item :label="item.name" prop="name">
              <el-select
                v-model="item.skunamearr.value"
                value-key="item.skunamearr.id"
                @change="getChange(index, item, $event)"
              >
                <el-option
                  v-for="(val, k) in list[index].skunamearr"
                  :key="k"
                  :value="val.id"
                  :label="val.value"
                />
              </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="售价" prop="price">
              <el-input
                v-model="goodsForm.price"
                placeholder="请输入售价"
              ></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="12">
            <el-form-item label="推广佣金" prop="rebater">
              <el-input
                v-model="goodsForm.rebater"
                placeholder="请输入推广佣金"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="库存" prop="count">
              <el-input
                v-model="goodsForm.count"
                placeholder="请输入库存"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="submitForm1">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { checkPermission } from "@/utils/permissions";
import pageTable from "@/components/pageTable.vue";

import { skulist, skuadd, skudel, skuedit, shopskuindex } from "@/api/shop";
export default {
  components: {
    pageTable,
  },
  data() {
    return {
      list: [],
      rules: {
        name: [{ required: true, message: "请选择属性", trigger: "blur" }],

        rebater: [
          { required: true, message: "请输入推广佣金", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入售价", trigger: "blur" }],
        count: [{ required: true, message: "请输入库存", trigger: "blur" }],
      },
      arr: [],
      goodsForm: {
        id: "",
        count: "",
        price: "",
        rebater: "",
        sku_id: "",
        goods_id: "",
      },
      id: "",
      index: "",
      printerSelect: [],
      token: "",
      goodsList: [],
      dialogVisible: false,
      dialogVisible1: false,
      sku_id: [],
    };
  },
  created() {
    this.shopList(); //获取列表
  },
  mounted: function () {},
  methods: {
    // 获取打印内容下拉框的选择项,保存到数组
    getChange(index, item, $event) {
      this.arr[index] = $event;
    },

    checkPermission,
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shopList();
    },
    addData() {
      // 1:新增，2:编辑
      this.type = 1;
      this.goodsForm = {};
      this.dialogVisible1 = true;
    },
    editData(type, row) {
      this.type = 2;
      this.goodsForm = row;
      this.goodsForm.id = row.id;
      this.dialogVisible1 = true;
    },
    async shopskuindex() {
      let res = await shopskuindex({
        goods_id: this.id,
        token: sessionStorage.getItem("token"),
      });
      if (res.status == 200) {
        this.list = res.data.data;
      }
    },
    //商品列表
    async shopList() {
      let res = await skulist({
        goods_id: this.id,
        token: sessionStorage.getItem("token"),
      });
      if (res.status == 200) {
        this.goodsList = res.data.data;
      }
    },

    //删除
    deleteData(row) {
      this.$confirm("是否删除？", "提示", {
        type: "warning",
      })
        .then(async () => {
          let res = await skudel({
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

    show(row) {
      this.id = row.id;

      this.dialogVisible = true;
      this.shopList();
      this.shopskuindex();
    },
    close() {
      this.dialogVisible = false;
    },
    close1() {
      this.dialogVisible1 = false;
      this.dialogVisible = true;
    },
    async submitForm1() {
      if (this.type == 2) {
        let res = await skuedit({
          sku_id: this.arr.join(","),
          goods_id: this.id,
          price: this.goodsForm.price,
          id: this.goodsForm.id,
          rebater: this.goodsForm.rebater,
          count: this.goodsForm.count,
          token: sessionStorage.getItem("token"),
        });
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.shopList();
        }
      } else {
        let res = await skuadd({
          sku_id: this.arr.join(","),
          goods_id: this.id,
          price: this.goodsForm.price,
          rebater: this.goodsForm.rebater,
          count: this.goodsForm.count,
          token: sessionStorage.getItem("token"),
        });
        if (res.data.code == 200) {
          this.$message.success("操作成功");
          this.shopList();
        }
      }

      this.$parent.shopList();
      this.close1();
    },
  },
};
</script>

<style>
</style>
