import { Story } from "@storybook/vue3";
import { ref } from "vue";
import CSelect from "./CSelect.vue";

export default {
  title: "Edit/Select",
  component: CSelect,
};

const options = [
  {
    title: "Справа",
    value: true,
  },
  {
    title: "Слева",
    value: false,
  },
];

const Template: Story = (args) => ({
  components: { CSelect },
  setup() {
    const selected = ref(true);
    return { args, selected };
  },
  template: `
    <CSelect v-bind="args" @selected="selected = $event" />

    <pre class='mt-3'>
        selected: {{selected}}
    </pre>
  `,
});

export const Select = Template.bind({});
Select.args = {
  options,
  default: true,
};

export const Label = Template.bind({});
Label.args = {
  label: "Image position",
  options,
  default: true,
};
