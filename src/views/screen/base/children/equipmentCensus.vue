<template>
  <div>
    <div>
      <el-card class="camera-card screen-alter" style="width: 300px;" v-show="visible">
        <div slot="header" class="camera-card-header">
          <div class="bt-camera">
            <div class="camera-card-header-left">
              <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC"
                   class="camera-card-header-icon">某某断面</div>
            <i class="el-icon-close" @click="onHiddenAlter"></i>
          </div>
        </div>
        <el-descriptions title="" :column="1" border contentClassName="desc-content" labelClassName="desc-label">
          <el-descriptions-item label="位移: 0.01m">风速: 10m/s</el-descriptions-item>
          <el-descriptions-item label="沉降: 0.01m">渗压: 1kPa</el-descriptions-item>
          <el-descriptions-item label="水位: 0.01m"></el-descriptions-item>
        </el-descriptions>
      </el-card>
    </div>

    <div class="screen-content-bottom">

      <div class="container">
        <el-row :gutter="20" class="row">
          <el-col :span="6"><div class="grid-content bg-purple" @click="onClickItem(123)"><div class="title">总数</div><div><span class="num">219</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">在线</div><div><span class="num">219</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">离线</div><div><span class="num">219</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">在线率</div><div><span class="num">219</span><span>个</span></div></div></el-col>
        </el-row>
        <el-row :gutter="20" class="row">
          <el-col :span="8"><div class="grid-content bg-purple"><div class="title">设备类型</div><div><span class="num">219</span><span>个</span></div></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><div class="title">设备数量</div><div><span class="num">219</span><span>个</span></div></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"><div class="title">在线数</div><div><span class="num">219</span><span>个</span></div></div></el-col>
        </el-row>
      </div>

    </div>
  </div>

</template>
<script>
export default {
  name: "equipmentCensus",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClickItem(data) {
      this.visible = true;
    },
    onHiddenAlter() {
      this.visible = false;
    }
  }
}
</script>
