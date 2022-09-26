import Scheme from "@/helpers/scheme";
import { Content } from "@/helpers/scheme_types";

interface TTypes {
  block_img: string;
  block_text: string;
  edit: string[];
  content: Partial<Content>;
}

const blocks: TTypes[] = [
  {
    block_img: "/src/assets/images/blocks/block1.png",
    block_text: "Изображение без отступов",
    content: Scheme["roll"],
  },
  {
    block_img: "/src/assets/images/blocks/block2.png",
    block_text: "Изображение с текстом",
    content: Scheme["billboard"],
  },
  // {
  //   image: "/src/assets/images/blocks/block3.png",
  //   desc: "Изображение и текст справа",
  // },
  // {
  //   image: "/src/assets/images/blocks/block4.png",
  //   desc: "Изображение и текст слева",
  // },
  // {
  //   image: "/src/assets/images/blocks/block5.png",
  //   desc: "Две карточки с фото",
  // },
  // {
  //   image: "/src/assets/images/blocks/block6.png",
  //   desc: "Три карточки с фото",
  // },
];

export default blocks;
