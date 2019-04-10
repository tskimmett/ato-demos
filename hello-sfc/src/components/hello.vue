<template>
  <p>{{ greeting }}! Today's date and time is {{ now }}</p>
</template>

<script>
export default {
  data: function () {
    return {
      greeting: 'Hello from Vue',
      now: new Date().toLocaleString()
    }
  }
  // update every second
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>