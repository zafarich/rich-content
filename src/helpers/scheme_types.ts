export interface TemplateTypes {
  content: Content[];
}

export type WidgetType = "raShowcase" | "raVideo";
export type ContentType =
  | "roll"
  | "billboard"
  | "chess"
  | "chessReverse"
  | "twoRow"
  | "threeRow";
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
  block?: Block[];
}

export interface Block {
  clickLink?: string;
  img?: Img;
  title?: Text;
  text?: Text;
  asset?: Asset;
  reverse?: boolean;
}

export interface Img {
  id: string | undefined;
  src: string;
  alt: string;
  position?: ImgPosition;
}

export interface Text {
  value: string;
  size: TextSizes;
  align: TextAlignment;
  color: TextColors;
  content?: string[];
}

export interface Asset {
  toggle: boolean;
  uploadErr?: string;
  imgLinkErr: string;
  clickLinkErr: string;
}

export default TemplateTypes;
