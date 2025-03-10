import React from "react";
import MenuSection from "./MenuSection";

const bitesItems = [
  {
    name: "Garlic Parmesan Fries",
    price: "$6.99",
    description:
      "Crispy golden fries tossed in garlic-infused olive oil and sprinkled with grated Parmesan cheese and chopped parsley.",
  },
  {
    name: "Loaded Nachos",
    price: "$9.99",
    description:
      "Crispy tortilla chips piled high with melted cheese, black beans, diced tomatoes, jalapeños, sour cream, and guacamole.",
  },
  {
    name: "Bruschetta",
    price: "$8.99",
    description:
      "Toasted baguette slices topped with diced tomatoes, garlic, basil, and balsamic glaze, a fresh and flavorful appetizer.",
  },
  {
    name: "Mini Sliders",
    price: "$11.99",
    description:
      "Juicy beef or chicken sliders served on mini buns with lettuce, tomato, and your choice of cheese, perfect for sharing or enjoying as a snack.",
  },
  {
    name: "Caprese Skewers",
    price: "$8.99",
    description:
      "Fresh mozzarella cheese, cherry tomatoes, and basil leaves skewered on toothpicks and drizzled with balsamic glaze, a simple and elegant appetizer.",
  },
  {
    name: "Mozzarella Sticks",
    price: "$7.99",
    description:
      "Golden-fried mozzarella cheese sticks served with marinara sauce for dipping, crispy on the outside and gooey on the inside.",
  },
  {
    name: "Chicken Wings",
    price: "$10.99",
    description:
      "Crispy chicken wings tossed in your choice of buffalo, barbecue, or honey garlic sauce, served with celery sticks and blue cheese or ranch dressing.",
  },
  {
    name: "Spinach and Artichoke Dip",
    price: "$9.99",
    description:
      "Creamy spinach and artichoke dip served warm with tortilla chips or toasted bread for dipping, a comforting and crowd-pleasing favorite.",
  },
  {
    name: "Vegetable Spring Rolls",
    price: "$9.99",
    description:
      "Crispy fried spring rolls filled with mixed vegetables and served with sweet chili sauce for dipping, a crunchy and satisfying appetizer.",
  },
  {
    name: "Hummus Platter",
    price: "$10.99",
    description:
      "Creamy hummus served with warm pita bread, cucumber slices, cherry tomatoes, and Kalamata olives, a healthy and satisfying snack.",
  },
];

const BitesSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Bites Menu"
    subtitle="Small Bites & Appetizers"
    items={bitesItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default BitesSection;