import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CTwoRow from "./CTwoRow.vue";

export default {
  title: "Contents",
  component: CTwoRow,
};

const Template: Story = (args) => ({
  components: { CTwoRow },
  setup() {
    return { args };
  },
  template: '<CTwoRow v-bind="args" />',
});

export const TwoRow = Template.bind({});
TwoRow.args = {
  content: Scheme["twoRow"],
};
