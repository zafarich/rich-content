import { Content } from "@/helpers/scheme_types";

const roll: Content = {
  widgetName: "raShowcase",
  type: "roll",
  block: [
    {
      imgLink: "",
      img: {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        // 111
        srcMobile: "/src/assets/images/default/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
        position: "w-full h-full",
      },
    },
  ],
};

const billboard: Content = {
  widgetName: "raShowcase",
  type: "billboard",
  block: [
    {
      imgLink: "",
      img: {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        srcMobile: "/src/assets/images/default/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
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
    },
  ],
};

const schemes = {
  roll,
  billboard,
};
export default schemes;
