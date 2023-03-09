<template>
  <el-card class="camera-card event-statistics">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>风险趋势</span>
        </div>
      </div>
    </div>
    <div style="height: 100%;">
      <div style="height: 100%" id="analyse"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "analyse",
  mounted(){

    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('analyse'))

    // 指定图表的配置项和数据

    const option = {
      title: {
        text: '分数',
        textStyle: {
          color: "#FFFFFF"
        }
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        textStyle: {
          color: "#fff"
        }
      },
      grid: {
        bottom: "20%",
        top: "10%"
      },
      textStyle: {
        color: "#FFF"
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['03-05 00:00', '03-05 01:00', '03-05 02:00', '03-05 03:00', '03-05 04:00','03-05 05:00', '03-05 06:00', '03-05 07:00', '03-05 08:00', '03-05 09:00']
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
          data: [60, 65, 80, 55, 60, 70, 65, 80, 55, 60],
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

