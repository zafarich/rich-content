import { Story } from "@storybook/vue3";
import { ref } from "vue";
import CImageView from "./CImageView.vue";

export default {
  title: "Edit/ImageView",
  component: CImageView,
};

const Template: Story = (args) => ({
  components: { CImageView },
  setup() {
    const view = ref("w-full h-full");
    return { args, view };
  },
  template: `
    <CImageView v-bind="args" @position='view = $event' />

    <pre class='mt-6'>
        position: {{view}}
    </pre>
  `,
});

export const ImageView = Template.bind({});
ImageView.args = {
  currentImage: "/bBh/default_image.webp.webp?view",
  currentPosition: "w-full h-full",
};
