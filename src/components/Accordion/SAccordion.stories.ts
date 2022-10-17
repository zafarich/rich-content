import { Story } from "@storybook/vue3";
import {ref} from 'vue';

import CAccordion from "./CAccordion.vue";

export default {
  title: "Common/Accordion",
  component: CAccordion,
};

const Template: Story = (args) => ({
  components: { CAccordion },
  setup() {
    const show = ref(false);
    return { args, show };
  },
  template: `
    <CAccordion @click="show = !show" v-bind="args" :toggle="show" />
    <div v-if='show'>SHow me!</div>
  `,
});

export const Accordion = Template.bind({});
Accordion.args = {
  title: "Hello",
  toggle: true,
};
