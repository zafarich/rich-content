import Scheme from "@/helpers/scheme";
import { Content } from "@/helpers/scheme_types";

interface TTypes {
  block_img: string;
  block_text: string;
  content: Partial<Content>;
}

const blocks: TTypes[] = [
  {
    block_img: "/src/assets/images/blocks/template1.png",
    block_text: "Изображение без отступов",
    content: Scheme["roll"],
  },
  {
    block_img: "/src/assets/images/blocks/template2.png",
    block_text: "Изображение с текстом",
    content: Scheme["billboard"],
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
