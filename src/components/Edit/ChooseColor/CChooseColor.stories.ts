import { Story } from "@storybook/vue3";
import {ref} from 'vue'
import CChooseColor from "./CChooseColor.vue";

export default {
  title: "Edit/ChooseColor",
  component: CChooseColor,
};

const Template: Story = (args) => ({
  components: { CChooseColor },
  setup() {
    const color = ref('');
    return { args, color };
  },
  template: `
    <CChooseColor v-bind="args" @color="color = $event" />

    <pre class='mt-3'>
        selected: {{color}}
    </pre>
  `,
});

export const ChooseColor = Template.bind({});
ChooseColor.args = {};
