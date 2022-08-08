<template>
  <div>
    <h1>Events</h1>
    <event-card
      v-for="(event, index) in events"
      :key="event.id"
      :event="event"
      :data-index="index"
    />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
export default {
  components:{
    EventCard
  },
  asyncData({ $axios }) {
    return $axios
      .get(
        'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events'
      )
      .then((response) => {
        return {
          events: response.data,
        }
      })
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
