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
    <div style="height: 250px;">
      <div style="height: 200px" id="present"></div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: "present",
  mounted(){

    // 基于准备好的dom，初始化echarts实例

    const myChart = this.$echarts.init(document.getElementById('present'))

    // 指定图表的配置项和数据

    const getmax = 100;

    const getvalue = 22;



    const option = {

      title: [{
        text: '比率',
        bottom: '100%',
        x: 'center',
        textStyle: {
          fontWeight: 'bold',
          fontSize: 14,
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
      barMaxWidth: 4, //圆环宽度
      radiusAxis: {
        show: false,
        type: 'category',
      },
      //圆环位置和大小
      polar: {
        center: ['50%', '50%'],
        radius: '120%'
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
            length: '122%',
            width: 14,
            height: 14,
            offsetCenter: [0, '-75%'], // 箭头位置
            itemStyle: {
              color: 'rgba(74, 234, 174, 1)', // 箭头颜色
              shadowColor: 'rgba(74, 234, 174, 1)',
              shadowBlur: 1
            },
          },
          detail: {
            formatter: function (params) {
              return getvalue + '%';
            },
            color: '#4AEAAE',
            fontSize: 10,
            offsetCenter: [0, -60],
          },

          title: {

            show: false

          },

          data: [{

            value: getvalue,

          }]

        },
        {
          type: 'gauge',
          radius: '103.5%',
          startAngle: 180, //起始角度，同极坐标
          endAngle: 0, //终止角度，同极坐标
          splitNumber: 100,
          axisLine: {
            show: false,
            lineStyle: {
              width: 1,
              color: [
                // 有数值的部分
                [
                  0.33,
                  {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(139, 255, 215, 1)',
                      },

                      {
                        offset: 1,
                        color: 'rgba(39, 223, 152, 1)',
                      },
                    ],

                  },
                ],
                // 底色
                [
                  1,
                  {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                      {
                        offset: 0,
                        color: 'rgba(39, 223, 152, 0.5)',
                      },

                      {
                        offset: 1,
                        color: 'rgba(139, 255, 215, 0.5)',
                      },
                    ],

                  },
                ],
              ],
            },
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            length: 2,
            lineStyle: {
              color: 'auto',
              width: 2,
            },
          },
          axisLabel: {
            show: false,
          },
          title: {
            show: false,
          },
          pointer: {
            show: false,
          },
          data: [
            {
              value: 33,
              name: '警押比',
            },
          ],
          detail: {
            show: false,

          },
        },

      ]

    };

    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(option)

  }
}
</script>

