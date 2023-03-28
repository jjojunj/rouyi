<template>
  <el-card class="camera-card event-list">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <div>
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
            <span>事件列表</span>
          </div>

        </div>
      </div>
    </div>
    <div style="height: 450px;">
      <el-form label-position="top" label-width="50px" inline="true" size="mini" :model="formLabelAlign">
        <el-row>
          <el-col :span="8">
            <el-form-item label="事件类型">
              <el-select v-model="formLabelAlign.eventType" clearable @change="onSearch" popper-class="camera-popper" placeholder="请选择">
                <el-option
                  v-for="item in types"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="时间">
              <el-date-picker
                @change="onSearch"
                clearable
                popper-class="camera-popper"
                v-model="formLabelAlign.eventTime"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="级别">
              <el-select v-model="formLabelAlign.eventLevel" clearable @change="onSearch" popper-class="camera-popper" placeholder="请选择">
                <el-option
                  v-for="item in levels"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="状态">
              <el-select v-model="formLabelAlign.eventStatus" clearable @change="onSearch" popper-class="camera-popper" placeholder="请选择">
                <el-option
                  v-for="item in status"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div style="height: 100%; width: 100%">
        <el-table
          :data="tableData"
          height="85%"
          size="mini"
          @cell-mouse-enter="mEnter"
          @cell-mouse-leave="mLeave"
          class="equipment-table event-table"
          ref="tableRef"
          style="width: 100%">
          <el-table-column
            prop="eventType"
            label="事件"
            align="center"
            min-width="60%">
          </el-table-column>
          <el-table-column
            prop="eventLevel"
            label="级别"
            align="center"
            min-width="30%">
          </el-table-column>
          <el-table-column
            prop="eventStatus"
            min-width="40%"
            align="center"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="eventTime"
            min-width="50%"
            align="center"
            label="时间">
          </el-table-column>
        </el-table>
      </div>

    </div>
  </el-card>
</template>
<script>
import {dictType, selectEventByCondition} from "@/api/screen.api";

export default {
  name: "eventList",
  data() {
    return {
      timer: null,
      status: [],
      levels: [],
      types: [],
      formLabelAlign: {
        eventType: '',
        eventTime: '',
        eventStatus: '',
        eventLevel: ''
      }, tableData: []
    };
  },
  mounted() {
    dictType("eventType").then(res => {
      const types = [];
      res.data.map(row => {
        types.push({label: row.dictLabel, value: row.dictValue})
      })
      this.types = types;

    })
    dictType("eventLevel").then(res => {
      const levels = [];
      res.data.map(row => {
        levels.push({label: row.dictLabel, value: row.dictValue})
      })
      this.levels = levels;

    })
    dictType("eventStatus").then(res => {
      const status = [];
      res.data.map(row => {
        status.push({label: row.dictLabel, value: row.dictValue})
      })
      this.status = status;
    })
    this.timer = setInterval(this.scroll, 200);

    this.onSearch();
  },
  methods: {
    onSearch: function () {
      selectEventByCondition(this.formLabelAlign).then(res => {
        this.tableData = res.data;
      })
    },
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
<style lang="scss">
.event-table {
  margin-top: 10px;
}

.event-list {
  -webkit-box-flex: 590 !important;
  -ms-flex: 590 !important;
  flex: 590 !important;
}
</style>
