import { Story } from "@storybook/vue3";

import CTemplates, { Props } from "./CTemplates.vue";

export default {
  title: "Templates",
  component: CTemplates,
};

const Template: Story<Props> = (args) => ({
  components: { CTemplates },
  setup() {
    return { args };
  },
  template: '<CTemplates v-bind="args" />',
});

export const item = Template.bind({});
item.args = {
  image: "/src/assets/images/templates/template1.png",
  desc: "template",
};
