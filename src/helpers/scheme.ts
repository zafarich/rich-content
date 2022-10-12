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
    video = false,
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
        uploadErr: "",
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
    if (video) {
      block.video = {
        type: "youtube",
        videoUrl: "",
        loadState: {
          isLoading: false,
          progress: 0,
          updateState: function ({ progress = 100, isLoading = true }) {
            this.progress = progress;
            this.isLoading = isLoading;
          },
        },
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
  block: new GenerateBlock({ clickLink: true, img: true, asset: true }),
};

const billboard: Content = {
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
  type: "chess",
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
  block: new GenerateBlock({
    asset: true,
    video: true,
  }),
};

const text: Content = {
  type: "text",
  block: new GenerateBlock({
    title: true,
    text: true,
    asset: true,
    theme: true,
    padding: true,
    gap: true,
  }),
};

const list: Content = {
  type: "list",
  theme: "bullet",
  block: new GenerateBlock({
    title: true,
    text: true,
    asset: true,
    count: 3,
  }),
};

const table: Content = {
  type: "table",
  title: {
    value: "Заголовок",
    size: "text-lg leading-[26px]",
    align: "text-left",
    color: "#F7F7F7",
  },

  table: {
    body: [
      [
        "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        // "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        // "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      ],
      [
        "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        // "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        // "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      ],
      // [
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      // ],
      // [
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      //   "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
      // ],
    ],
    head: [
      {
        img: {
          id: undefined,
          src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
          alt: "Текстовое описание изображения",
        },
        text: {
          value: "Заголовок",
        },
        contentAlign: "text-left",
        asset: {
          toggle: true,
          imgLinkErr: "",
          uploadErr: "",
        },
      },
      // {
      //   img: {
      //     id: undefined,
      //     src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
      //     alt: "Текстовое описание изображения",
      //   },
      //   text: {
      //     value: "Заголовок",
      //   },
      //   contentAlign: "text-left",
      //   asset: {
      //     toggle: true,
      //     imgLinkErr: "",
      //     uploadErr: "",
      //   },
      // },
      // {
      //   img: {
      //     id: undefined,
      //     src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
      //     alt: "Текстовое описание изображения",
      //   },
      //   text: {
      //     value: "Заголовок",
      //   },
      //   contentAlign: "text-left",
      //   asset: {
      //     toggle: true,
      //     imgLinkErr: "",
      //     uploadErr: "",
      //   },
      // },
    ],
  },
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
  list,
  table,
};

export default schemes;
