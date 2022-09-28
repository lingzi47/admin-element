<template>
  <div class="count-down">
    <div class="add-datetime">
      <el-date-picker
        v-model="addDate"
        type="datetime"
        :picker-options="pickerOptions"
        placeholder="选择时间倒计时"
      ></el-date-picker>
      <el-button type="primary" @click="addDatetime" style="margin-left: 10px"
        >添加</el-button
      >
      <span style="margin-left: 20px">当前时间：{{ nowDate }}</span>
    </div>
    <div class="dt-con">
      <div
        class="dt-list"
        v-for="(d, i) in dateTime"
        :key="i"
        :class="[setTimerClass(d)]"
      >
        <p class="dt-datetime">
          结束时间：{{ d.endDateTime }}
          <span v-if="d.isOver" class="dt-datetime-over">已结束</span>
        </p>
        <div class="dt-progress dt-day">
          <el-progress
            type="circle"
            :percentage="Number(((d.countDown.days / 30) * 100).toFixed(2))"
            :width="80"
            :show-text="false"
          ></el-progress>
          <div class="dt-cd">{{ d.countDown.days }}天</div>
        </div>
        <div class="dt-progress dt-hours">
          <el-progress
            type="circle"
            :percentage="Number(((d.countDown.hours / 24) * 100).toFixed(2))"
            :width="80"
            :show-text="false"
          ></el-progress>
          <div class="dt-cd">{{ d.countDown.hours }}时</div>
        </div>
        <div class="dt-progress dt-mins">
          <el-progress
            type="circle"
            :percentage="Number(((d.countDown.mins / 60) * 100).toFixed(2))"
            :width="80"
            :show-text="false"
          ></el-progress>
          <div class="dt-cd">{{ d.countDown.mins }}分</div>
        </div>
        <div class="dt-progress dt-seconds">
          <el-progress
            type="circle"
            :percentage="Number(((d.countDown.seconds / 60) * 100).toFixed(2))"
            :width="80"
            :show-text="false"
          ></el-progress>
          <div class="dt-cd">{{ d.countDown.seconds }}秒</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "countDown",
  components: {},
  data() {
    return {
      addDate: "",
      nowDate: "",
      pickerOptions: {
        disabledDate(date) {
          return (
            date.getTime() < Date.now() - 24 * 60 * 60 * 1000 ||
            date.getTime() > Date.now() + 30 * 24 * 60 * 60 * 1000
          );
        },
      },
      dateTime: [
        {
          endDateTime: "2023-01-22 00:00:00",
          countDown: { days: "0", hours: "00", mins: "00", seconds: "00" },
          timer: null,
          isOver: false,
          curTime: 0,
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.countDown();
    setInterval(() => {
      let nd = new Date();
      let y = nd.getFullYear();
      let m = `00${nd.getMonth() + 1}`.slice(-2);
      let d = `00${nd.getDate()}`.slice(-2);
      let h = `00${nd.getHours()}`.slice(-2);
      let ms = `00${nd.getMinutes()}`.slice(-2);
      let s = `00${nd.getSeconds()}`.slice(-2);
      this.nowDate = y + "-" + m + "-" + d + " " + h + ":" + ms + ":" + s;
    }, 1000);
  },
  computed: {
    setTimerClass() {
      return (dt) => {
        let dtClass = "";
        if (
          !dt.countDown.days &&
          !dt.countDown.hours &&
          !dt.countDown.mins &&
          !dt.countDown.seconds
        )
          dtClass = "dt-over";
        else if (
          !dt.countDown.days &&
          !dt.countDown.hours &&
          !dt.countDown.mins &&
          dt.countDown.seconds
        )
          dtClass = "mins-over";
        else if (
          !dt.countDown.days &&
          !dt.countDown.hours &&
          (dt.countDown.mins || dt.countDown.seconds)
        )
          dtClass = "hours-over";
        else if (
          !dt.countDown.days &&
          (dt.countDown.hours || dt.countDown.mins || dt.countDown.seconds)
        )
          dtClass = "days-over";
        return dtClass;
      };
    },
  },
  methods: {
    addDatetime() {
      if (!this.addDate) return;
      let selDt = new Date(this.addDate).format("yyyy-MM-dd HH:mm:ss");
      if (new Date(selDt).getTime() - Date.now() < 30000) {
        this.$message.warning("倒计时时间不能小于 30 秒");
        return;
      }
      this.dateTime.push({
        endDateTime: selDt,
        countDown: {
          days: "0",
          hours: "00",
          mins: "00",
          seconds: "00",
        },
        timer: null,
        isOver: false,
      });
      this.countDown();
      this.addDate = "";
    },
    countDown() {
      let curTime = Date.now();
      this.dateTime.map((item) => {
        item.curTime = curTime;
        let dtTime = new Date(item.endDateTime).getTime();
        if (dtTime - curTime < 0) item.isOver = true;
        const time = Math.round((dtTime - curTime) / 1000);
        this.getTime(item, time);
      });
    },
    getTime(dt, time) {
      dt.timer && clearInterval(dt.timer);
      if (time < 0) {
        dt.isOver = true;
        return;
      }
      const { dd, hh, mm, ss } = this.durationFormatter(time);
      dt.countDown.days = dd || 0;
      // dt.countDown.hours = `00${hh || ''}`.slice(-2);
      // dt.countDown.mins = `00${mm || ''}`.slice(-2);
      // dt.countDown.seconds = `00${ss || ''}`.slice(-2);
      dt.countDown.hours = hh || 0;
      dt.countDown.mins = mm || 0;
      dt.countDown.seconds = ss || 0;
      dt.timer = setTimeout((_) => {
        let curTime = Date.now();
        let dtTime = new Date(dt.endDateTime).getTime();
        const differenceTime = Math.round((dtTime - curTime) / 1000);
        this.getTime(dt, differenceTime);
      }, 1000);
    },
    durationFormatter(time) {
      if (!time) return { ss: 0 };
      let t = time;
      const ss = t % 60;
      t = (t - ss) / 60;
      if (t < 1) return { ss };
      const mm = t % 60;
      t = (t - mm) / 60;
      if (t < 1) return { mm, ss };
      const hh = t % 24;
      t = (t - hh) / 24;
      if (t < 1) return { hh, mm, ss };
      const dd = t;
      return { dd, hh, mm, ss };
    },
  },
};
</script>

<style lang="scss" scoped>
.count-down {
  margin-top: 30px;
  margin-left: 30px;
  .dt-con {
    width: 900px;

    .dt-list {
      display: inline-block;
      margin: 20px 20px 0 0;
      border: 1px solid #ebeef5;
      padding: 10px;
      width: 400px;
      border-radius: 8px;
      box-shadow: 0 2px 20px -4px rgba(0, 0, 0, 0.1);

      .dt-datetime {
        margin-bottom: 10px;
        .dt-datetime-over {
          margin-left: 20px;
        }
      }
      .dt-progress {
        position: relative;
        margin-right: 10px;
        display: inline-block;

        .el-progress {
          display: block;
          transform: rotateY(180deg);
        }
        .dt-cd {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: #606266;
          font-size: 14px;
        }
      }
    }
    .dt-over {
      border: 1px solid rgba(255, 73, 73, 0.1);
      box-shadow: 0 2px 20px -4px rgba(255, 73, 73, 0.1);
    }
    .dt-over .dt-datetime,
    .dt-over .dt-progress .dt-cd,
    .days-over .dt-day .dt-cd,
    .hours-over .dt-day .dt-cd,
    .hours-over .dt-hours .dt-cd,
    .mins-over .dt-day .dt-cd,
    .mins-over .dt-hours .dt-cd,
    .mins-over .dt-mins .dt-cd {
      color: #ff4949;
    }
  }
}
</style>
