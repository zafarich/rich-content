export interface TemplateTypes {
  content: Content[];
}

export type WidgetType = "raShowcase" | "raVideo";
export type ContentType = "roll" | "billboard";
export type ImgPosition =
  | "width_full"
  | "width_one_fourth"
  | "width_one_third"
  | "width_half";

export interface Content {
  widgetName: WidgetType;
  type: ContentType;
  blocks?: Block[];
}

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
  position?: string;
}

export interface Text {
  size: string;
  align: string;
  color: string;
  content: string[];
}

export default TemplateTypes;
