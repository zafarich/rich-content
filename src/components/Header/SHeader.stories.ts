import { Story } from "@storybook/vue3";

import CHeader from "./CHeader.vue";

export default {
  title: "layout/CHeader",
  component: CHeader,
};

const Template: Story = (args) => ({
  components: { CHeader },
  setup() {
    return { args };
  },
  template: '<CHeader v-bind="args" />',
});

export const Header = Template.bind({});
Header.args = {};
