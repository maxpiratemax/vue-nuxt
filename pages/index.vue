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
import EventCard from '@/components/EventCard.vue'
export default {
  components: {
    EventCard,
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get(
        'https://my-json-server.typicode.com/Code-Pop/Touring-Vue-Router/events'
      )
      return {
        events: data,
      }
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch events at this time. Please try again',
      })
    }
  },
  head() {
    return {
      title: 'Event Listing',
    }
  },
}
</script>
