import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CVideo from "./CVideo.vue";

export default {
  title: "Contents/Video",
  component: CVideo,
};

const UploadVideo = {
  type: "video",
  block: [
    {
      asset: { toggle: true, imgLinkErr: "", clickLinkErr: "", uploadErr: "" },
      video: {
        type: "video",
        videoUrl: "",
        localVideoUrl: "",
        loadState: {
          isLoading: false,
          progress: 0,
          updateState:
            "function({ progress = 100, isLoading = true }) {\n            this.progress = progress;\n            this.isLoading = isLoading;\n          }",
        },
      },
    },
  ],
};

const Template: Story = (args) => ({
  components: { CVideo },
  setup() {
    return { args };
  },
  template: '<CVideo v-bind="args" />',
});

export const YouTube = Template.bind({});
YouTube.args = {
  content: Scheme["video"],
};

export const Upload = Template.bind({});
Upload.args = {
  content: UploadVideo,
};
