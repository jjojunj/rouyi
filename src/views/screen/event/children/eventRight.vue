<template>
  <div class="screen-content-right">
    <event-efficiency/>
    <event-trend/>
    <event-case/>
  </div>
</template>
<script>
import EventEfficiency from "@/views/screen/event/children/eventEfficiency";
import EventTrend from "@/views/screen/event/children/eventTrend";
import EventCase from "@/views/screen/event/children/eventCase";
export default {
  name: "eventRight",
  components: {EventCase, EventTrend, EventEfficiency},
  methods: {
  }
}
</script>
<style lang="scss">

</style>
