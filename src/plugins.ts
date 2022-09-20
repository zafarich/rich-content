import { App } from "vue";

import router from "./router/index";

export default function definePlugins(app: App): App {
  // Define your plugins here with app.use. It is required for storybook support.

  app.use(router);
  return app;
}
