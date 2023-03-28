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
import {selectRiskTrend} from "@/api/screen.api";

export default {
  name: "analyse",
  mounted(){
    selectRiskTrend().then(res => {
      const data = [], data2 = [];
      res.data.map(row => {
        data.push(row.safeTime);
        data2.push(row.fraction);
      })
      this.initEchart(data, data2)
    })

  },
  methods: {
    initEchart: function(data, data2) {
      const myChart = this.$echarts.init(document.getElementById('analyse'))

      // 指定图表的配置项和数据

      const option = {
        title: {
          text: '安全评估趋势',
          textStyle: {
            color: "#fff",
            fontSize: 25,
          },
          x: "7%",
          y: 15
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          bottom: 30,
          top: 80,
          left: "12%"
        },
        legend: {
          textStyle: {
            color: "#fff"
          }
        },
        textStyle: {
          color: "#fff"
        },

        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: data
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        series: [
          {
            type: 'line',
            data: data2,
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
              ],
              style: {
                color: "#fff"
              }
            }
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。

      myChart.setOption(option)
    },
  }
}
</script>

