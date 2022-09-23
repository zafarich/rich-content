import { Story } from "@storybook/vue3";
import { ref } from "vue";

import CInput from "./CInput.vue";

export default {
  title: "Common/Input",
  component: CInput,
};

const Template: Story = (args) => ({
  components: { CInput },
  setup() {
    const input = ref("");
    return { args, input };
  },
  template: `
      <CInput v-model="input" v-bind="args" placeholder="Заголовок" class="mb-2 font-medium text-[20px] leading-[28px] cursor-text" />
      v-model: {{input}} 
    `,
});

export const Roll = Template.bind({});
Roll.args = {};
