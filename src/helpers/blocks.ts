import Scheme from "@/helpers/scheme";
import { Content } from "@/helpers/scheme_types";

interface TTypes {
  block_img: string;
  block_text: string;
  content: Partial<Content>;
}

const blocks: TTypes[] = [
  {
    block_img: "/images/blocks/block1.png",
    block_text: "Изображение без отступов",
    content: Scheme["roll"],
  },
  {
    block_img: "/images/blocks/block2.png",
    block_text: "Изображение с текстом",
    content: Scheme["billboard"],
  },
  {
    block_img: "/images/blocks/block3.png",
    block_text: "Изображение и текст слева",
    content: Scheme["chess"],
  },
  {
    block_img: "/images/blocks/block4.png",
    block_text: "Изображение и текст справа",
    content: Scheme["chessReverse"],
  },
  {
    block_img: "/images/blocks/block5.png",
    block_text: "Две карточки с фото",
    content: Scheme["twoRow"],
  },
  {
    block_img: "/images/blocks/block6.png",
    block_text: "Три карточки с фото",
    content: Scheme["threeRow"],
  },
  {
    block_img: "/images/blocks/block7.png",
    block_text: "Видео",
    content: Scheme["video"],
  },
  {
    block_img: "/images/blocks/block8.png",
    block_text: "Текст",
    content: Scheme["text"],
  },
  {
    block_img: "/images/blocks/block9.png",
    block_text: "Список",
    content: Scheme["list"],
  },
  {
    block_img: "/images/blocks/block10.png",
    block_text: "Таблица",
    content: Scheme["table"],
  },
];

export default blocks;
