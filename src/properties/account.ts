export interface UserProps {
    id: string;
    name: string;
    surname: string;
    email: string;
    password: string;
    rememberPassword: boolean;
    confirmPassword: string;
    biography: string;
    phoneNumber: string;
    livingAddress: string;
    profilePicture: string;
    token: string;
    cart: CartItemProps[];
    favorites: string[];
    news: boolean;
  }

  export interface CartItemProps {
    id: string;
    quantity: number;
  }

  export interface RegisterProps {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
    id: string;
    biography: string;
    livingAddress: string;
    phoneNumber: string;
    profilePicture: string;
    rememberPassword: boolean;
    news: boolean;
  }
  