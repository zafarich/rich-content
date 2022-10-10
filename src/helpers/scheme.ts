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
  }) {
    const block: Block = {};
    if (title) {
      block.title = {
        value: "Заголовок",
        size: "text-lg",
        align: "text-left",
        color: "#F7F7F7",
      };
    }
    if (text) {
      block.text = {
        value:
          "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        size: "text-sm",
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
    const arr: Block[] = new Array(count).fill(block);
    return arr;
  }
}

const roll: Content = {
  widgetName: "raShowcase",
  type: "roll",
  block: new GenerateBlock({ clickLink: true, img: true, asset: true }),
};

const billboard: Content = {
  widgetName: "raShowcase",
  type: "billboard",
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
  }),
};

const chess: Content = {
  widgetName: "raShowcase",
  type: "chess",
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    reverse: true,
  }),
};

const chessReverse: Content = {
  widgetName: "raShowcase",
  type: "chessReverse",
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
    reverse: true,
  }),
};

const s = new GenerateBlock({
  clickLink: true,
  img: true,
  title: true,
  text: true,
  asset: true,
  count: 2,
});

const twoRow: Content = {
  widgetName: "raShowcase",
  type: "twoRow",
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
  widgetName: "raShowcase",
  type: "threeRow",
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
  widgetName: "raShowcase",
  type: "video",
  block: new GenerateBlock({
    clickLink: true,
    img: true,
    title: true,
    text: true,
    asset: true,
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
};
export default schemes;
