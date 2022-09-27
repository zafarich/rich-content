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
    function handleUpload(e) {
      image.value = e.url;
    }
    return { args, handleUpload, image };
  },
  template: `
    <CUploadImage v-bind="args" @upload="handleUpload" />
    <img :src='image' />
  `,
});

export const UploadImage = Template.bind({});
UploadImage.args = {};
