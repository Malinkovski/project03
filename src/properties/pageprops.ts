import { MinimalProductProps } from "./products";

export interface AboutPageProps {
  about_title: string;
  first_title: string;
  second_title: string;
  first_content: string;
  second_content: string;
  third_content: string;
  forth_content: string;
  first_image: string;
  second_image: string;
}

export interface ContactPageProps {
  contact_title: string;
  image: string;
  title: string;
  text: string;
  address: string;
  number: string;
  working_hours: {
    weekdays: string;
    weekends: string;
  };
}
export interface FaqPageProps {
  faq_title: string;
}
export interface QuestionProps {
  questions: Array<{
    id: number;
    question: string;
    answer: string;
  }>;
}

export interface BrandProps {
  id: string;
  name: string;
  social: string;
  text: string;
  image: string;
}

export interface ProductsPageProps {
  products: MinimalProductProps[];
  pageCount: number;
  currentPage: number;
}

export interface FavoritesAndCartPageProps {
  products: MinimalProductProps[];
}

export interface SearchProductsProps {
  title?: string;
  fromTags?: string[];
  query?: string;
  apiUrl: string;
  ItemsPerPage: number;
  shuffle?: boolean;
}
