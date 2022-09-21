export interface TemplateTypes {
  content: Content[];
}

export interface Content {
  widgetName: "raShowcase" | "raVideo";
  type: string;
  blocks: Block[];
}

export type WidgetType = "raShowcase" | "raVideo";

export interface Block {
  imgLink: string;
  img: Img;
  title?: Text;
  text?: Text;
}

export interface Img {
  src: string;
  srcMobile: string;
  alt: string;
  width: number;
  height: number;
  widthMobile: number;
  heightMobile: number;
}

export interface Text {
  size: string;
  align: string;
  color: string;
  content: string[];
}

export default TemplateTypes;
