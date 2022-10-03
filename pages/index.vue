<template>
  <div>
    <h1>List of my events</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import EventCard from "@/components/EventCard.vue";
import { supabase } from "@/services/supabase/init";

export default {
  components: {
    EventCard,
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("events/fetchEvents");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again.",
      });
    }
  },
  head() {
    return {
      title: "Event Listing",
    };
  },

  computed: mapState({
    events: (state) => state.events.events,
    event: (state) => state.events.event,
  }),
  methods: {
    async test() {
      const { data: Events, error } = await supabase.from('Events').select('*').eq('id', 1);
      this.testObj = Events[0];
      console.log("message", error);
    },
  },
};
</script>
