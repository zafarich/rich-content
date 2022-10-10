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
  | "text-xs leading-[22px]"
  | "text-sm leading-[24px]"
  | "text-base leading-[24px]"
  | "text-lg leading-[26px]"
  | "text-xl leading-[28px]"
  | "text-2xl leading-[32px]"
  | "text-3xl leading-[38px]";

export interface Content {
  widgetName: WidgetType;
  type: ContentType;
  blocks?: Block[];
}

export interface Block {
  clickLink: string;
  img: Img;
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
  content: string[];
}

export interface Asset {
  toggle: boolean;
  uploadErr: string;
  imgLinkErr: string;
  clickLinkErr: string;
}

export default TemplateTypes;
