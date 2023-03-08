<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>断面详情</span>

          <div class="info-condition">
            <div class="info-cond-hover">水闸</div>
            <div>河道</div>
            <div>海塘</div>
            <div>抢险</div>
          </div>
        </div>

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
        label="名称"
        width="100">
      </el-table-column>
      <el-table-column
        prop="scale"
        label="规模"
        width="100">
      </el-table-column>
      <el-table-column
        prop="num"
        label="孔数"
        width="100">
      </el-table-column>
      <el-table-column
        prop="max"
        label="最大流量">
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
          scale: '中型',
          name: '盟建水闸',
          num: '3个',
          max: '1000m³/s'
        },
        {
          scale: '大型',
          name: '双昆水闸',
          num: '2个',
          max: '1000m³/s'
        },
        {
          scale: '小型',
          name: '北堤水闸',
          num: '4个',
          max: '1000m³/s'
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
