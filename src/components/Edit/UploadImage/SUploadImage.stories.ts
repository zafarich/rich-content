import { Story } from "@storybook/vue3";

import CUploadImage from "./CUploadImage.vue";

export default {
  title: "Edit/UploadImage",
  component: CUploadImage,
};

const Template: Story = (args) => ({
  components: { CUploadImage },
  setup() {
    return { args };
  },
  template: '<CUploadImage v-bind="args" />',
});

export const UploadImage = Template.bind({});
UploadImage.args = {};
