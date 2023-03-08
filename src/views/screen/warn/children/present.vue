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

    const center1= ['50%', '65%']
    const data1='1200'
    const data2='1800'
    const Dvalue = ((data1/data2)*100).toFixed(2)

    const startAngle=180
    const endAngle=0
    const min= 0
    const max=100
    const radius="125%"
    const pointer={ show:false}
    const axisLabel= {
      distance: 5,
      color: '#fff',
      fontSize: 18,
      formatter: function (value) {
        return value + '%';
      }
    }

    const axisTick = {
      distance: -5,
      splitNumber: 5,
      length: 6,
      lineStyle: {
        color: '#fff'
      }
    }
    const splitLine={
      distance: -65,
      length: 8,
      lineStyle: {
        width: 3,
        color: '#fff'
      }
    }
    const anchor= {show: false}

    const axisLine={
      lineStyle: {
        width: 20,
        color: [
          [1, '#fff']
        ]
      }
    }
    const textStyle={
      textAlign:'center',
      fontSize: 14,
      lineHeight:20,
      color: '#fff',
      rich:{
        a:{
          color:'#fff',
          fontSize:20,
          fontWeight:'bold',
          lineHeight:14
        }
      }
    }

    const title={
      show: true,
      offsetCenter: [0, '30%'],
      fontSize: 18
    }
    const detail= {
      valueAnimation: true,
      fontSize: 14,
      lineHeight: 20 ,
      color:'#fff',
      offsetCenter: [0, '25%'],
      fontWeight:'bold',
      formatter: function (value) {
        return '风险现状评估\n80分';
      },
      rich: {
        a: {
          color:'#333',
          fontSize:10,
          lineHeight:10
        }
      }
    }
    const option = {
      title:[{
        text: '水压\n100kpa',
        left: '5%',
        top: '67%',
        textStyle: textStyle
      },
        {
          text: '渗透压\n100kpa',
          right: '5%',
          top: '67%',
          textStyle: textStyle
        }],
      series: [
        {
          type: 'gauge',
          startAngle: startAngle,
          center:center1,
          endAngle: endAngle,
          min: min,
          max: max,
          radius:radius,
          splitNumber: 4,
          progress:{
            show: true,
            width: 20,
            itemStyle: {
              color: "#1492FF"
            }
          },
          //pointer: pointer,
          axisLine:axisLine,
          //axisTick: axisTick,
          splitLine:splitLine,
          //axisLabel: axisLabel,
          //anchor: anchor,
          title: title,
          detail: detail,
          data: [{
            value: Dvalue,
            name:''
          }]

        },
        {
          type: 'gauge',
          startAngle: startAngle,
          center:center1,
          endAngle: endAngle,
          min: min,
          max: 100,
          radius:radius,
          splitNumber: 5,
          /*progress:{
            show: false,
            width: 10,
            itemStyle: {
              color: "#fff"
            }
          },*/
          pointer: {show:false},
          axisLine:{show:false},
          axisTick: {show:false},
          splitLine:{show:false},
          axisLabel: {show:false},
          anchor: {show:false},
          title: {show:false},
          detail: {show:false},
          data: [{
            value: 100,
            name:''
          }]

        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(option)

  }
}
</script>

