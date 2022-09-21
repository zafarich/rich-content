import TemplateTypes, { Content } from "@/helpers/template-types.ts";

interface TTypes {
  image: string;
  desc: string;
  content: Content;
}

const templates: TTypes[] = [
  
  {
    image: "/src/assets/images/templates/template1.png",
    desc: "Изображение без отступов",
    content: {
      widgetName: "raShowcase",
      type: "roll",
      blocks: [
        {
          imgLink: "link",
          img: {
            src: "link",
            srcMobile: "link",
            alt: "Текстовое описание изображения",
            width: 2832,
            height: 1416,
            widthMobile: 640,
            heightMobile: 640,
            position: "width_one_third",
          },
        },
      ],
    },
  },
  {
    image: "/src/assets/images/templates/template2.png",
    desc: "Изображение с текстом",
    content: {
      widgetName: "raShowcase",
      type: "roll",
      blocks: [
        {
          imgLink: "https://www.ozon.ru/",
          img: {
            src: "https://cdn1.ozone.ru/s3/rich-content/placeholder/1416x708.png",
            srcMobile:
              "https://cdn1.ozone.ru/s3/rich-content/placeholder/640x640.png",
            alt: "Текстовое описание изображения",
            width: 2832,
            height: 1416,
            widthMobile: 640,
            heightMobile: 640,
            position: "width_one_third",
          },
        },
      ],
    },
  },
  // {
  //   image: "/src/assets/images/templates/template3.png",
  //   desc: "Изображение и текст справа",
  // },
  // {
  //   image: "/src/assets/images/templates/template4.png",
  //   desc: "Изображение и текст слева",
  // },
  // {
  //   image: "/src/assets/images/templates/template5.png",
  //   desc: "Две карточки с фото",
  // },
  // {
  //   image: "/src/assets/images/templates/template6.png",
  //   desc: "Три карточки с фото",
  // },
];

export default templates;
