import { useState } from "react";

import Header from "./Header";

import Row from "./Row";
import SelectVariantRow from "./Row/Select";

import Footer from "./Footer";

const Package = ({ title, blocks, price, index } : Omit<Package, 'id'> & { price: number, index: number }) => {
  const [variant, setVariant] = useState<1 | 2>(1);

  return (
    <>
      <Header title={title} />

      {blocks.map((block, i) => (
        <Row
          key={block.id}
          i={i}
          title={block.title}
          paragraphs={block.paragraphs}
          index={index}
        />
      ))}

      <SelectVariantRow blocks={blocks} price={price} variant={variant} setVariant={setVariant} />

      <Footer price={variant === 1 ? price : price + 200000} />
    </>
  );
}

export default Package;
