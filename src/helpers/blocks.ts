import SchemeTypes, { Content } from "@/helpers/scheme_types.ts";

interface TTypes {
  image: string;
  desc: string;
  content: Partial<Content>;
}

const blocks: TTypes[] = [
  {
    image: "/src/assets/images/blocks/template1.png",
    desc: "Изображение без отступов",
    content: {
      widgetName: "raShowcase",
      type: "roll",
    },
  },
  {
    image: "/src/assets/images/blocks/template2.png",
    desc: "Изображение с текстом",
    content: {
      widgetName: "raShowcase",
      type: "billboard",
    },
  },
  // {
  //   image: "/src/assets/images/blocks/template3.png",
  //   desc: "Изображение и текст справа",
  // },
  // {
  //   image: "/src/assets/images/blocks/template4.png",
  //   desc: "Изображение и текст слева",
  // },
  // {
  //   image: "/src/assets/images/blocks/template5.png",
  //   desc: "Две карточки с фото",
  // },
  // {
  //   image: "/src/assets/images/blocks/template6.png",
  //   desc: "Три карточки с фото",
  // },
];

export default blocks;
