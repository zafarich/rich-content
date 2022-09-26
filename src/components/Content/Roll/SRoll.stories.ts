import { Story } from "@storybook/vue3";

import CRoll from "./CRoll.vue";

export default {
  title: "Contents",
  component: CRoll,
};

const Template: Story = (args) => ({
  components: { CRoll },
  setup() {
    return { args };
  },
  template: '<CRoll v-bind="args" />',
});

export const Roll = Template.bind({});
Roll.args = {
  content: {
    block: [
      {
        img: {
          src: "/src/assets/images/blocks/block1.png",
        },
      },
    ],
  },
};
