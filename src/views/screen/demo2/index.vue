<template>
  <div class="playVideo-layout">
    <!-- 播放器 -->
    <div id="app-container" class="video-box">
      <video
        ref="videoElement"
        id="videoElement"
        controls
        muted
        style="width: 100%; height: 100%; object-fit: fill"
      ></video>
    </div>
  </div>
</template>
<script>
import flvjs from 'flv.js'
export default {
  name: "demo",
  mounted() {
    this.show();
  },
  methods: {
    //播放
    show() {
      console.log(this.video);
      if (flvjs.isSupported()) {
        const videoDom = document.getElementById("videoElement")
        const player = flvjs.createPlayer({
          type: 'flv', // 媒体类型，默认是 flv,
          isLive: true, // 是否是直播流
          hasAudio: false, // 是否有音频
          hanVideo: true, // 是否有视频
          url: 'http://172.20.56.241:8896/live/122272000100000001002880.flv',
        })
        player.attachMediaElement(videoDom);
        player.load()
        player.play()

        player.on(flvjs.Events.ERROR, (err, errdet) => {
          // 参数 err 是一级异常，errdet 是二级异常
          if (err == flvjs.ErrorTypes.MEDIA_ERROR) {
            console.log('媒体错误')
            if(errdet == flvjs.ErrorDetails.MEDIA_FORMAT_UNSUPPORTED) {
              console.log('媒体格式不支持')
            }
          }
          if (err == flvjs.ErrorTypes.NETWORK_ERROR) {
            console.log('网络错误')
            if(errdet == flvjs.ErrorDetails.NETWORK_STATUS_CODE_INVALID) {
              console.log('http状态码异常')
            }
          }
          if(err == flvjs.ErrorTypes.OTHER_ERROR) {
            console.log('其他异常：', errdet)
          }
        });
        player.on(flvjs.Events.METADATA_ARRIVED, () => {
          console.log('视频加载完成')
        })
        return player;
      }
    },
  }
}
</script>
