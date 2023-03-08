<template>
  <div class="screen-content-left">
    <event-statistics/>
    <event-list/>
  </div>
</template>
<script>
import EventStatistics from "@/views/screen/event/children/eventStatistics";
import EventList from "@/views/screen/event/children/eventList";
export default {
  name: "eventLeft",
  components: {EventList, EventStatistics},
  methods: {
  }
}
</script>
<style lang="scss">

</style>
