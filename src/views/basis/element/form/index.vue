<template>
  <div class="form">
    <div class="block-quote">
      <el-form
        :model="form"
        ref="form"
        label-width="130px"
        style="width: 600px"
      >
        <el-form-item label="输入框：" prop="text">
          <el-input
            v-model="form.text"
            clearable
            placeholder="请输入"
            style="width: calc(100% - 250px)"
          ></el-input>
          <el-link type="info" :underline="false" class="input-explain"
            >添加 show-password 属性即为密码框</el-link
          >
        </el-form-item>
        <el-form-item label="单选框：" prop="radio">
          <el-radio v-model="form.radio" label="1">选项1</el-radio>
          <el-radio v-model="form.radio" label="2">选项2</el-radio>
        </el-form-item>
        <el-form-item label="多选框：" prop="checkbox">
          <el-checkbox v-model="form.checkbox[0]">选项1</el-checkbox>
          <el-checkbox v-model="form.checkbox[1]">选项2</el-checkbox>
          <el-checkbox v-model="form.checkbox[2]">选项3</el-checkbox>
        </el-form-item>
        <el-form-item label="下拉框：">
          <el-form-item prop="select" style="display: inline-block">
            <el-select v-model="form.select" clearable placeholder="基础下拉框">
              <el-option label="北京" value="1"></el-option>
              <el-option label="上海" value="2"></el-option>
              <el-option label="武汉" value="3"></el-option>
              <el-option label="西安" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="filterableSelect"
            style="display: inline-block; margin-left: 10px"
          >
            <el-select
              v-model="form.filterableSelect"
              clearable
              filterable
              placeholder="下拉搜索框"
            >
              <el-option label="北京" value="1"></el-option>
              <el-option label="上海" value="2"></el-option>
              <el-option label="武汉" value="3"></el-option>
              <el-option label="西安" value="4"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            prop="multipleSelect"
            style="display: inline-block; margin-top: 10px"
          >
            <el-select
              v-model="form.multipleSelect"
              clearable
              multiple
              placeholder="下拉多选框"
            >
              <el-option label="北京" value="1"></el-option>
              <el-option label="上海" value="2"></el-option>
              <el-option label="武汉" value="3"></el-option>
              <el-option label="西安" value="4"></el-option>
            </el-select>
          </el-form-item>
        </el-form-item>
        <el-form-item label="级联选择器：" prop="textarea">
          <el-cascader
            v-model="form.cascader"
            :options="roleList"
            :props="{ value: 'code', label: 'name' }"
            filterable
            style="width: 100%"
          ></el-cascader>
        </el-form-item>
        <el-form-item label="日期选择器：" prop="dateTime">
          <el-form-item prop="date" style="display: inline-block">
            <el-date-picker
              v-model="form.date"
              placeholder="日期选择器"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="dateTime"
            style="display: inline-block; margin-left: 10px"
          >
            <el-date-picker
              v-model="form.dateTime"
              type="datetime"
              placeholder="日期时间选择器"
            ></el-date-picker>
          </el-form-item>
          <el-form-item
            prop="dateRange"
            style="display: inline-block; margin-top: 10px"
          >
            <el-date-picker
              v-model="form.dateRange"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>
        <el-form-item label="计数器：" prop="inputNumber">
          <el-input-number v-model="form.inputNumber"></el-input-number>
        </el-form-item>
        <el-form-item label="开关：" prop="switch">
          <el-switch
            v-model="form.switch"
            active-text="开"
            inactive-text="关"
          ></el-switch>
        </el-form-item>
        <el-form-item label="滑块：" prop="slider">
          <el-slider v-model="form.slider"></el-slider>
        </el-form-item>
        <el-form-item label="评分：" prop="rate">
          <el-rate v-model="form.rate"></el-rate>
        </el-form-item>
        <el-form-item label="颜色选择器：" prop="color">
          <el-color-picker v-model="form.color"></el-color-picker>
        </el-form-item>
        <el-form-item label="上传文件：">
          <el-upload ref="upload" action="#" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
            <el-button
              style="margin-left: 10px"
              size="small"
              type="success"
              @click="submitUpload"
              >上传到服务器</el-button
            >
          </el-upload>
        </el-form-item>
        <el-form-item label="上传图片：">
          <el-upload
            ref="upload"
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            class="upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-button
            style="margin-left: 10px"
            size="small"
            type="success"
            @click="submitUpload"
            >上传到服务器</el-button
          >
        </el-form-item>
        <el-form-item label="文本域：" prop="textarea">
          <el-input
            type="textarea"
            v-model="form.textarea"
            rows="3"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">确定</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { areaListData } from "@/utils/area";
export default {
  data() {
    return {
      form: {
        text: "",
        radio: "1",
        checkbox: [false, false, false],
        select: "",
        filterableSelect: "",
        multipleSelect: "",
        cascader: "",
        date: "",
        dateTime: "",
        dateRange: "",
        inputNumber: 0,
        switch: false,
        slider: 0,
        rate: null,
        color: "",
        textarea: "",
      },
      roleList: [], //所有省市区
    };
  },
  created() {
    this.roleList = areaListData();
    consle.log(this.roleList);
  },
  mounted() {},
  methods: {
    submitUpload() {
      // 点击上传文件
      this.$refs.upload.submit();
    },
    onSubmit() {
      //点击确定
      //console.log(JSON.parse(JSON.stringify(this.form)));
    },
    resetForm() {
      //重置表单
      this.$refs["form"].resetFields();
    },
  },
};
</script>
  
<style lang="scss" scoped>
.form {
  .input-explain {
    margin-left: 10px;
    cursor: auto;
    width: 240px;
    display: inline-block;
  }

  .el-rate {
    line-height: 50px;
  }
  /deep/ .upload {
    display: inline-block;

    .el-upload--picture-card,
    .el-upload-list--picture-card .el-upload-list__item {
      width: 100px;
      height: 100px;
      line-height: 98px;
    }
    .el-upload-list--picture-card .el-upload-list__item {
      margin-bottom: -15px;
    }
  }
}
</style>