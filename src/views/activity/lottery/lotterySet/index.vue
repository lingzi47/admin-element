<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/"
        ><el-breadcrumb-item
          ><i class="el-icon-tickets"></i>抽奖列表</el-breadcrumb-item
        ></el-breadcrumb
      >
    </div>
    <table border="1" class="pure-table">
      <tr>
        <th align="center" style="width: 400px">
          顺序（左上角为起点顺时针排序）
        </th>
        <th align="center">PK值</th>
        <th align="center">概率</th>
      </tr>
      <tr v-for="(item, index) in list" :key="index">
        <td align="center" style="width: 400px">{{ index + 1 }}</td>
        <td align="center" style="width: 400px">
          <el-input
            v-model="item.pk"
            style="width: 80px"
            required="required"
          ></el-input>
          <span style="margin-left: 5px">pk值</span>
        </td>
        <td align="center" style="width: 400px">
          <el-input
            v-model="item.gl"
            style="width: 80px"
            required="required"
          ></el-input>
          <span style="margin-left: 5px">%</span>
        </td>
      </tr>
    </table>
    <p
      style="margin-left: 120px; margin-top: 20px; color: red; font-size: 14px"
    >
      注:id为8,pk值写死等于0,pk值等于0时代表再来一次
    </p>
    <el-button type="info" class="btn" @click="admin">提交</el-button>
  </div>
</template>
<script>
import { luckadd } from "@/requestw/api";
export default {
  data() {
    return {
      imageUrl: "",

      list: [
        {
          id: 1,
          pk: "",
          gl: "",
        },
        {
          id: 2,
          pk: "",
          gl: "",
        },
        {
          id: 3,
          pk: "",
          gl: "",
        },
        {
          id: 4,
          pk: "",
          gl: "",
        },
        {
          id: 5,
          pk: "",
          gl: "",
        },
        {
          id: 6,
          pk: "",
          gl: "",
        },
        {
          id: 7,
          pk: "",
          gl: "",
        },
        {
          id: 8,
          pk: "0",
          gl: "",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    admin() {
      //console.log(this.list);
      var formdata = this.list;
      let json = JSON.stringify(formdata);
      console.log(json);
      var that = this;
      let flag = that.list.every((item) => !!item.pk);
      let flag1 = that.list.every((item) => !!item.gl);
      if (!flag) {
        this.$message.error("pk值不能为空");
        return;
      } else if (!flag1) {
        this.$message.error("概率值不能为空");
        return;
      }
      let params = {
        luckjson: json,
        token: sessionStorage.getItem("token"),
      };
      luckadd(params).then((res) => {
        //console.log(res);

        if (res.status == 200) {
          this.$message.success("提交成功！");
          this.list = [
            {
              id: 1,
              pk: "",
              gl: "",
            },
            {
              id: 2,
              pk: "",
              gl: "",
            },
            {
              id: 3,
              pk: "",
              gl: "",
            },
            {
              id: 4,
              pk: "",
              gl: "",
            },
            {
              id: 5,
              pk: "",
              gl: "",
            },
            {
              id: 6,
              pk: "",
              gl: "",
            },
            {
              id: 7,
              pk: "",
              gl: "",
            },
            {
              id: 8,
              pk: "0",
              gl: "",
            },
          ];
        } else {
          this.$message.error(res.data.msg);
        }
      });
    },
  },
};
</script>
<style  scoped>
table {
  border-collapse: collapse;
  margin: 0 auto;
  text-align: center;
}
table tr,
table td,
table th {
  border: 1px solid #cad9ea;
  color: #666;
  height: 30px;
  font-size: 12px;
}
table thead th {
  background-color: #fff;
  width: 100px;
}
table tr:nth-child(odd) {
  background: #fff;
}
table tr:nth-child(even) {
  background: #fff;
}

.pure-table {
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
}
.pure-table td,
.pure-table th {
  border: 1px solid #cbcbcb;
  border-left: 1px solid #cbcbcb;
  border-width: 0 0 0 1px;
  font-size: inherit;
  margin: 0;
  overflow: visible;
  padding: 0.5em 1em;
}

.btn {
  margin-left: 600px;
  margin-top: 20px;
  padding: 10px 30px;
  margin-bottom: 20px;
}
.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  width: 50px;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader .el-upload {
  width: 100px !important;
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
