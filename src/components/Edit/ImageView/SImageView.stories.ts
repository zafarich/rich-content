import { Story } from "@storybook/vue3";

import CImageView from "./CImageView.vue";

export default {
  title: "Edit/ImageView",
  component: CImageView,
};

const Template: Story = (args) => ({
  components: { CImageView },
  setup() {
    return { args };
  },
  template: '<CImageView v-bind="args" />',
});

export const ImageView = Template.bind({});
ImageView.args = {};
