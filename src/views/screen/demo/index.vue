<template>
  <div class="playVideo-layout">
    <!-- 播放器 -->
    <div id="app-container" class="video-box">
      <video
        ref="videoElement"
        :src="videoUrl"
        id="videoElement"
        controls
        muted
        style="width: 100%; height: 100%; object-fit: fill"
      ></video>
    </div>
  </div>
</template>
<script>
import hlsjs from 'hls.js'
export default {
  name: "demo",
  data() {
    return {
      videoUrl: "http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8",//这里书写路径，例
    };
  },
  mounted() {
    this.show();
  },
  methods: {
    //播放
    show() {
      this.video = document.getElementById("videoElement"); //定义挂载点
      console.log(this.video);
      if (hlsjs.isSupported()) {
        this.hlsjs = new hlsjs();
        this.hlsjs.loadSource(this.videoUrl);//设置播放路径
        this.hlsjs.attachMedia(this.video);//解析到video标签上
        console.log(this.hlsjs);
        this.hlsjs.on(hlsjs.Events.MANIFEST_PARSED, () => {
          this.video.play();
          console.log("加载成功");
        });
        this.hlsjs.on(hlsjs.Events.ERROR, (event, data) => {
          //   console.log(event, data);
          // 监听出错事件
          console.log("加载失败");
        });
      } else {
        this.$message.error("不支持的格式");
        return;
      }
    },
    //停止播放
    closeVideo() {
      if (this.hlsjs) {
        this.$refs.videoElement.pause();
        this.video.pause();
        this.hlsjs.destroy();
        this.hlsjs = null;
        this.$emit("closeVideo");
      }
    },
  }
}
</script>
