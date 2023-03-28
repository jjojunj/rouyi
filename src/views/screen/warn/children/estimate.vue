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
        height="100%"
        size="mini"
        class="equipment-table"
        ref="tableRef"
        style="width: 100%">
        <el-table-column
          prop="safeName"
          align="center"
          width="220%"
          label="报告名称">
        </el-table-column>
        <el-table-column
          prop="safeTime"
          label="报告时间"
          align="center"
          width="100%">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作">
          <template slot-scope="scope">
            <span style="cursor: pointer" class="el-icon-download" @click="downloadFile(scope.row.file)"></span>
          </template>
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
        {safeTime: "2023-03-20", safeName: "海塘安全性态评估报告-断面S22", safeTheme: "断面S22工程实例安全评估分析", safeMake: "各项安全评估评分均判定为\"安全\"", file: "cbad626441e34acfa81355a252350727"},
        {safeTime: "2023-03-19", safeName: "海塘安全性态评估报告-断面S03", safeTheme: "断面S03工程实例安全评估分析", safeMake: "各项安全评估评分均判定为\"安全\"", file: "73831182e309464c9c4a91e4060d10d4"},
        {safeTime: "2023-03-18", safeName: "海塘安全性态评估报告-断面S39", safeTheme: "断面S39工程实例安全评估分析", safeMake: "各项安全评估评分均判定为\"安全\"", file: "fd78a0277e0848f9a0d0d431a97c1924"},
        {safeTime: "2023-03-17", safeName: "海塘安全性态评估报告-断面S23", safeTheme: "断面S23工程实例安全评估分析", safeMake: "各项安全评估评分均判定为\"安全\"", file: "01396492e789487d977dd95156be9f8b"},
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
    downloadFile(name) {
      window.location.href =  process.env.VUE_APP_CAMERA_API + "/seawall/event/download?fileId=" + name;
    },
  }
}
</script>
