<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">设备警告列表</div>
      </div>
    </div>
    <el-table
      :data="tableData"
      height="200"
      class="equipment-table"
      ref="tableRef"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="设备名称"
        width="120">
      </el-table-column>
      <el-table-column
        prop="status"
        width="120"
        label="告警状态">
      </el-table-column>
      <el-table-column
        prop="date"
        width="150"
        label="告警时间">
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
export default {
  name: "equipmentWarn",
  data() {
    return {
      tableData: [
        {
          date: '2023-02-19 18:00',
          name: '单昆流速计',
          status: '二级警告'
        },
        {
          date: '2023-02-05 18:00',
          name: '双昆流速计',
          status: '二级警告'
        },
        {
          date: '2023-01-22 18:00',
          name: '北堤流速计',
          status: '二级警告'
        },
        {
          date: '2023-01-15 18:00',
          name: '单昆流速计',
          status: '二级警告'
        },
        {
          date: '2023-01-15 18:00',
          name: '单昆流速计',
          status: '二级警告'
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
}
</script>
