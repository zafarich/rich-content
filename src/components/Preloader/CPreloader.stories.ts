import { Story } from "@storybook/vue3";

import CPreloader, { Props } from "./CPreloader.vue";

export default {
  title: "Trash/Form/CPreloader",
  component: CPreloader,
};

const Template: Story<Props> = (args) => ({
  components: { CPreloader },
  setup() {
    return { args };
  },
  template: `
    <div>
      <block-preloader v-bind="args">
        <div class="w-[200px] height-[12px]">HELLO!!!!</div>
      </block-preloader>
    </div>
  `,
});

export const KPreloader = Template.bind({});
KPreloader.args = {
  loading: true,
};
