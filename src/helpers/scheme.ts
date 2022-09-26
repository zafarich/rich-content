import SchemeType, { Content } from "@/helpers/scheme_types";

const roll: Content = {
  widgetName: "raShowcase",
  type: "roll",
  block: [
    {
      imgLink: "",
      img: {
        src: "https://cdn1.ozone.ru/s3/rich-content/placeholder/1416x708.png",
        srcMobile:
          "https://cdn1.ozone.ru/s3/rich-content/placeholder/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
        position: "width_full",
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
        src: "https://cdn1.ozone.ru/s3/rich-content/placeholder/1416x708.png",
        srcMobile:
          "https://cdn1.ozone.ru/s3/rich-content/placeholder/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
      },
      title: {
        content: ["Заголовок"],
        size: "size4",
        align: "left",
        color: "color1",
      },
      text: {
        size: "size2",
        align: "left",
        color: "color1",
        content: [
          "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.",
        ],
      },
    },
  ],
};

const schemes = {
  roll,
  billboard,
};
export default schemes;
