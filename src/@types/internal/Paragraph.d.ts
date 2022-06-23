declare global {
  type Paragraph = {
    id: number | string;
    content: string;
    dots: Array<boolean>;
  }
}
export {}
