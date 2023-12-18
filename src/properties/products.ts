

export interface MinimalProductProps{
    id: string;
    name: string;
    price: number;
    images: string[];
    sale: boolean;
    discount: number;
    category_id: string;
    type_id: string;
}

export interface DetailedProductProps {
    id: string;
    name: string;
    type: string;
    category: string;
    type_id: string;
    category_id: string;
    price: number;
    size: string;
    color: string;
    color_value: string;
    material: string;
    condition: number;
    description: string;
    size_description: string;
    care_description: string;
    tags: string[];
    date: number;
    quantity: number;
    images: string[];
    sale: boolean;
    discount: number;
    trending: boolean;
  }


export  interface CartItem {
    productId: string;
    productQuantity: number;
  }

  export interface ProductTags {
    id: string;
    tags: string[];
  }