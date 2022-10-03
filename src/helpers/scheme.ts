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
        src: "/src/assets/images/default/1416x708.png",
        srcMobile: "/src/assets/images/default/640x640.png",
        alt: "Текстовое описание изображения",
        width: 1416,
        height: 708,
        widthMobile: 640,
        heightMobile: 640,
        position: "w-full h-full",
      },
      title: {
        value: "",
        size: "text-lg",
        align: "text-left",
        color: "#F7F7F7",
      },
      text: {
        value: "",
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
