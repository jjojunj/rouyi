<template>
  <el-card class="camera-card event-eff">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>事件趋势分析</span>
<!--          <div class="condition">
            <el-select v-model="value" size="mini" popper-class="camera-popper" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>-->
        </div>
      </div>
    </div>
    <div id="eventEff" style="height: 100%;">
    </div>
  </el-card>
</template>
<script>
export default {
  name: "eventEfficiency",
  data() {
    return {
      value: "全部",
      options: [
        {
          value: '全部',
          label: '全部'
        }, {
          value: '选项2',
          label: '选项2'
        }
      ]
    }
  },
  mounted(){

    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('eventEff'))

    // 指定图表的配置项和数据

    const option = {
      title: {
        text: '事件数量',
        textStyle: {
          color: "#FFFFFF"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        bottom: "10%",
        top: "10%"
      },
      legend: {
        textStyle: {
          color: "#fff"
        }
      },
      textStyle: {
        color: "#FFF"
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2022-03', '2022-06', '2022-09', '2022-12', '2023-03']
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value}'
        }
      },
      series: [
        {
          type: 'line',
          data: [10, 11, 13, 11, 12],
          markPoint: {
            data: [
              { type: 'max', name: 'Max' },
              { type: 'min', name: 'Min' }
            ]
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(option)

  }
}
</script>
<style lang="scss">
.event-eff {
  -webkit-box-flex: 348 !important;
  -ms-flex: 348 !important;
  flex: 348 !important;
}
</style>
