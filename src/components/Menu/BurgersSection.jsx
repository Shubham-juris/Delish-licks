import React from "react";
import MenuSection from "./MenuSection";

const burgersItems = [
  {
    name: "Classic Beef Burger",
    price: "$8.99",
    description:
      "A juicy beef patty topped with crisp lettuce, ripe tomato, onion, pickles, and tangy mayo on a sesame seed bun.",
  },
  {
    name: "Bacon Avocado Burger",
    price: "$10.99",
    description:
      "Crispy bacon, creamy avocado, lettuce, tomato, and mayo on a sesame seed bun, served with a juicy beef patty.",
  },
  {
    name: "Mushroom Swiss Burger",
    price: "$10.99",
    description:
      "Sautéed mushrooms and melted Swiss cheese atop a juicy beef patty, finished with lettuce, tomato, and mayo on a Kaiser roll.",
  },
  {
    name: "BBQ Chicken Burger",
    price: "$11.99",
    description:
      "Grilled chicken breast smothered in tangy BBQ sauce and topped with melted cheddar cheese, crispy bacon, and onion straws on a sesame seed bun.",
  },
  {
    name: "California Turkey Burger",
    price: "$9.99",
    description:
      "Lean ground turkey patty topped with fresh avocado, crisp lettuce, ripe tomato, and zesty chipotle mayo on a whole wheat bun.",
  },
  {
    name: "Jalapeño Pepper Jack Burger",
    price: "$10.99",
    description:
      "Spicy jalapeño slices and melted pepper jack cheese atop a juicy beef patty, finished with lettuce, tomato, and chipotle mayo on a sesame seed bun.",
  },
  {
    name: "Veggie Burger (Vegetarian)",
    price: "$9.99",
    description:
      "A flavorful veggie patty made with black beans, quinoa, and spices, topped with lettuce, tomato, onion, and creamy avocado on a whole wheat bun.",
  },
  {
    name: "Blue Cheese Bacon Burger",
    price: "$11.99",
    description:
      "Crumbled blue cheese and crispy bacon atop a juicy beef patty, finished with lettuce, tomato, and tangy mayo on a Kaiser roll.",
  },
];

const BurgersSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Burgers"
    subtitle="Gourmet Burgers"
    items={burgersItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default BurgersSection;