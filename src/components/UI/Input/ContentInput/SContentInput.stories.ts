import { Story } from "@storybook/vue3";
import { ref } from "vue";

import CContentInput from "./CContentInput.vue";

export default {
  title: "UI/Input",
  component: CContentInput,
};

const Template: Story = (args) => ({
  components: { CContentInput },
  setup() {
    const input = ref("");
    return { args, input };
  },
  template: `
      <CContentInput v-model="input" v-bind="args" placeholder="Заголовок" class="mb-2 font-medium text-[20px] leading-[28px] cursor-text" />
      v-model: {{input}} 
    `,
});

export const ContentInput = Template.bind({});
ContentInput.args = {};
