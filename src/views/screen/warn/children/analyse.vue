<template>
  <el-card class="camera-card event-statistics">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>风险趋势</span>
          </div>

        </div>
      </div>
    </div>
    <div style="height: 100%;">
      <div style="height: 100%" id="analyse"></div>
    </div>
  </el-card>
</template>

<script>
import moment from "moment";

export default {
  name: "analyse",
  mounted(){
    const data = [];
    const data1 = [85, 80, 83, 84, 90, 93, 88, 92, 90,87, 95, 98];
    for (let i = 12; i > 0; i--) {
      const month = moment().subtract(i, "M").month();
      data.push(month + 1 + "月");
    }
    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('analyse'))

    // 指定图表的配置项和数据

    const option = {
      title: {
        text: '分数',
        textStyle: {
          color: "#FFFFFF",
          fontWeight: 100,
          fontSize: 15
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
        top: "20%"
      },
      textStyle: {
        color: "#FFF"
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: data
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
          data: data1,
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

