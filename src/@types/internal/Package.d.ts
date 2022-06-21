declare global {
  // deprecated
  type Package = {
    id: string | number;
    title: string;
    blocks: Array<PackageBlock>
  }

  type Packages = {
    titles: Array<string>;

    blocks: Array<PackageBlock>;
  }
}
export {}
