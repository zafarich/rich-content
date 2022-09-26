import { Story } from "@storybook/vue3";

import CChooseColor from "./CChooseColor.vue";

export default {
  title: "Edit/ChooseColor",
  component: CChooseColor,
};

const Template: Story = (args) => ({
  components: { CChooseColor },
  setup() {
    return { args };
  },
  template: '<CChooseColor v-bind="args" />',
});

export const ChooseColor = Template.bind({});
ChooseColor.args = {};
