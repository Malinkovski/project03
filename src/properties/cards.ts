interface SpecialGiftCard {
  id: string;
  price: number;
  title: string;
  image: string;
}

interface GiftCard {
  id: string;
  price: number;
  title: string;
}

export interface GiftCardPageProps {
  giftcard_page_title: string;
  special_gift_cards: SpecialGiftCard[];
  gift_cards: GiftCard[];
}

export interface PolicyCardProps {
  title: string;
  text: string;
  icon: string;
}
