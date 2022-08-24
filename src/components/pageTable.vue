<template>
  <div class="page-table">
    <el-table
      v-bind="$attrs"
      v-on="$listeners"
      ref="pageTable"
      :data="data"
      border
      stripe
    >
      <slot></slot>
    </el-table>
    <div class="page-pagination" v-show="paging">
      <el-pagination
        v-bind="$attrs"
        v-on="$listeners"
        :current-page="currPage"
        :page-size="pageNum"
        :total="totalNum"
        :page-sizes="[10, 15, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="changePageSize"
        @current-change="changePageCurrent"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTable",
  props: {
    data: {
      type: Array,
      require: true,
      default: (_) => [],
    },
    paging: {
      //是否分页
      type: Boolean,
      default: true,
    },
    currentPage: {
      // 当前页
      type: Number,
      default: 1,
    },
    pageSize: {
      // 每页条数
      type: Number,
      default: 10,
    },
    total: {
      // 总条数
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      currPage: this.currentPage,
      pageNum: this.pageSize,
      totalNum: this.total,
      selectData: [],
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {
    setPageInfo(res) {
      //设置分页信息
      this.totalNum = res.total;
    },
    changePageSize(val) {
      //切换每页条数
      this.pageNum = val;
      this.currPage = 1;
      this.$emit("changeCurrentPage", 1, val);
    },
    changePageCurrent(val) {
      //切换页码
      this.currPage = val;
      this.$emit("changeCurrentPage", val, this.pageNum);
    },
  },
};
</script>

<style>
.page-pagination {
  text-align: right;
  margin: 10px 20px;
}
</style>
