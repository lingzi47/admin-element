
<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator=""
        ><el-breadcrumb-item>版本信息</el-breadcrumb-item></el-breadcrumb
      >
    </div>

    <el-form label-position="left" label-width="100px" class="form1">
      <el-form-item label="版本号：" class="tiao">
        <el-input
          clearable
          v-model="version"
          style="width: 150px"
          placeholder="请输入版本号："
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="版本地址：" class="tiao">
        <el-input
          clearable
          v-model="url"
          style="width: 150px"
          placeholder="请输入版本地址："
          :disabled="true"
        ></el-input>
      </el-form-item>
      <el-form-item label="版本说明：" class="tiao">
        <el-input
          clearable
          type="textarea"
          v-model="remarks"
          style="width: 350px"
          placeholder="请输入版本说明："
          :disabled="true"
        ></el-input>
      </el-form-item>
      <p class="zg">注：输入。换行表示下一条</p>

      <p class="tiao">
        审核状态：
        {{ ex_status }}
      </p>
    </el-form>
  </div>
</template>
<script>
import { versiondetails } from "@/request/api";
export default {
  data() {
    return {
      version: "",
      url: "",
      remarks: "",

      ex_status: "",
    };
  },

  created() {
    this.id = this.$route.query.id;
    let params = {
      id: this.id,
      token: sessionStorage.getItem("token"),
    };
    versiondetails(params).then((res) => {
      //console.log(res.data.data);
      this.remarks = res.data.data.remarks;
      this.url = res.data.data.url;
      this.version = res.data.data.version;
      this.ex_status = res.data.data.ex_status;
    });
  },
  methods: {},
};
</script>

<style  scoped>
.form2 {
  width: 400px;
  height: 200px;
  margin-left: 80px;
}
.form1 {
  margin-left: 200px;
}
.tiao {
  color: #606266;
  font-size: 14px;
  padding: 10px;
  margin-bottom: 20px;
}
.ad {
  margin-left: 140px;
  margin-top: 60px;
}
.zg {
  font-size: 13px;
  color: crimson;
  margin-left: 108px;
  margin-top: -20px;
}
.an {
  margin-left: 50px;
}
</style>
