import TemplateTypes, { Content } from "@/helpers/template-types.ts";

interface TTypes {
  image: string;
  desc: string;
  content: Partial<Content>;
}

const templates: TTypes[] = [
  {
    image: "/src/assets/images/templates/template1.png",
    desc: "Изображение без отступов",
    content: {
      widgetName: "raShowcase",
      type: "roll",
    },
  },
  {
    image: "/src/assets/images/templates/template2.png",
    desc: "Изображение с текстом",
    content: {
      widgetName: "raShowcase",
      type: "billboard",
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