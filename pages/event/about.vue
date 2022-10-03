<template>
  <div>
    <h1>About</h1>
    <p>A small project to practice using Nuxt.js and an API</p>
  </div>
</template>
<script>
export default{
  head(){
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This an about page'
        }
      ]
    }
  }
}
</script>