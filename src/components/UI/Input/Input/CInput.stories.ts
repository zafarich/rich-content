import { Story } from "@storybook/vue3";
import { ref } from "vue";

import CInput from "./CInput.vue";

export default {
  title: "UI/Input",
  component: CInput,
};

const Template: Story = (args) => ({
  components: { CInput },
  setup() {
    const input = ref("");
    return { args, input };
  },
  template: `
    <CInput v-bind="args" v-model="input" />
    v-model: {{input}}
  `,
});

export const Input = Template.bind({});
Input.args = {
  placeholder: "this is placeholder",
};
