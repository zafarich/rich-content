import { Content } from "@/helpers/scheme_types";

const roll: Content = {
  widgetName: "raShowcase",
  type: "roll",
  block: [
    {
      imgLink: "",
      img: {
        src: "/src/assets/images/default/1416x708.png",
        srcMobile: "/src/assets/images/default/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
        position: "w-full",
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
        src: "/src/assets/images/default/1416x708.png",
        srcMobile: "/src/assets/images/default/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
      },
      title: {
        content: ["Заголовок"],
        size: "size4",
        align: "text-left",
        color: "#F7F7F7",
      },
      text: {
        size: "size2",
        align: "text-left",
        color: "#F7F7F7",
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
