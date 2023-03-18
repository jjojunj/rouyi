<template>
  <div>
    <el-card class="camera-card screen-alter" style="width: 300px;" v-show="show">
      <div slot="header" class="camera-card-header">
        <div class="bt-camera">
          <div class="camera-card-header-left">
            <div>
              <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC"
                   class="camera-card-header-icon">
              <span>{{ data.name }}</span>
            </div>
            <div class="condition">
              <el-select v-model="value" size="mini" popper-class="camera-popper" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <div>
                <i class="el-icon-close" @click="onClose"></i>
              </div>
            </div>
          </div>


        </div>
      </div>
      <el-descriptions title="" :column="1" border contentClassName="desc-content" labelClassName="desc-label">
        <el-descriptions-item label="位移: 0.01m">风速: 10m/s</el-descriptions-item>
        <el-descriptions-item label="沉降: 0.01m">渗压: 1kPa</el-descriptions-item>
        <el-descriptions-item label="水位: 0.01m"></el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>

</template>
<script>
export default {
  name: "screen-section",
  props: ["show", "section"],
  data() {
    return {
      options: [
        {label: "设备1", value: "xxx"},
        {label: "设备2", value: "cccc"}
      ],
      data: {
        name: "XX断面"
      }
    }
  },
  methods: {
    onClose() {
      this.$emit("onHiddenAlter")
    }
  }
}
</script>
