import { Story } from "@storybook/vue3";

import CTextAlignment from "./CTextAlignment.vue";

export default {
  title: "Edit/TextAlignment",
  component: CTextAlignment,
};

const Template: Story = (args) => ({
  components: { CTextAlignment },
  setup() {
    return { args };
  },
  template: '<CTextAlignment v-bind="args" />',
});

export const TextAlignment = Template.bind({});
TextAlignment.args = {};
