<template>
  <div>
    <screen-section :show="visible" :section="section" v-show="visible" @onClose="onClose"/>
    <div class="screen-content-bottom">

      <div class="container">
        <div class="row">
          <div class="cell"><div class="title">设备类型</div><div><span class="num">{{ data.totalCount }}</span><span>个</span></div></div>
          <div class="cell" style="margin-left: 5px;"><div class="title">在线率</div><div><span class="num">{{ data.onlineRate }}%</span></div></div>
          <div class="cell"><div class="title">总数</div><div><span class="num">{{ data.sumNum }}</span><span>个</span></div></div>
          <div class="cell" style="margin-left: 5px;"><div class="title">在线</div><div><span class="num">{{ data.onlineNum }}</span><span>个</span></div></div>
          <div class="cell" style="margin-left: 5px;"><div class="title">离线</div><div><span class="num">{{data.offline}}</span><span>个</span></div></div>
        </div>
<!--        <el-row :gutter="20" class="row">
          <el-col :span="8"><div class="grid-content bg-purple"><div class="title">设备类型</div><div><span class="num">5</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">总数</div><div><span class="num">219</span><span>个</span></div></div></el-col>
        </el-row>
        <el-row :gutter="20" class="row">
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">在线</div><div><span class="num">209</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">离线</div><div><span class="num">10</span><span>个</span></div></div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple"><div class="title">在线率</div><div><span class="num">95.43%</span><span>个</span></div></div></el-col>
        </el-row>-->
      </div>

    </div>
  </div>

</template>
<script>
import ScreenSection from "@/views/screen/section";
import {selectEquStatistics} from "@/api/screen.api";
export default {
  name: "equipmentCensus",
  components: {ScreenSection},
  data() {
    return {
      visible: false,
      section: "",
      data: {}
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    }
  },
  mounted() {
    selectEquStatistics().then(res => {
      this.data = res.data;
    })
  }
}
</script>
