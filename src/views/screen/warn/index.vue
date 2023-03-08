<template>
  <div class="screen-container">

    <div class="screen-content-right">
      <presend/>
      <estimate/>
      <analyse/>
    </div>
  </div>

</template>

<script>

import Presend from "@/views/screen/warn/children/present";
import Estimate from "@/views/screen/warn/children/estimate";
import Analyse from "@/views/screen/warn/children/analyse";
export default {
  name: "warn",
  components: {Analyse, Estimate, Presend},
}
</script>
<style lang="scss">
@import "../common.scss";
</style>
