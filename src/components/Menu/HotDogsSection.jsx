import React from "react";
import MenuSection from "./MenuSection";

const hotDogsItems = [
  {
    name: "Classic Hot Dog",
    price: "$4.99",
    description:
      "A juicy beef or pork hot dog served in a soft bun, topped with ketchup, mustard, and diced onions.",
  },
  {
    name: "Chili Cheese Dog",
    price: "$5.99",
    description:
      "A classic hot dog topped with hearty chili and melted cheddar cheese, served in a soft bun.",
  },
  {
    name: "Chicago Style Hot Dog",
    price: "$6.99",
    description:
      "A beef or pork hot dog served in a poppy seed bun, topped with yellow mustard, chopped onions, sweet pickle relish, tomato slices, pickled sport peppers, and a dash of celery salt.",
  },
  {
    name: "BBQ Bacon Ranch Dog",
    price: "$6.99",
    description:
      "A savory hot dog topped with crispy bacon, tangy BBQ sauce, and creamy ranch dressing, served in a soft bun.",
  },
];

const HotDogsSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Hot Dogs"
    subtitle="Delicious Hot Dog Options"
    items={hotDogsItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default HotDogsSection;