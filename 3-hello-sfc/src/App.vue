<template>
  <div id="app">
    <hello-component />
  </div>
</template>

<script>
import HelloComponent from "./components/hello";

export default {
  components: {
    "hello-component": HelloComponent
  }
};
</script>