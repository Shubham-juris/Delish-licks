import React from "react";
import MenuSection from "./MenuSection";

const coldBurgersItems = [
  {
    name: "Classic Beef Burger",
    price: "$8.99",
    description:
      "A juicy beef patty topped with crisp lettuce, ripe tomato, onion, pickles, and tangy mayo on a sesame seed bun.",
  },
  {
    name: "Vegetarian Black Bean Burger",
    price: "$8.99",
    description:
      "Our house-made black bean patty topped with fresh avocado, lettuce, tomato, and chipotle mayo on a whole wheat bun.",
  },
  {
    name: "Turkey Burger",
    price: "$9.99",
    description:
      "Lean ground turkey seasoned to perfection and topped with your choice of fixings on a whole wheat bun.",
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
];

const ColdBurgersSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Cold Burgers"
    subtitle="Chilled Burger Options"
    items={coldBurgersItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default ColdBurgersSection;