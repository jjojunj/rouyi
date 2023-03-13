<template>
  <div class="camera-con">
    <el-card class="camera-card">
      <div slot="header" class="camera-card-header">
        <div class="bt-camera">
          <div class="camera-card-header-left">
            <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">摄像头图像</div>
        </div>
      </div>
      <div style="height: 90%">
        <div class="camera camera1">
          <img src="~@/assets/images/zm1.jpg" height="100%" width="100%">
        </div>
        <div class="camera camera2">
          <img src="~@/assets/images/zm1.jpg" height="100%" width="100%">
        </div>
        <div class="camera camera3">
          <img src="~@/assets/images/zm1.jpg" height="100%" width="100%">
        </div>
        <div class="camera camera4">
          <img src="~@/assets/images/zm1.jpg" height="100%" width="100%">
        </div>
      </div>
    </el-card>
    <el-dialog
      title="摄像头图像"
      :modal="false"
      :visible.sync="dialogVisible"
      width="50%"
      custom-class="camera-dialog"
      :before-close="handleClose">
      <div class="left">
        <img src="~@/assets/images/bg4.png">
      </div>
      <div class="right">
        <dl>
          <dt>视频选择</dt>
          <dd>1.盟建水闸-左</dd>
          <dd>2.双昆水闸-西侧门</dd>
          <dd>3.北堤水闸-大门</dd>
          <dd>4.盟建水闸-闸门</dd>
          <dd>5.双昆水闸-右</dd>
        </dl>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="close-btn" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import {userLogin} from "@/api/screen.api";

export default {
  name: "camera",
  data() {
    return {
      dialogVisible: false,
      vedios: [

      ]
    };
  },
  mounted() {
    userLogin().then(res => {
      debugger
    })
  },
  methods: {
    handleClose(done) {
      done();
    }
  }
}
</script>
<style lang="scss">

</style>
