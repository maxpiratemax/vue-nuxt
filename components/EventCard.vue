<template>
  <nuxt-link :to="'/event/' + event.id">
      <div
        class="-shadow"
        :style="`background-image: linear-gradient(to left, rgba(245, 246, 252, 0.8), rgba(255, 255, 255, 0.95)), url(${event.image}) ;
    
    background-repeat: no-repeat;
    background-size: cover;
    `"
      >
        <span class="eyebrow"> @{{ event.time }} on {{ parsedDate }} </span>
        <h4 class="title">
          {{ event.title }}
        </h4>
        <span>{{ event.attendees.length }} attending</span>
      </div>
  </nuxt-link>
</template>
<script>
export default {
  name: "EventCard",
  props: {
    // eslint-disable-next-line vue/require-default-prop
    event: Object,
  },
  computed: {
    parsedDate() {
      const eventDate = new Date(this.event.date);
      return eventDate.toDateString();
    },
  },
};
</script>
<style scoped>
div {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
div:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.title {
  margin: 0;
  color: black;
}
a {
  text-decoration: none;
}
</style>
