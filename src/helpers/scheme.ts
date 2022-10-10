import { Block, Content } from "@/helpers/scheme_types";

class GenerateBlock {
  constructor({
    title = false,
    text = false,
    asset = false,
    img = false,
    clickLink = false,
    reverse = false,
    reverseBoolValue = true,
    count = 1,
    theme = false,
    gap = false,
    padding = false,
  }) {
    const block: Block = {};
    if (title) {
      block.title = {
        value: "Заголовок",
        size: "text-lg leading-[26px]",
        align: "text-left",
        color: "#F7F7F7",
      };
    }
    if (text) {
      block.text = {
        value:
          "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        size: "text-sm leading-[24px]",
        align: "text-left",
        color: "#F7F7F7",
      };
    }
    if (asset) {
      block.asset = {
        toggle: true,
        imgLinkErr: "",
        clickLinkErr: "",
      };
    }
    if (img) {
      block.img = {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        alt: "Текстовое описание изображения",
        position: "w-full h-full",
      };
    }
    if (clickLink) {
      block.clickLink = "";
    }
    if (reverse) {
      block.reverse = reverseBoolValue;
    }

    if (theme) {
      block.theme = "bg-transparent";
    }

    if (padding) {
      block.padding = "p-10";
    }

    if (gap) {
      block.gap = "mb-2";
    }

    const arr: Block[] = new Array(count).fill(block);
    return arr;
  }
}

const roll: Content = {
  type: "roll",
  add: true,
  block: new GenerateBlock({ clickLink: true, img: true, asset: true }),
};

const billboard: Content = {
  type: "billboard",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
  }),
};

const chess: Content = {
  type: "chess",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    reverse: true,
    reverseBoolValue: false,
  }),
};

const chessReverse: Content = {
  type: "chessReverse",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    reverse: true,
  }),
};

const twoRow: Content = {
  type: "twoRow",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    count: 2,
  }),
};

const threeRow: Content = {
  type: "threeRow",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    count: 3,
  }),
};

const video: Content = {
  type: "video",
  add: true,
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
  }),
};

const text: Content = {
  type: "text",
  add: false,
  block: new GenerateBlock({
    title: true,
    text: true,
    asset: true,
    theme: true,
    padding: true,
    gap: true,
  }),
};

const schemes = {
  roll,
  billboard,
  chess,
  chessReverse,
  twoRow,
  threeRow,
  video,
  text,
};
export default schemes;
