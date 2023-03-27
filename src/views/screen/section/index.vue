<template>
  <div class="section-altert el-message-box__wrapper">
    <el-card class="camera-card screen-alter" style="width: 30%;" v-show="show">
      <div slot="header" class="camera-card-header">
        <div class="bt-camera">
          <div class="camera-card-header-left">
            <div>
              <img data-v-24cea621="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBvZLJDoJADIZbwJXN5Yl8Po8mJj6ad0+amLg7ojMO9CcRAp4m9PJNKJ1+6ZS3yhiyoTIqIjPC5wfUQm8gXITM1BAeOYrgpuRwuAnvb+EVPL+Ew+j/Re6Mjui8f8CgZnLC7OI+dWR0QMfdHSZZlRdwNqaOjPaqanSpmVxBAs1rs8qpyUtyMgeJW6NPKIdeKhxho40ufxBG87LEn4iJLxWujbgtYdR6mVNzEMMkhUkilUKDvLsZtSU09yYwwetw2mRi81E3RnY/pjhhJkH5ShHMChryw26MbMdZDrvBMQxjGIW/JvbDyKnRFy7/SRGLlf+8AAAAAElFTkSuQmCC"
                   class="camera-card-header-icon">
              <span>{{ data.secName }}</span>
            </div>
            <div class="condition">
              <el-select @change="changeValue" v-model="equipValue" v size="mini" clearable popper-class="camera-popper" placeholder="请选择设备">
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
      <div class="sestion-list">
        <div style="width: 50%" v-for="(item) in data.list">{{ item.staName + " : " + item.meaValue}}</div>
      </div>
    </el-card>
  </div>

</template>
<script>
import {selectEquipList, selectSectionVal, selectStaValue} from "@/api/screen.api";

export default {
  name: "screen-section",
  props: ["show", "section"],
  data() {
    return {
      options: [],
      equipValue: "",
      data: {
        secName: "XX断面",
        list: []
      }
    }
  },
  watch: {
    section(newVal, oldVal) {
      if (newVal !== oldVal) {
        selectEquipList({secId: newVal}).then(res => {
          const options = [];
          res.data.map(row => {
            options.push({label: row.deviceName, value: row.eId});
          });
          this.options = options;
        });

        selectSectionVal({secId: newVal}).then(res => {
          this.data = res.data;
        });
      }
    }
  },
  mounted() {
    const section = this._props.section;
    if (section) {
      selectEquipList({secId: section}).then(res => {
        const options = [];
        res.data.map(row => {
          options.push({label: row.deviceName, value: row.eId});
        });
        this.options = options;
      });

      selectSectionVal({secId: this._props.section}).then(res => {
        this.data = res.data;
      });
    }

  },
  methods: {
    onClose() {
      this.$emit("onClose")
    },
    onRefreshSection() {
      selectSectionVal({secId: this._props.section}).then(res => {
        this.data = res.data;
      });
    },
    changeValue(value) {
      if (value) {
        selectStaValue({equId: value}).then(res => {
          this.data.list = res.data;
        })
      } else {
        this.onRefreshSection();
      }

    }
  }
}
</script>
