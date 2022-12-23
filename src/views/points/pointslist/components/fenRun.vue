<template>
  <div>
    <el-dialog
      class="AddDialog"
      title="铺设点位详情"
      :visible.sync="dialogVisible"
      width="800px"
      hegiht="1000px"
      :close-on-click-modal="false"
      @close="close"
    >
      <el-form label-width="auto">
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="点位位置:"
              >{{ province }}-{{ city }}-{{ area }}
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="点位详细位置:">{{ details }} </el-form-item>
          </el-col>
          <el-col :span="24" v-if="formatStr(due_time) == '2038'">
            <el-form-item label="点位使用截止日期:">永久 </el-form-item>
          </el-col>
          <el-col :span="24" v-else>
            <el-form-item label="点位使用截止日期:"
              >{{ due_time }}
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="点位来源:" v-if="type == 10"
              >公司
            </el-form-item>
            <el-form-item label="点位来源:" v-if="type == 20">
              渠道商</el-form-item
            >
          </el-col>
          <el-col :span="12">
            <el-form-item label="渠道商id:">{{ position_user }} </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { goodsadd, goodseditshow, goodsedit } from "@/request/api";
import pageTable from "@/components/pageTable.vue";
export default {
  name: "AddDialog",
  components: { pageTable },
  data() {
    return {
      dialogVisible: false,
      province: "",
      city: "",
      area: "",
      details: "",
      due_time: "",
      type: "",
      province: "",
      position_user: "",
    };
  },
  created() {},
  mounted() {},
  methods: {
    show(row) {
      this.dialogVisible = true;
      this.province = row.province;
      this.city = row.city;
      this.area = row.area;
      this.details = row.details;
      this.due_time = row.due_time;
      this.type = row.type;

      this.position_user = row.position_user;
    },
    close() {
      this.dialogVisible = false;
    },
    formatStr(str) {
      if (str) {
        return `${str.substr(0, 4)}`;
      } else {
        return "";
      }
    },
    getUserList() {
      let token = sessionStorage.getItem("token");
      this.token = token;
      let params = {
        page: this.page.currentPage,
        limit: this.page.pageSize,
        token: sessionStorage.getItem("token"),
        moys: this.moys,
        id: this.id,
        s_time: this.buy_time[0],
        e_time: this.buy_time[1],
      };
      goodsListMem(params).then((res) => {
        this.page.total = res.data.data.total;
        this.userList = res.data.data.data;
        this.$refs.dataTable.setPageInfo({
          total: this.page.total,
        });
      });
    },
  },
};
</script>

<style>
.xian {
  margin-left: -75px !important;
}
</style>
