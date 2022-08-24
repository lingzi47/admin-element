<template>
  <!-- DateTimePicker 日期时间选择器 -->
  <div class="dateTimePickerAssembly">
    <div class="explain">
      <p>一、日期或日期时间用 el-date-picker ，时间选择用 el-time-picker</p>
      <p>二、date-picker属性：1. type:日期(date)、月份(month)、年份(year)、周(week)、日期时间(datetime)，范围选择时，值为 daterange；2. format:输入框中的格式；3. picker-options:为组件添加最小或最大选择日期；</p>
      <p>三、date-picker事件：change:选项改变时触发</p>
    </div>
    <el-form :inline="true" :model="form">
      <el-form-item>
        <el-date-picker v-model="form.value1" type="date" placeholder="选择日期" @change="change"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value2" type="month" placeholder="选择月份" format="yyyy 年 MM 月"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value3" type="year" placeholder="选择年份"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value4" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-time-picker v-model="form.value5" placeholder="选择时间"></el-time-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value6" type="daterange" range-separator="-" start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value7" type="date" placeholder="联动范围选择1" :picker-options="pickerOptions1" @change="change1"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.value8" type="date" placeholder="联动范围选择2" :picker-options="pickerOptions2" @change="change2"></el-date-picker>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DateTimePickerAssembly",
  data() {
    return {
      pickerOptions1: {
        //设置禁用状态，参数为当前日期，要求返回 Boolean
        disabledDate(date) {
          return date.getTime() < Date.now() - 20 * 24 * 60 * 60 * 1000 || date.getTime() > Date.now()
        }
      },
      pickerOptions2: {
        disabledDate(date) {
          return date.getTime() < Date.now() - 20 * 24 * 60 * 60 * 1000 || date.getTime() > Date.now()
        }
      },
      form: {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
      }
    }
  },
  methods: {
    change(date) {
      this.$message('选择的日期是：' + new Date(date).format("yyyy年MM月dd日 dddd HH:mm:ss"));
    },
    change1(d) {
      let startDate = d ? new Date(d).getTime() : (new Date().getTime() - 20 * 24 * 60 * 60 * 1000)
      this.pickerOptions2 = {
        disabledDate(date) {
          return date.getTime() < startDate || date.getTime() > (new Date().getTime())
        }
      }
    },
    change2(d) {
      this.pickerOptions1 = {
        disabledDate(date) {
          return date.getTime() < (new Date().getTime()) - 20 * 24 * 60 * 60 * 1000 || date.getTime() > (new Date(d ? d : (new Date().getTime())).getTime())
        }
      }
    }
  }
}
</script>

<style>
</style>
