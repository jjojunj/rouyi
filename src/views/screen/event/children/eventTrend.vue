<template>
  <el-card class="camera-card event-trend">
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
    <div style="height: 100%;">
      <el-table
        :data="tableData"
        size="mini"
        class="equipment-table"
        ref="tableRef"
        @cell-mouse-enter="mEnter"
        @cell-mouse-leave="mLeave"
        height="90%"
        style="width: 100%">
        <el-table-column
          prop="eventType"
          label="事件"
          align="center"
          min-width="160%">
        </el-table-column>
        <el-table-column
          prop="respondTime"
          label="响应时间"
          align="center"
          min-width="70%">
          <template slot-scope="scope">
            {{scope.row.respondTime + '  min'}}
          </template>
        </el-table-column>
        <el-table-column
          prop="handleTime"
          align="center"
          label="处理时效">
          <template slot-scope="scope">
            {{scope.row.handleTime + '  min'}}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
</template>
<script>
import {selectEventAnalyse} from "@/api/screen.api";

export default {
  name: "eventTrend",
  data() {
    return {
      timer: null,
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
      tableData: []
    }
  },
  mounted() {
    this.timer = setInterval(this.scroll, 200);
    selectEventAnalyse().then(res => {
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
    downloadFile(name) {
      window.location.href =  process.env.VUE_APP_CAMERA_API + "/seawall/event/download?fileId=" + name;
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
<style lang="scss">
.event-trend {
  -webkit-box-flex: 590 !important;
  -ms-flex: 590 !important;
  flex: 590 !important;
}
</style>
