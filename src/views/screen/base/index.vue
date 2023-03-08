<template>
  <div class="screen-container">

    <div class="screen-content-right">

    </div>
    <div class="screen-content-center">
      <equipment-census/>
    </div>
    <div class="screen-content-right">
      <camera/>
      <equipment-warn/>
      <equipment-info/>
    </div>
  </div>

</template>

<script>
import Camera from "@/views/screen/base/children/camera";
import EquipmentWarn from "@/views/screen/base/children/equipmentWarn";
import EquipmentCensus from "@/views/screen/base/children/equipmentCensus";
import EquipmentInfo from "@/views/screen/base/children/equipmentInfo";
export default {
  name: "screen",
  components: {EquipmentInfo, EquipmentCensus, EquipmentWarn, Camera},
}
</script>

<style lang="scss">
@import "../common.scss";

.census-alter {
  background: url(data:image/png;base64,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) rgba(0,32,80,.55) 50% no-repeat;
  border: 0px;

  .el-message-box__title {
    color: #fff;
  }
  .el-message-box__content {
    color: #fff;
  }

}

.screen-alter {
  left: 40%;
  top: 40%;
  position: absolute;
  .el-icon-close {
    cursor: pointer;
    margin-top: 10px;
    margin-right: 10px;
  }
  .is-bordered .el-descriptions-item__cell {
    border: 1px solid rgba(73,90,123,.5);
    width: 50px;
  }
  .el-descriptions__body {
    color: #fff;
    background-color: transparent;
  }
  .desc-content {
    color: #fff;
  }
  .desc-label {
    color: #fff;
    background-color: transparent;
  }
}

.screen-content-bottom {
  width: 28%;
  margin-right: 10px;
  padding-top: 35px;
  background-image: url("~@/assets/images/rectangle.png");
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  -webkit-box-shadow: inset 0 0.841837px 42.0918px rgb(1 194 255 / 25%);
  box-shadow: inset 0 0.841837px 42.0918px rgb(1 194 255 / 25%);
  border-radius: 106px;

  .container {
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    display: flex;
    font-weight: bold;
    font-size: 15px;
    flex-direction: column;
    align-content: space-between;
    justify-content: flex-end;
    align-items: stretch;
    flex-wrap: wrap;
    .row {
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
      -ms-flex-wrap: wrap;
      flex-wrap: nowrap;
      -ms-flex-line-pack: end;
      align-content: center;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: center;
      -webkit-box-align: start;
      -ms-flex-align: start;
      align-items: flex-start;
      text-align: center;
      margin-bottom: 30px;
      text-align: center;
      margin-bottom: 30px;
      .cell {
        margin: 0px 20px;
      }
      .title {
        font-size: 20px;
      }

      .num {
        background-image: linear-gradient(#3ED7FF, #FFFFFF);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 25px;
        font-weight: bolder;
      }
      text-align: center;
      margin-bottom: 30px;
    }
  }
}

</style>
