import { Story } from "@storybook/vue3";
import Scheme from "@/helpers/scheme";
import CTable from "./CTable.vue";

export default {
  title: "Contents",
  component: CTable,
};

const Template: Story = (args) => ({
  components: { CTable },
  setup() {
    return { args };
  },
  template: '<CTable v-bind="args" />',
});

export const Table = Template.bind({});
Table.args = {
  content: Scheme["table"],
};
