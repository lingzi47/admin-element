<template>
  <div>
    <img src="../../assets/应急箱.png" height="800px" width="100%" />
  </div>
  <!--    <el-row :gutter="40" class="base-con">
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
       系统公告通知 
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
    </el-row>    <el-row :gutter="40" class="base-con">
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
    </el-row>-->
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

<style  scoped>
</style>
