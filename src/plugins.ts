import { createPinia } from "pinia";
import { App } from "vue";
import draggable from "vuedraggable";

import router from "./router/index";

export default function definePlugins(app: App): App {
  // Define your plugins here with app.use. It is required for storybook support.
  const pinia = createPinia();

  app.use(pinia);
  app.use(router);
  app.use(draggable);
  return app;
}
