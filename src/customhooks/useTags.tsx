import { useState } from "react";
import { DetailedProductProps, ProductTags } from "../properties/products";

const useTags = (initialTags: string[] = []) => {
  const [uniqueTags, setUniqueTags] = useState<string[]>(initialTags);

  const updateTags = (data: DetailedProductProps[]) => {
    const tagsArray = data.map(
      (product: ProductTags) => product.tags || []
    );
    const generatedUniqueTags = Array.from(new Set(tagsArray.flat())) as string[];
    setUniqueTags(generatedUniqueTags);
  };

  return { uniqueTags, updateTags };
};

export default useTags;
