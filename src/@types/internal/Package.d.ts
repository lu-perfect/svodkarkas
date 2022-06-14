declare global {
  type Package = {
    id: string | number;
    title: string;
    blocks: Array<PackageBlock>
  }
}
export {}
