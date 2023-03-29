<template>
  <el-card class="camera-card">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>设备状态告警</span>
          </div>
        </div>
      </div>
    </div>
    <el-table
      :data="tableData"
      height="80%"
      class="equipment-table"
      ref="tableRef"
      @cell-mouse-enter="mEnter"
      @cell-mouse-leave="mLeave"
      tooltip-effect="dark"
      style="width: 100%">
      <el-table-column
        prop="deviceName"
        label="设备名称"
        :show-overflow-tooltip="true"
        align="center"
        min-width="100%">
      </el-table-column>
      <el-table-column
        prop="status"
        min-width="50%"
        align="center"
        :show-overflow-tooltip="true"
        label="状态">
        <template slot-scope="scope">
         {{scope.row.status === 'online'?'在线': '离线'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="policeTime"
        align="center"
        :show-overflow-tooltip="true"
        label="告警时间">
      </el-table-column>
    </el-table>
  </el-card>

</template>

<script>
import { selectEquEmergency } from '@/api/screen.api'

export default {
  name: "equipmentWarn",
  data() {
    return {
      timer: null,
      tableData: []
    }
  },
  mounted() {
    this.timer = setInterval(this.scroll, 200)

    selectEquEmergency({status: "offline"}).then(res => {
      this.tableData = res.data;
    })
  },
  methods: {
    scroll() {
      const table = this.$refs.tableRef;
      const divData = table.bodyWrapper;
      divData.scrollTop += 2;
      if (divData.clientHeight + divData.scrollTop == divData.scrollHeight) {
        divData.scrollTop = 0;
      }
    },
    mEnter() {
      clearInterval(this.timer)
    },
    mLeave() {
      this.timer = setInterval(this.scroll, 200)
    }
  }
}
</script>
