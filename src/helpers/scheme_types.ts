export interface TemplateTypes {
  content: Content[];
}

export type WidgetType = "raShowcase" | "raVideo";
export type ContentType = "roll" | "billboard";
export type ImgPosition =
  | "w-full h-full"
  | "w-3/4 h-3/4"
  | "w-2/4 h-2/4"
  | "w-1/4 h-1/4";
export type TextColors = "#F7F7F7" | "#333333" | "#BABAC0" | "#767676";
export type TextAlignment = "text-left" | "text-center" | "text-right";
export type TextSizes =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl";

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
  position?: ImgPosition;
}

export interface Text {
  size: TextSizes;
  align: TextAlignment;
  color: TextColors;
  content: string[];
}

export default TemplateTypes;
