import { Story } from "@storybook/vue3";
import SErrorMessage from "./CErrorMessage.vue";

export default {
  title: "Edit/ErrorMessage",
  component: SErrorMessage,
};

const Template: Story = (args) => ({
  components: { SErrorMessage },
  setup() {
    return { args };
  },
  template: `
    <SErrorMessage v-bind="args" />
  `,
});

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  message: "Error Message",
};
