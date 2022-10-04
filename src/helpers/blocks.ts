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
    content: JSON.parse(JSON.stringify(Scheme["roll"])),
  },
  {
    block_img: "/src/assets/images/blocks/block2.png",
    block_text: "Изображение с текстом",
    content: JSON.parse(JSON.stringify(Scheme["billboard"])),
  },
];

export default blocks;
