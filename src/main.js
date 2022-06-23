import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.config.errorHandler = (err, instance) => {
  console.log({ err, instance });
};

app.mount("#app");
