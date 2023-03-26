<template>
  <div class="content">

    <div class="screen-content-right">

    </div>
    <div class="screen-content-center">
      <equipment-census/>
    </div>
    <div class="screen-content-right">
      <camera/>
      <equipment-warn/>
<!--      <equipment-info/>-->
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

</style>
