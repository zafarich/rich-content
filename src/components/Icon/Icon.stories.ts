import { Story } from "@storybook/vue3";

import icons from "/src/helpers/icons";

import Icons, { Props } from "./Icon.vue";

export default {
  title: "COMMON/Icons",
  component: Icons,
  argTypes: {
    name: {
      options: Object.keys(icons),
      control: {
        type: "select",
      },
    },
  },
};

const Template: Story<Props> = (args) => ({
  components: { Icons },
  setup() {
    return { args };
  },
  template: '<Icons v-bind="args" />',
});

export const Icon = Template.bind({});
Icon.args = {
  name: "arrow_back",
};

export const AllIcons = (): any => ({
  components: { Icons },
  setup() {
    return { icons: Object.keys(icons) };
  },
  template:
    '<div><div v-for="icon in icons" :key="icons">{{icon}}: <Icons :name="icon" /></div></div>',
});
