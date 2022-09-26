import { Story } from "@storybook/vue3";

import CButton from "./CButton.vue";

export default {
  title: "UI/Button",
  component: CButton,
};

const Template: Story = (args) => ({
  components: { CButton },
  setup() {
    return { args };
  },
  template: '<CButton class="w-full" v-bind="args" />',
});

export const Button = Template.bind({});
Button.args = {
  text: "Hello",
};
