import { Story } from "@storybook/vue3";

import CBillboard from "./CBillboard.vue";

export default {
  title: "Contents",
  component: CBillboard,
};

const Template: Story = (args) => ({
  components: { CBillboard },
  setup() {
    return { args };
  },
  template: '<CBillboard v-bind="args" />',
});

export const Billboard = Template.bind({});
Billboard.args = {
  content: {
    block: {
      img: {
        src: "/src/assets/images/blocks/block2.png",
      },
    },
  },
};
