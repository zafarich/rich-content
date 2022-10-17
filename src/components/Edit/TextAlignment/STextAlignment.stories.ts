import { Story } from "@storybook/vue3";
import {ref} from 'vue'
import CTextAlignment from "./CTextAlignment.vue";

export default {
  title: "Edit/TextAlignment",
  component: CTextAlignment,
};

const Template: Story = (args) => ({
  components: { CTextAlignment },
  setup() {
    const align = ref('')
    return { args, align };
  },
  template: `
    <CTextAlignment v-bind="args" @align="align = $event" />

    <pre class='mt-6'>
        alignment: {{ align }}
    </pre>
  `,
});

export const TextAlignment = Template.bind({});
TextAlignment.args = {};
