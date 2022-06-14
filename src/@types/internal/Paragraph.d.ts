declare global {
  type Paragraph = {
    id: number | string;
    content?: string;
    isEmpty?: true;
  }
}
export {}
