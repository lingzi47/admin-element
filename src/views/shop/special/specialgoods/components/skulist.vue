<template>
  <div class="AddDialog">
    <el-dialog title="SKU规格" :visible.sync="dialogVisible" width="900px">
      <div class="addsku">
        <el-button type="primary" icon="el-icon-plus" @click="addsku()"
          >新增</el-button
        >
      </div>
      <div class="user">
        <page-table
          ref="dataTable"
          :data="skuList"
          @changeCurrentPage="changeCurrent"
        >
          <el-table-column
            type="index"
            fixed
            width="40"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="name"
            fixed
            label="商品规格"
            width="240"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            prop="skuname"
            fixed
            label="商品属性"
            :resizable="false"
          ></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="160"
            :resizable="false"
          >
            <template slot-scope="scope">
              <el-link type="primary" @click="editsku(scope.row)">编辑</el-link>
              <el-link
                type="danger"
                style="margin-left: 10px"
                @click="deleteData(2, scope.row)"
                >删除</el-link
              >
            </template>
          </el-table-column>
        </page-table>
        <!-- 新增编辑弹窗 -->
        <!-- <add-sku ref="addskuData" /> -->
      </div>
    </el-dialog>
    <div id="">
      <el-dialog
        title="SKU规格新增"
        :visible.sync="dialogVisible1"
        width="400px"
      >
        <el-form
          :model="skulist"
          ref="skulist"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item prop="name" label="商品规格">
            <el-input v-model="skulist.name"></el-input>
          </el-form-item>
          <el-form-item
            v-for="(domain, index) in skulist.domains"
            :label="'属性' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
          >
            <el-input v-model="domain.value"></el-input
            ><el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="addDomain">新增属性</el-button>
            <!-- <el-button @click="resetForm('skulist')">重置</el-button> -->
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { shopskuindex, shopskuadd, shopskudel, skuedit } from "@/api/shop";
import pageTable from "@/components/pageTable.vue";
// import addSku from "./addOrEditSku.vue";

export default {
  name: "SkuIndex",
  components: {
    pageTable,
    // addSku,
  },
  data() {
    return {
      skulist: {
        domains: [
          {
            value: "",
          },
        ],
        name: "",
      },
      id: "",
      form: {},
      goodid: "",
      skuList: [], //列表
      dialogVisible: false,
      dialogVisible1: false,
      page: {
        //分页信息
        page: 1, //当前页
        limit: 10, //每页条数
        total: 0, //总条数
      },
      token: "",
    };
  },
  created() {
    this.token = sessionStorage.getItem("token");
  },
  mounted: function () {},
  methods: {
    // 切换分页
    changeCurrent(page, size) {
      this.page.page = page;
      this.page.limit = size;
      this.shopsku(this.goodid);
    },

    //SKU列表
    async shopsku(goodid) {
      this.form.goods_id = goodid;
      let res = await shopskuindex({
        page: this.page.page,
        limit: this.page.limit,
        goods_id: this.form.goods_id,
        token: sessionStorage.getItem("token"),
      });
      if (res.status == 200) {
        this.page.total = res.data.count;
        this.skuList = res.data.data;
        this.$refs.dataTable.setPageInfo({
          total: res.data.count,
        });
      }
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.skulist.domains.indexOf(item);
      if (index !== -1) {
        this.skulist.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.skulist.domains.push({
        value: "",
        key: Date.now(),
      });
    },

    async submitForm() {
      if (this.type == 2) {
        let res = await skuedit({
          domains: this.skulist.domains,
          token: sessionStorage.getItem("token"),
          name: this.skulist.name,
          goods_id: this.form.goods_id,
          id: this.id,
        });
        if (res.status == 200) {
          this.$message.success("编辑成功");
        }
        this.dialogVisible1 = false;
        this.shopsku(this.goodid);
      } else {
        this.$refs.skulist.validate(async (valid) => {
          if (valid) {
            this.skulist.goods_id = this.goodid;
            let res = await shopskuadd({
              domains: this.skulist.domains,
              token: sessionStorage.getItem("token"),
              name: this.skulist.name,
              goods_id: this.form.goods_id,
            });
            if (res.status == 200) {
              this.$message.success("新增成功");
            }
            this.dialogVisible1 = false;
            this.shopsku(this.goodid);
          } else {
            return false;
          }
        });
      }
    },

    show(type, row) {
      this.type = type;
      this.dialogVisible = true;
      this.shopsku(row.id);
      this.goodid = row.id;
    },
    editsku(row) {
      this.type = 2;
      this.skulist.name = row.name;
      this.skulist.domains = row.skunamearr;
      this.id = row.id;
      this.dialogVisible1 = true;
    },
    //sku新增
    addsku() {
      this.type = 1;
      this.skulist.name = "";
      this.skulist.domains = [];
      this.dialogVisible1 = true;
    },
    deleteData(type, row) {
      if ((type == 1 && this.tableSelectList.length == 1) || type == 2) {
        this.$confirm("是否删除此规格？", "提示", {
          type: "warning",
        })
          .then(async () => {
            let res = await shopskudel({
              id: row.id,
              token: sessionStorage.getItem("token"),
            });
            if (res.status == 200) {
              this.shopsku(this.goodid);
              this.$message.success("删除成功");
            }
          })
          .catch(() => {});
      } else {
        this.$message.warning("请选择一条数据删除");
      }
    },
  },
};
</script>

</script>

<style lang="scss" scoped>
.wangeditor {
  .explain {
    margin-bottom: 10px;

    a {
      color: #409eff;
    }

    a:hover {
      color: #66b1ff;
      text-decoration: underline;
    }
  }

  /deep/ #websiteEditorElem {
    .w-e-toolbar {
      z-index: 11 !important;
    }
    .w-e-text-container {
      z-index: 10 !important;
    }
  }
}

.addsku {
  margin-bottom: 10px;
}
</style>

