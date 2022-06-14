declare global {
  type PackageBlock = {
    id: string | number;
    title: string;
    paragraphs: Array<Paragraph>
  }
}
export {}
