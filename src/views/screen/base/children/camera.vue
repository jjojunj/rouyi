<template>
  <div class="camera-con">
    <el-card class="camera-card">
      <div slot="header" class="camera-card-header">
        <div class="bt-camera">
          <div class="camera-card-header-left">
            <div>
              <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC" class="camera-card-header-icon">
              <span>摄像头图像</span>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 90%">
        <div class="camera camera1" @click="onClickRightCamare(datas[0])">
          <video id="video1"
                 width="100%"
                 height="99%"
                 ref="videoElement"
                 controls autoplay ></video>
        </div>
        <div class="camera camera2" @click="onClickRightCamare(datas[1])">
          <video id="video2"
                 width="100%"
                 height="99%"
                 ref="videoElement"
                 controls autoplay ></video>
        </div>
        <div class="camera camera3" @click="onClickRightCamare(datas[2])">
          <video id="video3"
                 width="100%"
                 height="99%"
                 ref="videoElement"
                 controls autoplay ></video>
        </div>
        <div class="camera camera4" @click="onClickRightCamare(datas[3])">
          <video id="video4"
                 width="100%"
                 height="99%"
                 ref="videoElement"
                 controls autoplay ></video>
        </div>
      </div>
    </el-card>
    <el-dialog
      title="摄像头图像"
      :modal="false"
      :visible.sync="dialogVisible"
      width="50%"
      @opened="opendCreatePlay(selectCamera)"
      custom-class="camera-dialog"
      :before-close="handleClose">
      <div class="left">
        <video id="video"
               width="100%"
               height="100%"
               ref="videoRef"
               controls autoplay ></video>
      </div>
      <div class="right">
        <dl>
          <dt>视频选择</dt>
          <div style="overflow: auto">
            <dd v-for="(mp,index) in datas" :id="mp.mpId" @click="createdPlay(mp)" :class="{'hover': (mp === selectCamera)}">
              {{index+1}}.{{mp.mpName}}
            </dd>
          </div>

        </dl>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="close-btn" @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>

</template>

<script>
import { groupListNew } from '@/api/screen.api'
import flvjs from 'flv.js'

export default {
  name: "camera",
  data() {
    return {
      dialogVisible: false,
      selectCamera: {mpId: ""},
      groups: [],
      mpids: [],
      datas: [],
      player: null
    };
  },
  mounted() {
    /*userLogin().then(res => {
      this.onOneRefreshToken()
    });*/

    groupListNew({}).then(res => {
      const datas = res.data;
      this.datas = datas;
      for (let i = 0; i < 4; i++) {
        if (flvjs.isSupported()) {
          const videoDom = document.getElementById("video" + (i+1))
          const player = flvjs.createPlayer({
            type: 'flv', // 媒体类型，默认是 flv,
            isLive: true, // 是否是直播流
            hasAudio: false, // 是否有音频
            hanVideo: true, // 是否有视频
            url: datas[i].videoUrl.replaceAll('http://172.20.56.241:8896', ''),
          })
          player.attachMediaElement(videoDom);
          player.load()
          player.play()
        }
      }
    })

  },
  methods: {
    handleClose(done) {
      done();
    },
    onClickRightCamare(data) {
      this.dialogVisible = true;
      this.selectCamera = data;
    },
    /*onOneRefreshToken () {
      refreshToken().then(res => {
        groupList().then(res => {
          this.groups = res.data.list;
          if (this.groups.length > 0) {
            this.groups.forEach((group, _index) => {
              mpList({groupId: group.groupID}).then(res => {
                res.data.list.map(mp => {
                  this.mpids.push(mp);
                })
                if (_index === this.groups.length - 1) {
                  this.onVideoConnect();
                }
              })
            });

          }
        })
        setTimeout(this.onRefreshToken, 60*1000);
      })
    },
    onVideoConnect() {
      const mpids = this.mpids;
      let num = 4;
      if (mpids.length < num) {
        num = mpids.length;
      }
      this.selectCamera = mpids[0];
      for (let i = 0; i < num; i++) {
        videoConnect({mpId: mpids[i].mpId, videoType: "flv"}).then(res => {
          this.createdPlayList("video" + (i+1), res.data.url);
        })
      }

      this.createdPlay(this.selectCamera);
    },
    createdPlayList(elementId, url) {
      if (flvjs.isSupported()) {
        const videoDom = document.getElementById(elementId)
        const player = flvjs.createPlayer({
          type: 'flv', // 媒体类型，默认是 flv,
          isLive: true, // 是否是直播流
          hasAudio: false, // 是否有音频
          hanVideo: true, // 是否有视频
          url: url,
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
    },*/
    opendCreatePlay(mp) {
      this.$nextTick(this.createdPlay(mp));
    },
    createdPlay(mp) {
      this.selectCamera = mp;
      if (mp&&mp.videoUrl) {
        if (this.player) {
          this.player.pause();
          this.player.unload();
          this.player.detachMediaElement();
          this.player.destroy();
          this.player = null;
        }
        if (flvjs.isSupported()) {
          const videoDom = this.$refs.videoRef;
          this.player = flvjs.createPlayer({
            type: 'flv', // 媒体类型，默认是 flv,
            isLive: true, // 是否是直播流
            hasAudio: false, // 是否有音频
            hanVideo: true, // 是否有视频
            url: mp.videoUrl.replaceAll('http://172.20.56.241:8896', ''),
          })
          this.player.attachMediaElement(videoDom);
          this.player.load()
          this.player.play()
        }
      }

    },
    /*onRefreshToken () {
      refreshToken().then(res => {
        setTimeout(this.onRefreshToken, 1000*60)
      })
    }*/
  }
}
</script>
<style lang="scss">

</style>
