import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CThreeRow from "./CThreeRow.vue";

export default {
  title: "Contents",
  component: CThreeRow,
};

const Template: Story = (args) => ({
  components: { CThreeRow },
  setup() {
    return { args };
  },
  template: '<CThreeRow v-bind="args" />',
});

export const ThreeRow = Template.bind({});
ThreeRow.args = {
  content: Scheme["threeRow"],
};
