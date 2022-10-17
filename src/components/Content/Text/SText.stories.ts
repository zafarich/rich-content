import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CText from "./CText.vue";

export default {
  title: "Contents",
  component: CText,
};

const Template: Story = (args) => ({
  components: { CText },
  setup() {
    return { args };
  },
  template: '<CText v-bind="args" />',
});

export const Text = Template.bind({});
Text.args = {
  content: Scheme["text"],
};
