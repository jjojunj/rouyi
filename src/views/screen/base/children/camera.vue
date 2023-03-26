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
        <div class="camera camera1" @click="onClickRightCamare">
          <video width="100%"
                 height="99%"
                 id="video1"
                 :src="src1"
                 controls
                 muted ></video>
        </div>
        <div class="camera camera2">
          <video width="100%"
                 height="99%"
                 :src="src2"
                 id="video2"
                 controls
                 muted ></video>
        </div>
        <div class="camera camera3">
          <video width="100%"
                 height="99%"
                 :src="src3"
                 id="video3"
                 controls
                 muted ></video>
        </div>
        <div class="camera camera4">
          <video width="100%"
                 :src="src4"
                 height="99%"
                 id="video4"
                 controls
                 muted ></video>
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
        <video width="100%"
               height="100%"
               :src="src"
               id="video"
               controls autoplay ></video>
      </div>
      <div class="right">
        <dl>
          <dt>视频选择</dt>
          <div style="overflow: auto">
            <dd v-for="(mp,index) in mpids" :id="mp.mpId" @click="createdPlay(mp)" :class="{'hover': (mp === selectCamera)}">
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
import {groupList, mpList, refreshToken, userLogin, videoConnect} from "@/api/screen.api";
import hlsjs from 'hls.js'

export default {
  name: "camera",
  data() {
    return {
      dialogVisible: false,
      selectCamera: {mpId: ""},
      groups: [],
      mpids: [],
      src: "",
      src1: "",
      src2: "",
      src3: "",
      src4: "",

    };
  },
  mounted() {
    userLogin().then(res => {
      this.onOneRefreshToken()
    })
  },
  methods: {
    handleClose(done) {
      done();
    },
    onClickRightCamare() {
      this.dialogVisible = true
    },
    onOneRefreshToken () {
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
        videoConnect({mpId: mpids[i].mpId, videoType: "hls"}).then(res => {
          const player = this.createdPlayList("video" + (i+1), res.data.url);
        })
      }

      this.createdPlay(this.selectCamera);
    },
    createdPlayList(elementId, url) {
      const video = document.getElementById(elementId); //定义挂载点
      console.log(this.video);
      if (hlsjs.isSupported()) {
        this.hlsjs = new hlsjs();
        this.hlsjs.loadSource(url);//设置播放路径
        this.hlsjs.attachMedia(video);//解析到video标签上
        console.log(this.hlsjs);
        this.hlsjs.on(hlsjs.Events.MANIFEST_PARSED, () => {
          video.play();
          console.log("加载成功");
        });
        this.hlsjs.on(hlsjs.Events.ERROR, (event, data) => {
          //   console.log(event, data);
          // 监听出错事件
          console.log("加载失败");
          this.$message.error('加载视频失败');
        });
      } else {
        this.$message.error("不支持的格式");
        return;
      }
    },
    createdPlay(mp) {
      this.selectCamera = mp;
      videoConnect({mpId: mp.mpId, videoType: "hls"}).then(res => {
        const video = document.getElementById("video"); //定义挂载点
        console.log(this.video);
        if (hlsjs.isSupported()) {
          this.hlsjs = new hlsjs();
          this.hlsjs.loadSource(res.data.url);//设置播放路径
          this.hlsjs.attachMedia(video);//解析到video标签上
          console.log(this.hlsjs);
          this.hlsjs.on(hlsjs.Events.MANIFEST_PARSED, () => {
            video.play();
            console.log("加载成功");
          });
          this.hlsjs.on(hlsjs.Events.ERROR, (event, data) => {
            //   console.log(event, data);
            // 监听出错事件
            this.$message.error('加载视频失败');
          });
        } else {
          this.$message.error("不支持的格式");
          return;
        }
      })
    },
    onRefreshToken () {
      refreshToken().then(res => {
        setTimeout(this.onRefreshToken, 1000*60)
      })
    }
  }
}
</script>
<style lang="scss">

</style>
