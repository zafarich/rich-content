import { Story } from "@storybook/vue3";
import { ref } from "vue";

import CUploadImage from "./CUploadImage.vue";

export default {
  title: "Edit/UploadImage",
  component: CUploadImage,
};

const Template: Story = (args) => ({
  components: { CUploadImage },
  setup() {
    const image = ref("");
    return { args, image };
  },
  template: `
    <CUploadImage v-bind="args" @uploaded="image = $event.url" />
    <img :src='image' />
  `,
});

export const UploadImage = Template.bind({});
UploadImage.args = {
  index: 23,
};
