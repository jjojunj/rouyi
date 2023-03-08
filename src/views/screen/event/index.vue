<template>
  <div class="screen-container">
    <event-left/>
    <event-right/>
  </div>
</template>
<script>
import EventLeft from "@/views/screen/event/children/eventLeft";
import EventRight from "@/views/screen/event/children/eventRight";
export default {
  name: "event",
  components: {EventRight, EventLeft},
  methods: {
  }
}
</script>
<style lang="scss">
@import "../common.scss";

</style>
