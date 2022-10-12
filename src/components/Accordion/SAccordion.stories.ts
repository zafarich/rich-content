import { Story } from "@storybook/vue3";

import CAccordion from "./CAccordion.vue";

export default {
  title: "Common/Accordion",
  component: CAccordion,
};

const Template: Story = (args) => ({
  components: { CAccordion },
  setup() {
    return { args };
  },
  template: '<CAccordion v-bind="args" />',
});

export const Accordion = Template.bind({});
Accordion.args = {
  title: "Hello",
  toggle: true,
};
