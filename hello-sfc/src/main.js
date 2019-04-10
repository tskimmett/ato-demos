import Vue from "vue";
import App from "./App";

// Construct a Vue instance that renders a single component: our App
var app = new Vue({
  render: function (create) {
    return create(App)
  }
});

// Render on the element with id 'app'
app.$mount("#app");
