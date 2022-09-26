import { Story } from "@storybook/vue3";

import CTab from "./CTab.vue";

export default {
  title: "Common/Tab",
  component: CTab,
};

const Template: Story = (args) => ({
  components: { CTab },
  setup() {
    return { args };
  },
  template: '<CTab v-bind="args" />',
});

export const Tab = Template.bind({});
Tab.args = {
  content: {
    block: {
      img: {
        src: "/src/assets/images/blocks/block1.png",
      },
    },
  },
};
