import { Content } from "@/helpers/scheme_types";

const roll: Content = {
  widgetName: "raShowcase",
  type: "roll",
  block: [
    {
      clickLink: "",
      img: {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        alt: "Текстовое описание изображения",
        position: "w-full h-full",
      },
      asset: {
        toggle: true,
        uploadErr: "",
        imgLinkErr: "",
        clickLinkErr: "",
      },
    },
  ],
};

const billboard: Content = {
  widgetName: "raShowcase",
  type: "billboard",
  block: [
    {
      clickLink: "",
      img: {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        alt: "Текстовое описание изображения",
        position: "w-full h-full",
      },
      title: {
        value: "Заголовок",
        size: "text-lg",
        align: "text-left",
        color: "#F7F7F7",
      },
      text: {
        value:
          "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        size: "text-sm",
        align: "text-left",
        color: "#F7F7F7",
      },
      asset: {
        toggle: true,
        imgLinkErr: "",
        clickLinkErr: "",
      },
    },
  ],
};

const chess: Content = {
  widgetName: "raShowcase",
  type: "chess",
  block: [
    {
      clickLink: "",
      img: {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        alt: "Текстовое описание изображения",
        position: "w-full h-full",
      },
      title: {
        value: "Заголовок",
        size: "text-lg",
        align: "text-left",
        color: "#F7F7F7",
      },
      text: {
        value:
          "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        size: "text-sm",
        align: "text-left",
        color: "#F7F7F7",
      },
      asset: {
        toggle: true,
        imgLinkErr: "",
        clickLinkErr: "",
      },
      reverse: false,
    },
  ],
};

const schemes = {
  roll,
  billboard,
  chess,
};
export default schemes;
