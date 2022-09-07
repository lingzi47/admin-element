<template>
  <div class="AddDialog">
    <el-dialog
      :title="type == 1 ? '新增' : '编辑'"
      :visible.sync="dialogVisible"
      width="900px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form
        :model="goodsForm"
        ref="goodsForm"
        :rules="rules"
        label-width="auto"
      >
        <el-col :span="12">
          <el-form-item label="名称" prop="goods_name">
            <el-input v-model="goodsForm.goods_name" placeholder="请输入名称">
            </el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="库存" prop="have_num">
            <el-input
              v-model="goodsForm.have_num"
              placeholder="请输入库存"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item
            label="分类"
            prop="type_id"
            :rules="[
              { required: true, message: '分类不能为空', trigger: 'blur' },
            ]"
          >
            <el-cascader
              ref="cascader"
              v-model="goodsForm.type_id"
              :options="typelist"
              class="typewidth"
              :props="customProps"
              filterable
              clearable
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="现价格" prop="new_price">
            <el-input
              v-model="goodsForm.new_price"
              placeholder="请输入现价格"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="原价格" prop="old_price">
            <el-input
              v-model="goodsForm.old_price"
              placeholder="请输入原价格"
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
          <el-form-item label="总销售" prop="sale_num">
            <el-input
              v-model="goodsForm.sale_num"
              placeholder="请输入总销售"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="保障" prop="guarantee">
            <el-input
              v-model="goodsForm.guarantee"
              placeholder="请输入保障"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="标签" prop="label">
            <el-input
              v-model="goodsForm.label"
              placeholder="请输入标签"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="排序" prop="weigh">
            <el-input
              v-model="goodsForm.weigh"
              placeholder="请输入排序"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="简介" prop="brief">
            <el-input
              v-model="goodsForm.brief"
              placeholder="请输入简介"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="封面图" prop="goods_img">
            <el-upload
              class="avatar-uploader"
              action=" https://y4.wjw.cool/command/ossUpload?filename=file"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" /><i
                v-else
                class="el-icon-plus avatar-uploader-icon"
              ></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="商品图">
            <el-upload
              action=" https://y4.wjw.cool/command/ossUpload?filename=file"
              list-type="picture-card"
              class="upload"
              :file-list="fileList"
              :on-success="banneradd"
              :before-upload="beforeAvatarUpload"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item label="商品详情"
            ><file-fu
              v-model="goodsForm.content"
              :isClear="isClear"
              @change="change"
            ></file-fu>
          </el-form-item>
        </el-col>
      </el-form>
      <div slot="footer" class="dialog-footer" v-if="this.type == 1">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
      <div slot="footer" class="dialog-footer" v-if="this.type == 2">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { shopGoodsadd, shoptype, shopGoodsedit } from "@/api/shop";
import { getRoles } from "@/api/role";
import fileFu from "./fileFu.vue";

export default {
  name: "AddDialog",
  components: {
    fileFu,
  },
  data() {
    return {
      isClear: false,
      customProps: {
        multiple: false, // 启用多选
        emitPath: true, // 只返回该节点的值
        value: "id", // 自定义当前数组的键名
        label: "name",
        children: "children",
      },
      imageUrl: "",
      banners: [],
      id: "",
      fileList: [],
      typelist: [],
      rolesList: [], //角色列表
      type: 1, //1新增，2编辑
      dialogVisible: false,
      phoneEditor: null,
      token: "",
      goodstype: { type: 4 },
      goodsForm: {
        goods_name: "",
        have_num: "",
        brief: "",
        label: "",
        guarantee: "",
        sale_num: "",
        rebater: "",
        old_price: "",
        new_price: "",
        banners: [],
        type_id: "",
        content: "",
        weigh: "",
        goods_img: "",
      },
      rules: {
        goods_name: [
          { required: true, message: "请输入名称", trigger: "blur" },
        ],
        have_num: [{ required: true, message: "请输入库存", trigger: "blur" }],
        brief: [{ required: true, message: "请输入简介", trigger: "blur" }],
        label: [{ required: true, message: "请输入标签", trigger: "blur" }],
        guarantee: [{ required: true, message: "请输入保障", trigger: "blur" }],
        sale_num: [
          { required: true, message: "请输入总销售", trigger: "blur" },
        ],
        weigh: [{ required: true, message: "请输入排序", trigger: "blur" }],
        rebater: [
          { required: true, message: "请输入推广佣金", trigger: "blur" },
        ],
        old_price: [
          { required: true, message: "请输入原价格", trigger: "blur" },
        ],
        new_price: [
          { required: true, message: "请输入现价格", trigger: "blur" },
        ],
        type_id: [{ required: true, message: "分类不能为空", trigger: "blur" }],
        goods_img: [{ required: true, message: "请选择图片", trigger: "blur" }],
        content: [{ required: true, message: "请输入", trigger: "blur" }],
      },
    };
  },
  created: function () {
    this.getRolesList(); //获取角色
    this.token = sessionStorage.getItem("token");
  },
  mounted: function () {},
  methods: {
    handleChange(val) {
      //console.log(val);
      let nodesInfo = this.$refs["cascader"].getCheckedNodes();
      //console.log(nodesInfo[0].value);
      this.goodsForm.type_id = nodesInfo[0].value;
    },
    change(val) {
      this.goodsForm.content = val;
      //console.log(this.goodsForm.content);
    },
    handleEdit() {
      let oldProcedure = this.$refs["fileFu"].getVal();
      //console.log(oldProcedure);
    },
    async getRolesList() {
      let res = await getRoles({ token: sessionStorage.getItem("token") });
      if (res.status == 200) {
        this.rolesList = res.data;
      }
    },

    //分类选择

    async gettypelist() {
      let res = await shoptype({
        goodstype: this.goodstype,
        token: sessionStorage.getItem("token"),
      });
      if (res.status == 200) {
        //console.log(res);
        this.typelist = res.data.data;
        //console.log(this.typelist);
      }
    },

    show(type, row) {
      this.gettypelist();
      this.type = type;
      this.dialogVisible = true;
      if (type == 1) {
        //console.log(row);
        this.goodsForm = {};
        this.imageUrl = "";
        this.goodsForm.type_id = "";
        this.banners = [];
        this.fileList = [];
      } else {
        console.log(row);
        this.goodsForm = row;
        this.id = row.id;
        this.imageUrl = this.goodsForm.goods_img;
        this.goodsForm.banners = row.banners;
        let pictureList = this.goodsForm.banners.split(",");
        this.banners = pictureList;
        this.fileList = pictureList.map((item) => {
          return {
            name: item,
            url: item,
          };
        });
      }
    },

    close() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.goodsForm.clearValidate(); //关闭清空校验规则
      });
    },

    handleAvatarSuccess(res, file) {
      //console.log(file);
      //console.log(res);
      let imgurl = res.data;
      this.imageUrl = imgurl;
      this.goodsForm.goods_img = imgurl;
    },
    handleRemove(res, file, fileList) {
      console.log(res);
      console.log(res.name);
      let outimg = res.name;
      console.log(outimg);

      let index = this.banners.findIndex((item) => {
        if (item == "outimg") {
          return true;
        }
      });
      this.banners.splice(index, 1);
      console.log(this.banners);
    },
    banneradd(res, file, fileList) {
      // console.log(fileList);
      console.log(res);
      let imgurl = res.data;
      this.banners.push(imgurl);
      console.log(this.banners);
      console.log(fileList);
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    },

    submitForm() {
      this.$refs.goodsForm.validate(async (valid) => {
        if (valid) {
          this.goodsForm.banners = this.banners.join(",");
          if (this.type == 1) {
            let res = await shopGoodsadd({
              goods_name: this.goodsForm.goods_name,
              have_num: this.goodsForm.have_num,
              brief: this.goodsForm.brief,
              label: this.goodsForm.label,
              guarantee: this.goodsForm.guarantee,
              sale_num: this.goodsForm.sale_num,
              weigh: this.goodsForm.weigh,
              rebater: this.goodsForm.rebater,
              old_price: this.goodsForm.old_price,
              new_price: this.goodsForm.new_price,
              type_id: this.goodsForm.type_id,
              content: this.goodsForm.content,
              shop_type: 4,
              goods_img: this.goodsForm.goods_img,
              banners: this.goodsForm.banners,
              token: sessionStorage.getItem("token"),
            });

            if (res.status == 200) {
              this.$message.success("新增成功");
              this.$parent.shopList();
              this.close();
            }
          } else if (this.type == 2) {
            let res = await shopGoodsedit({
              goods_name: this.goodsForm.goods_name,
              have_num: this.goodsForm.have_num,
              brief: this.goodsForm.brief,
              label: this.goodsForm.label,
              guarantee: this.goodsForm.guarantee,
              sale_num: this.goodsForm.sale_num,
              rebater: this.goodsForm.rebater,
              weigh: this.goodsForm.weigh,
              old_price: this.goodsForm.old_price,
              new_price: this.goodsForm.new_price,
              type_id: this.goodsForm.type_id,
              content: this.goodsForm.content,
              banners: this.goodsForm.banners,
              shop_type: 4,
              goods_img: this.goodsForm.goods_img,
              token: sessionStorage.getItem("token"),
              id: this.id,
            });
            if (res.status == 200) {
              this.$message.success("编辑成功");
              this.$parent.shopList();
              this.close();
            }
          } else {
          }
          this.$parent.shopList();
          this.close();
        } else {
          return false;
        }
      });
    },
  },
};
</script>

</script>


<style lang="scss" scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.xian {
  margin-left: -75px !important;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
