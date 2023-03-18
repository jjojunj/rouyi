<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>测点详情</span>
          </div>
        </div>

      </div>
    </div>
    <el-table
      :data="tableData"
      height="80%"
      class="equipment-table"
      ref="tableRef"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="断面名称"
        min-width="40%">
      </el-table-column>
      <el-table-column
        prop="name2"
        label="测点名称"
        min-width="60%">
      </el-table-column>
      <el-table-column
        prop="num"
        label="测值"
        min-width="40%">
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
export default {
  name: "equipmentInfo",
  data() {
    return {
      tableData: [
        {
          name: '东面',
          num: '3个',
          name2: '盟建水闸'
        },
        {
          name: '西面',
          num: '2个',
          name2: '双昆水闸'
        },
        {
          name: '北面',
          num: '4个',
          name2: '北堤水闸'
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
