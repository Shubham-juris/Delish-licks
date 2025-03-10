import React from "react";
import MenuSection from "./MenuSection";

const packedFoodItems = [
  {
    name: "Chicken Curry",
    price: "$12.99",
    description:
      "Tender pieces of chicken simmered in a rich and aromatic curry sauce, served with fragrant basmati rice. A classic Indian dish packed with flavor.",
  },
  {
    name: "Butter Chicken",
    price: "$14.99",
    description:
      "Juicy pieces of chicken cooked in a creamy tomato-based sauce, infused with butter, cream, and a blend of aromatic spices. Served with basmati rice for a comforting and satisfying meal.",
  },
  {
    name: "Chicken Korma",
    price: "$13.99",
    description:
      "Succulent chicken cooked in a creamy cashew and almond sauce, flavored with aromatic spices and served with fluffy basmati rice. A delightful indulgence for the senses.",
  },
  {
    name: "Paneer Tikka Masala",
    price: "$13.99",
    description:
      "Cubes of paneer cheese simmered in a creamy tomato-based sauce with bell peppers and onions, infused with traditional Indian spices. Served with basmati rice.",
  },
];

const PackedFoodSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Packed Food"
    subtitle="Delicious Ready-to-Eat Meals"
    items={packedFoodItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
    showDisclaimer={true}
  />
);

export default PackedFoodSection;