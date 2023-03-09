<template>
  <el-card class="camera-card event-list">
    <div slot="header" class="camera-card-header">
      <div class="bt-camera">
        <div class="camera-card-header-left">
          <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
          <span>事件列表</span>
        </div>
      </div>
    </div>
    <div style="height: 450px;">
      <el-form label-position="top" label-width="50px" inline="true" size="mini" :model="formLabelAlign">
        <el-row>
          <el-col :span="8">
            <el-form-item label="事件类型">
              <el-select v-model="formLabelAlign.type" popper-class="camera-popper" placeholder="请选择">
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
                popper-class="camera-popper"
                v-model="formLabelAlign.date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="级别">
              <el-select v-model="formLabelAlign.level" popper-class="camera-popper" placeholder="请选择">
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
              <el-select v-model="formLabelAlign.status" popper-class="camera-popper" placeholder="请选择">
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
          class="equipment-table event-table"
          ref="tableRef"
          style="width: 100%">
          <el-table-column
            prop="type"
            label="事件类型"
            min-width="40%">
          </el-table-column>
          <el-table-column
            prop="level"
            label="级别"
            min-width="40%">
          </el-table-column>
          <el-table-column
            prop="date"
            min-width="50%"
            label="时间">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址">
          </el-table-column>
        </el-table>
      </div>

    </div>
  </el-card>
</template>
<script>
export default {
  name: "eventList",
  data() {
    return {
      status: [
        {
          value: '已处理',
          label: '已处理'
        },
        {
          value: '待处理',
          label: '待处理'
        }
      ],
      levels: [
        {
          value: '一级',
          label: '一级'
        },
        {
          value: '二级',
          label: '二级'
        },
        {
          value: '三级',
          label: '三级'
        }
      ],
      types: [
        {
          value: '水压超限',
          label: '水压超限'
        },
        {
          value: '渗透压过高',
          label: '渗透压过高'
        },
        {
          value: '流速超限',
          label: '流速超限'
        },
        {
          value: '水位超限',
          label: '水位超限'
        },

      ],
      formLabelAlign: {
        type: '',
        date: '',
        status: '',
        level: ''
      }, tableData: [
        {
          type: '水位超限',
          level: '一级',
          date: '2023-03-05',
          address: '单昆水闸'
        },
        {
          type: '水流超限',
          level: '二级',
          date: '2023-03-05',
          address: '海思水闸'
        },
        {
          type: '水位超限',
          level: '一级',
          date: '2023-03-05',
          address: '北坦江水闸'
        },
        {
          type: '水位超限',
          level: '三级',
          date: '2023-03-05',
          address: '孟建水闸'
        },
        {
          type: '水位超限',
          level: '三级',
          date: '2023-03-05',
          address: '孟建水闸'
        },
        {
          type: '水位超限',
          level: '三级',
          date: '2023-03-05',
          address: '孟建水闸'
        }
      ]
    };
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
