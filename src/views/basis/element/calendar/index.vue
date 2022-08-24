<template>
  <div class="calendar" style="position: relative;">
    <div class="lunar-calendar">
      <p class="solar">{{selLunar.cYear + "年" +selLunar.cMonth+ "月"+selLunar.cDay+ "日 "}}</p>
      <p class="lunar">
        <span class="lunar1">{{selLunar.IMonthCn + selLunar.IDayCn}}</span>
        <span class="lunar2">{{selLunar.gzYear + selLunar.Animal + "年 " + selLunar.gzMonth + "月 " + selLunar.gzDay + "日"}}</span>
      </p>
    </div>
    <el-calendar v-model="priceTime">
      <template slot="dateCell" slot-scope="{ date, data }">
        <div class="cal-date" v-html="setDay(data.day)"></div>
      </template>
    </el-calendar>
  </div>
</template>

<script>
import calendar from "@/utils/calendar";
import { getHolidayList } from '@/api/operation'
export default {
  data() {
    //用于定义属性
    return {
      selLunar: {}, //选择的日期
      today: {},  //当前日期
      priceTime: new Date(),
      holidayList: [], //法定假日
    };
  },
  created: function () {
    this.getHolidayList();
    this.getLunar(new Date());
  },
  mounted: function () {

  },
  watch: {
    priceTime(newval) {
      this.getLunar(newval);
    },
  },
  methods: {
    async getHolidayList() {  // 获取法定假日
      let res = await getHolidayList();
      if (res.status == 200) {
        this.holidayList = res.data;
      }
    },
    setDay(date) { //自定义日历格式
      var weekend = this.setWeekend(date) ? 'weekend' : '';
      var festival = this.setFestival(date) ? 'festival' : '';
      var dayHtml = "<span class='cal-date-day " + weekend + "'>" + date.split('-').slice(2).join('-') + "</span>" + "<span class='cal-lunar-day " + festival + "'>" + this.solarDate2lunar(date) + "</span>";
      var pH = "<p class='date-grid'>";
      this.holidayList.map(item => {
        if (item.date == date) {
          if (item.type) {
            dayHtml = '<span class="badge-x">休</span>' + dayHtml
            pH = "<p class='date-grid holiday'>";
          } else {
            dayHtml = '<span class="badge-b">班</span>' + dayHtml
            pH = "<p class='date-grid overtime'>";
          }
        }
      })
      return pH + dayHtml + "</p>"
    },
    setWeekend(date) { //判断是否是周末
      var week = new Date(date).getDay();
      if (week == 6 || week == 0) return true;
      else return false;
    },
    setFestival(date) { //判断是否是节日
      var lunarTest = this.solarDate2lunar(date);
      if (lunarTest.indexOf("初") == -1 && lunarTest.indexOf("十") == -1 && lunarTest.indexOf("廿") == -1)
        return true;
      else return false;
    },
    solarDate2lunar(solarDate) { //获取农历日期
      var solar = solarDate.split("-");
      var lunar = calendar.solar2lunar(solar[0], solar[1], solar[2]); //获取农历
      var lunarIMonthCn = lunar.IMonthCn; //农历月份
      var lunarIDayCn = lunar.IDayCn; //农历日期
      var festival = lunar.festival; //阳历节日
      var lunarFestival = lunar.lunarFestival; //农历节日
      var lunarTest = lunarIDayCn; //最后显示的农历日期
      if (lunarIDayCn == "初一") lunarTest = lunarIMonthCn + lunarIDayCn;
      if (festival != null) lunarTest = festival;
      if (lunarFestival != null) lunarTest = lunarFestival;
      if (festival != null && lunarFestival != null)
        lunarTest = festival + "," + lunarFestival;
      // return solar[2] + "\n" + lunarTest;
      return lunarTest;
    },
    getLunar(dateTime) {
      var solar = new Date(dateTime).format("yyyy-MM-dd").split("-");
      this.selLunar = calendar.solar2lunar(solar[0], solar[1], solar[2]); //获取农历
      if (JSON.stringify(this.today) == "{}") this.today = this.selLunar
      this.getWeek(dateTime);
    },
    getWeek(dt) {
      let d1 = new Date(dt);
      let d2 = new Date(dt);
      d2.setMonth(0);
      d2.setDate(1);
      let rq = d1 - d2;
      let days = Math.ceil(rq / (24 * 60 * 60 * 1000)) - 2;
      let num = Math.ceil(days / 7) + 1;
      this.weekNum = num;
    },
  },
};
</script>

<style lang="scss" scoped>
.calendar {
  max-width: 1000px;
  min-width: 800px;
  margin: 0 auto;

  .lunar-calendar {
    position: absolute;
    left: 20px;
    top: 16px;
    font-size: 12px;
    color: #666;
    display: flex;
    .solar {
      font-size: 28px;
    }
    .lunar {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      .lunar1 {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }

  // 日历样式
  /deep/ .el-calendar {
    .el-calendar__header {
      justify-content: flex-end;

      .el-calendar__title {
        display: none;
      }

      .el-calendar__button-group .el-button {
        font-size: 15px;
      }
    }

    .prev,
    .next {
      .date-grid {
        opacity: 0.3;
      }
    }

    .el-backtop,
    .el-calendar-table td.is-today .date-grid::after {
      border: 2px solid #409eff;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 5px;
    }

    .el-calendar-day {
      padding: 0;

      .cal-date {
        white-space: pre-line;
        text-align: center;
        font-size: 18px;
        position: relative;
        height: inherit;

        .date-grid {
          height: calc(100% - 20px);
          padding: 10px;

          span {
            display: block;
          }
          .cal-date-day {
            line-height: 32px;
            font-size: 20px;
            color: #000;
          }
          .cal-lunar-day {
            line-height: 26px;
            font-size: 15px;
            color: #666;
          }

          .badge-x,
          .badge-b {
            position: absolute;
            top: 5px;
            right: 10px;
            padding: 0 5px;
            font-size: 12px;
            border-radius: 10px;
            line-height: 16px;
          }

          .badge-x {
            background: #F73131;
            color: #fff;
          }

          .badge-b {
            background: #909399;
            color: #fff;
          }

          .weekend {
            color: #f77e7e;
          }
          .festival {
            color: #f77e7e;
          }
        }

        .holiday {
          background: #fde3e4;
        }
        .overtime {
          background: #f5f5f6;
        }
      }
    }
  }
}
</style>
