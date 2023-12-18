import React from "react";
import CardWithCircleBadge from "./CardWithCircleBadge";

// Define the type for your items
interface ItemType {
  id: number;
  image: string;
  title: string;
  text: string;
  // ... other properties
}

interface ItemListerWithcircleCardsProps {
  items: ItemType[];
  main_href: string;
  starting_item_number?: number;
}

const ItemListerWithcircleCards: React.FC<ItemListerWithcircleCardsProps> = ({ items, main_href, starting_item_number: n }) => {
  return (
    <>
      {items.slice(n ?? 0).map((item, index) => (
        <div
          key={index}
          className={`img-container ${
            index % 2 === 0
              ? "bot-img"
              : `top-img ${
                  index === items.length - 1 - 1 && index % 2 !== 0
                    ? "no-bg"
                    : "reverse-bg"
                }`
          }`}
        >
          <CardWithCircleBadge
            backgroundUrl={item.image}
            header={item.title}
            text={item.text}
            href={`/${main_href}/${item.id}`}
          />
        </div>
      ))}
    </>
  );
};

export default ItemListerWithcircleCards;
