<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>处置效率分析</span>
          </div>

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
    <div style="height: 100%">
      <el-table
        :data="tableData"
        height="200"
        size="mini"
        class="equipment-table"
        ref="tableRef"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="报告名称">
        </el-table-column>
        <el-table-column
          prop="date"
          label="报告时间"
          width="120">
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
export default {
  name: "estimate",
  data() {
    return {
      value: "全部",
      tableData: [
        {
          name: '单昆风险评估报告',
          date: '2023-02-20',
        },
        {
          name: '双昆风险评估报告',
          date: '2023-02-20',
        },
        {
          name: '北堤风险评估报告',
          date: '2023-02-20',
        },
        {
          name: '单昆风险评估报告',
          date: '2023-01-20',
        }
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
