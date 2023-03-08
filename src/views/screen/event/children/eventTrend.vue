<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>处置效率分析</span>
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
    <div style="height: 200px;">
      <el-table
        :data="tableData"
        height="200"
        size="mini"
        class="equipment-table"
        ref="tableRef"
        style="width: 100%">
        <el-table-column
          prop="no"
          label="编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="average"
          label="平均响应时效"
          width="120">
        </el-table-column>
        <el-table-column
          prop="average2"
          label="平均处理时效">
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "eventTrend",
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
      ],
      tableData: [
        {
          no: '20230305',
          average: '2min',
          average2: '122min'
        },
        {
          no: '20230304',
          average: '2min',
          average2: '122min'
        },
        {
          no: '20230303',
          average: '2min',
          average2: '122min'
        },
        {
          no: '20230302',
          average: '2min',
          average2: '122min'
        },
        {
          no: '20230301',
          average: '2min',
          average2: '122min'
        },

      ]
    }
  },
  mounted() {
    const table = this.$refs.tableRef;
    const divData = table.bodyWrapper;
    setInterval(() => {
      divData.scrollTop += 2;
      if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
        divData.scrollTop = 0;
      }
    }, 200);
  },
  methods: {
  }
}
</script>
