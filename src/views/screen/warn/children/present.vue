<template>
  <el-card class="camera-card event-statistics">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>风险现状</span>
        </div>
      </div>
    </div>
    <div style="height: 100%">
      <div style="height: 100%" id="present"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "present",
  mounted(){

    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('present'))

    const getmax = 100;

    const getvalue = 13;



    const option = {

      backgroundColor: '#fff0',
      title: [{
        text: '综合风险评估',
        bottom: '5%',
        x: 'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize: 15,
          fontFamily: 'MiSans-Bold',
          color: '#fff'
        }
      }],
      angleAxis: {
        show: false,
        max: getmax * 360 / 180, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 180, //极坐标初始角度
        splitLine: {
          show: false
        }
      },
      barMaxWidth: 20, //圆环宽度
      radiusAxis: {
        show: false,
        type: 'category',
      },
      //圆环位置和大小
      polar: {
        center: ['50%', '65%'],
        radius: '220%'
      },

      series: [{
        type: 'bar',
        data: [{ //上层圆环，显示数据
          value: getvalue,
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(39, 223, 152, 1)',
                },

                {
                  offset: 1,
                  color: 'rgba(139, 255, 215, 1)',
                },
              ],
            },

          },
        }],
        barGap: '-100%', //柱间距离,上下两层圆环重合
        coordinateSystem: 'polar',
        roundCap: true, //顶端圆角
        z: 3 //圆环层级，同zindex
      },
        { //下层圆环，显示最大值
          type: 'bar',
          data: [{
            value: getmax,
            itemStyle: {
              color: '#fff',
              opacity: 0.2,
              borderWidth: 0,
            },
          }],
          barGap: '-100%',
          coordinateSystem: 'polar',
          roundCap: true,
          z: 1
        },
        //仪表盘
        {
          type: 'gauge',
          startAngle: 180, //起始角度，同极坐标
          endAngle: 0, //终止角度，同极坐标
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLabel: {
            show: false
          },
          pointer: {
            icon: 'circle', // 箭头图标
            length: '82%',
            width: 0,
            height: 0,
            offsetCenter: [0, '-88%'], // 箭头位置
          },

          detail: {
            // show: false,

            formatter: function (params) {
              return '{a|风险现状统计}\n{b|'+ params + '分}';
            },
            color: '#4AEAAE',
            fontSize: 20,
            offsetCenter: [0, 10],
            rich: {
              a: {
                color: "#fff",
                lineHeight: 65,
                fontSize: 15,
                fontWeight: 550,
              },
              b: {
                color: "#62dbdb",
                fontSize: 32,
                fontWeight: 550,
                padding: [10, 0, 10, 0],
              }
            },
          },
          title: {
            show: false
          },
          data: [{
            value: getvalue,
          }]

        },

      ]

    };

    myChart.setOption(option)

  }
}
</script>

