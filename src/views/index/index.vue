<template>
  <div class="index">
    <!-- 基础数据 -->
    <el-row :gutter="40" class="base-con">
      <el-col :lg="6" :md="12">
        <div class="base-data">
          <div class="data-icon"><i class="el-icon-s-custom"></i></div>
          <div class="data-con">
            <h5>今日访问量</h5>
            <p>23</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="base-data">
          <div class="data-icon"><i class="el-icon-message-solid"></i></div>
          <div class="data-con">
            <h5>未读消息</h5>
            <p>6</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="base-data">
          <div class="data-icon"><i class="el-icon-phone"></i></div>
          <div class="data-con">
            <h5>通讯录</h5>
            <p>368</p>
          </div>
        </div>
      </el-col>
      <el-col :lg="6" :md="12">
        <div class="base-data">
          <div class="data-icon"><i class="el-icon-picture"></i></div>
          <div class="data-con">
            <h5>上传数量</h5>
            <p>63</p>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :lg="10" :md="24">
        <!-- 系统公告通知 -->
        <div class="announcement">
          <el-table
            :data="tableData"
            height="350px"
            style="width: 100%"
            @row-click="clickRow"
            class="announcement"
          >
            <el-table-column label="公告主题">
              <template slot-scope="scope">
                <el-link type="primary" :underline="false">{{
                  scope.row.title
                }}</el-link>
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="创建人"
              width="77"
            ></el-table-column>
            <el-table-column
              prop="startDate"
              label="创建日期"
              width="93"
            ></el-table-column>
            <el-table-column
              prop="endDate"
              label="结束日期"
              width="93"
            ></el-table-column>
            <el-table-column label="状态" width="57">
              <template slot-scope="scope">
                <el-tag v-if="scope.row.type == 0" type="danger" size="mini"
                  >未读</el-tag
                >
                <el-tag v-else type="success" size="mini">已读</el-tag>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :lg="14" :md="24">
        <div class="chart" style="background-color: #fff; height: 350px"></div>
      </el-col>
    </el-row>
    <el-row :gutter="40">
      <el-col :lg="8" :md="24">
        <div class="chart" style="background-color: #fff; height: 350px"></div>
      </el-col>
      <el-col :lg="8" :md="24">
        <div class="chart" style="background-color: #fff; height: 350px"></div>
      </el-col>
      <el-col :lg="8" :md="24">
        <div class="chart" style="background-color: #fff; height: 350px"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  data() {
    return {
      tableData: [
        {
          id: "1",
          startDate: "2021-08-16",
          endDate: "2021-11-16",
          name: "王小虎",
          title: "3.2.210816版本更新说明",
          content:
            "新版本更新说明：<br>1. 修改了大量的XXX，并添加了XXX模块；<br>2. 将某个菜单更换到某个下面了；<br>3. 新增了XXX报表，具体详见XXX菜单下；",
          type: 0,
        },
        {
          id: "2",
          startDate: "2021-08-10",
          endDate: "2021-08-17",
          name: "王小虎",
          title: "停服更新通知",
          content:
            "计划将于 8月16日8:00 对系统服务器进行停服更新，预计停服3小时，开服时间有可能提前或者延后。届时将无法登录操作系统。",
          type: 1,
        },
        {
          id: "3",
          startDate: "2021-06-21",
          endDate: "2022-06-21",
          name: "王小虎",
          title: "数据修改通知",
          content: "本次修改部分错误数据，详细前往XXX菜单下见信息修改的内容；",
          type: 1,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    clickRow(row) {
      let btnText = row.type ? "确定" : "已读";
      this.$alert(row.content, row.title, {
        confirmButtonText: btnText,
        showClose: false,
        dangerouslyUseHTMLString: true,
        callback: () => {
          if (!row.type) row.type = 1;
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin hover-color($color) {
  .base-data .data-icon i {
    color: $color;
  }

  .base-data:hover .data-icon {
    background-color: $color;

    i {
      color: #fff;
    }
  }

  .base-data .data-con p {
    color: $color;
  }
}

.index {
  background-color: #f0f2f5;
  padding: 0 40px 30px !important;
  width: calc(100% - 80px) !important;

  .el-row .el-col {
    margin-top: 30px;
  }

  .base-data,
  .announcement,
  .chart {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  }

  .base-con {
    .base-data {
      background-color: #fff;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      border-radius: 6px;

      .data-icon {
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // background-color: #F3F3F3;
        border-radius: 6px 0 0 6px;
        transition: background-color 500ms;

        i {
          font-size: 62px;
          transition: color 500ms;
        }
      }

      .data-con {
        padding-right: 24px;

        h5 {
          line-height: 18px;
          color: rgba(0, 0, 0, 0.45);
          font-size: 16px;
          margin-bottom: 5px;
        }

        p {
          font-size: 26px;
          color: #666;
        }
      }
    }

    .el-col:nth-child(1) {
      @include hover-color(#34bfa3);
    }

    .el-col:nth-child(2) {
      @include hover-color(#f4516c);
    }

    .el-col:nth-child(3) {
      @include hover-color(#36a3f7);
    }

    .el-col:nth-child(4) {
      @include hover-color(#faa224);
    }
  }
}
</style>
