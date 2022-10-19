import { Story } from "@storybook/vue3";
import { ref, inject } from "vue";

import CUploadImage from "./CUploadImage.vue";

export default {
  title: "Edit/UploadImage",
  component: CUploadImage,
};

const Template: Story = (args) => ({
  components: { CUploadImage },
  setup() {
    const image = ref("");
    const cdn = inject("cdn");
    return { args, image, cdn };
  },
  template: `
    <CUploadImage v-bind="args" @uploaded="image = $event.url" />
    <img :src='cdn + image' />
  `,
});

export const UploadImage = Template.bind({});
UploadImage.args = {
  index: 23,
};
