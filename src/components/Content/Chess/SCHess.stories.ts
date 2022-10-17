import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CCHess from "./CCHess.vue";

export default {
  title: "Contents",
  component: CCHess,
};

const Template: Story = (args) => ({
  components: { CCHess },
  setup() {
    return { args };
  },
  template: '<CCHess v-bind="args" />',
});

export const Chess = Template.bind({});
Chess.args = {
  content: Scheme["chess"],
};
