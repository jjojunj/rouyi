<template>
  <el-card class="camera-card event-statistics">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>事件统计</span>
        </div>
      </div>
    </div>
    <div style="height: 100%;">
      <div style="height: 36px;">
        <div class="over">未完结事件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">144</span>起</div>
        <div class="unover">累计已处理&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="num">0</span>起</div>
      </div>
      <div class="statis-title" style="height: 15px;text-align: right">
        <span class="statis-title-hover">事件类型</span>｜<span>事件级别</span>｜<span>事件状态</span>
      </div>
      <div style="height: 80%" id="eventStatis"></div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "eventStatistics",
  mounted(){

    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('eventStatis'))

    // 指定图表的配置项和数据

    const option = {
      title: {
        text: "144个",
        x: "20%",
        y: "center",
        textStyle: {
          fontWeight: "normal",
          color: "#FFFFFF",
          fontSize: "20",
        }

      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        right: "10%",
        top: "20%",
        bottom: "1%",
        textStyle: {
          color: "#fff"
        }
      },
      textStyle: {
        color: "#FFF"
      },
      grid: {
        bottom: "1%",
        top: "50%"
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['30%', '50%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },

          labelLine: {
            show: false
          },
          data: [
            { value: 8, name: '水压超限8' },
            { value: 18, name: '渗透压过高18' },
            { value: 36, name: '流速超限36' },
            { value: 72, name: '水位超限72' }
          ]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(option)

  }
}
</script>
<style lang="scss">
.event-statistics {
  -webkit-box-flex: 348 !important;
  -ms-flex: 348 !important;
  flex: 348 !important;
}

.over {
  background-image: url("~@/assets/images/border2.png");
}
.unover {
  background-image: url("~@/assets/images/border1.png");
}

.statis-title {
  color: #fff;
  font-size: 12px;
  height: 15px;
  line-height: 15px;
  margin-top: 5px;
  .statis-title-hover {
    color: #FFEA00;
  }
  span {
    cursor: pointer;
  }
  span:hover {
    color: #FFEA00;
  }
}

</style>
