import React from "react";
import MenuSection from "./MenuSection";

const drinksItems = [
  {
    name: "Iced Tea (Sweetened/Unsweetened)",
    price: "$3.00",
    description:
      "A refreshing and thirst-quenching beverage made by brewing tea leaves and then chilling the tea over ice. Iced tea is available in a variety of flavors, including black tea, green tea, and herbal tea.",
  },
  {
    name: "Lemonade",
    price: "$3.50",
    description:
      "A classic and tangy beverage made with freshly squeezed lemon juice, water, and sweetener, served over ice. Lemonade is refreshing and perfect for hot summer days.",
  },
  {
    name: "Iced Matcha Latte",
    price: "$5.50",
    description:
      "A creamy and indulgent beverage made with high-quality matcha powder, cold milk, and sweetener, served over ice. Iced matcha lattes are smooth, earthy, and rich in antioxidants.",
  },
  {
    name: "Fruit Smoothies (Assorted flavors)",
    price: "$5.00",
    description:
      "A refreshing and nutritious blended beverage made with a combination of fresh fruit, yogurt or milk, and ice. Fruit smoothies are available in a variety of flavors, including strawberry, banana, mango, and mixed berry.",
  },
  {
    name: "Italian Soda",
    price: "$4.00",
    description:
      "A fizzy and flavorful beverage made with carbonated water and flavored syrup, served over ice and garnished with fresh fruit or a slice of citrus. Italian sodas are available in a variety of flavors, including raspberry, peach, and cherry.",
  },
  {
    name: "Sparkling Water",
    price: "$2.50",
    description:
      "A crisp and effervescent beverage made with carbonated water, perfect for quenching your thirst and refreshing your palate. Sparkling water is available plain or flavored with a hint of citrus or fruit.",
  },
  {
    name: "Fruit Infused Water",
    price: "$3.00",
    description:
      "A refreshing and hydrating beverage made by infusing water with slices of fresh fruit, herbs, or cucumbers. Fruit infused water is a healthy and delicious way to stay hydrated and add a burst of flavor to your day.",
  },
  {
    name: "Iced Chai Latte",
    price: "$5.50",
    description:
      "A creamy and aromatic beverage made with spiced chai tea concentrate, cold milk, and sweetener, served over ice. Iced chai lattes are flavorful and comforting, with notes of cinnamon, cardamom, and ginger.",
  },
];

const DrinksSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Drinks"
    subtitle="Drinks other than coffee"
    items={drinksItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default DrinksSection;