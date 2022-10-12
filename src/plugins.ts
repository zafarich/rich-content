import "vue-select/dist/vue-select.css";

import { createPinia } from "pinia";
import { App } from "vue";
import VueAxios from "vue-axios";
import draggable from "vuedraggable";

import axios from "@/plugins/axios";
import toast, { options } from "./plugins/toast";

import router from "./router/index";
import "./plugins/JSONFixify";

export default function definePlugins(app: App): App {
  // Define your plugins here with app.use. It is required for storybook support.
  const pinia = createPinia();
  app.use(VueAxios, axios);
  app.provide("axios", app.config.globalProperties.axios); // provide 'axios'

  app.use(toast, options);
  app.use(pinia);
  app.use(router);
  app.use(draggable);
  return app;
}
