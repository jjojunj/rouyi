<template>
  <el-card class="camera-card event-statistics">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>风险现状</span>
          </div>

        </div>
      </div>
    </div>
    <div style="height: 100%">
      <div style="height: 100%" id="present"></div>
<!--      <div style="height: 30%" class="present_bottom">
        <div><div class="shuzhi">({{"\xa0"}}75 , 100{{"\xa0"}}]</div><div class="pinggu">评估为</div><div class="remark">安全</div></div>
        <div><div class="shuzhi">({{"\xa0"}}50 ,{{"\xa0\xa0\xa0"}}75{{"\xa0"}}]</div><div class="pinggu">评估为</div><div class="remark">局部异常</div></div>
        <div><div class="shuzhi">({{"\xa0"}}0{{"\xa0\xa0\xa0"}},{{"\xa0\xa0\xa0"}}50{{"\xa0"}}]</div><div class="pinggu">评估为</div><div class="remark">不安全</div></div>
      </div>-->
    </div>
  </el-card>
</template>

<script>
import {selectFraction} from "@/api/screen.api";

export default {
  name: "present",
  mounted(){
    selectFraction().then(res => {
      const num = res.data.fraction;
      const safeName = num > 75 ? "安全" : num > 50 ? '局部异常' : "不安全";
      const myChart = this.$echarts.init(document.getElementById('present'))
      const colorList = [
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#fc6b84', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#e43c59', // 100% 处的颜色
            },
          ],
        },
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#FFD18C', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#FEAD5A', // 100% 处的颜色
            },
          ],
        },
        {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          colorStops: [
            {
              offset: 0,
              color: '#00D0BF', // 0% 处的颜色
            },
            {
              offset: 1,
              color: '#05C399', // 100% 处的颜色
            },
          ],
        },
      ];

      const data = {
        name: '信用等级',
        //0 - 100
        value: num,
      };

      const textMap = {
        20: '不安全',
        68: '局部异常',
        90: '安全',
      };


      const option = {
        title: [{
          text: '',
          bottom: '5%',
          x: 'center',
          textStyle: {
            fontWeight: 'bold',
            fontSize: 12,
            fontFamily: 'MiSans-Bold',
            color: '#fff'
          }
        }],
        tooltip: {},
        series: [
          {
            type: 'gauge',
            splitNumber: 100,
            radius: '110%',
            startAngle: 180,
            endAngle: 0,
            min: 0,
            max: 100,
            center: ["50%", "68%"],
            pointer: {
              show: true,
              width: 7,
              length: '60%',
              borderColor: '#fff',
              borderWidth: '10',
              itemStyle: {
                color: 'auto',
              },
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 30,
                color: [
                  [0.5, colorList[0]],
                  [0.75, colorList[1]],
                  [1, colorList[2]],
                ],
                borderColor: '#fff',
                borderWidth: '10',
              },
            },
            axisLabel: {
              show: true,
              color: '#fff',
              distance: -70,
              fontSize: 15,
              formatter: function (v) {
                return textMap[v];
              },
            }, //刻度标签。
            axisTick: {
              show: 0,
            }, //刻度样式
            splitLine: {
              show: 0,

              lineStyle: {
                color: '#fff',
                width: 2,
              },
            }, //分隔线样式
            detail: {
              show: 0,
            },
            title: {
              show: false,
            },
            data: [data],
          },

          //外层
          {
            type: 'gauge',
            radius: '120%',
            min: 0,
            max: 100,
            startAngle: 180,
            center: ["50%", "68%"],
            endAngle: 0,
            pointer: {
              show: false,
            },
            axisLine: {
              show: true,
              lineStyle: {
                width: 35,
                color: [
                  [0.5, colorList[0]],
                  [0.75, colorList[1]],
                  [1, colorList[2]],
                ],
                opacity: 0.15,
                borderColor: '#fff',
                borderWidth: '10',
              },
            },
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: false,
            },
            detail: {
              show: true,
              formatter: function (params) {
                return '{a|综合风险评估}    {b|'+safeName+'}';
              },
              color: '#4AEAAE',
              fontSize: 18,
              offsetCenter: [0, 50],
              rich: {
                a: {
                  color: "#fff",
                  lineHeight: 45,
                  fontSize: 18,
                  fontWeight: 550,
                },
                b: {
                  color: num>75?"#05C399": num > 50? "#FEAD5A":"#e43c59",
                  fontSize: 32,
                  fontWeight: 550,
                  padding: [10, 0, 10, 0],
                }
              },
            },
            title: {
              show: false,
            },
            data: [data],
          },
        ],
      };
      myChart.setOption(option)
    })


  }
}
</script>

