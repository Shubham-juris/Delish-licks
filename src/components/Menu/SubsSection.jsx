import React from "react";
import MenuSection from "./MenuSection";

const subsItems = [
  {
    name: "Italian Sub",
    price: "$9.99",
    description:
      "Ham, salami, pepperoni, provolone cheese, lettuce, tomato, onion, and Italian dressing on a toasted hoagie roll.",
  },
  {
    name: "Veggie Sub",
    price: "$8.99",
    description:
      "Grilled zucchini, bell peppers, onions, mushrooms, spinach, provolone cheese, and pesto mayo on a toasted sub roll.",
  },
  {
    name: "Roast Beef & Cheddar Sub",
    price: "$10.99",
    description:
      "Thinly sliced roast beef paired with sharp cheddar cheese, crisp lettuce, tangy tomato, and horseradish mayo on a toasted sub roll.",
  },
  {
    name: "Turkey Club Sub",
    price: "$10.99",
    description:
      "Sliced turkey breast, bacon, Swiss cheese, lettuce, tomato, and mayo on a toasted sub roll.",
  },
  {
    name: "Ham and Swiss Sub",
    price: "$9.99",
    description:
      "Tender slices of ham, Swiss cheese, crunchy lettuce, juicy tomato, and creamy mayo, all nestled in a toasted sub roll.",
  },
  {
    name: "Chicken Bacon Ranch Sub",
    price: "$11.99",
    description:
      "Grilled chicken breast, crispy bacon, melted cheddar cheese, fresh lettuce, tomato, and creamy ranch dressing, all wrapped in a warm sub roll.",
  },
  {
    name: "Chicken Caesar Sub",
    price: "$10.99",
    description:
      "Grilled chicken breast, crisp romaine lettuce, Parmesan cheese, and Caesar dressing served in a toasted sub roll.",
  },
  {
    name: "Meatball Marinara Sub",
    price: "$9.99",
    description:
      "Homemade meatballs smothered in marinara sauce, topped with melted mozzarella cheese, served in a warm sub roll.",
  },
  {
    name: "Philly Cheesesteak Sub",
    price: "$11.99",
    description:
      "Thinly sliced steak sautéed with onions, peppers, and melted provolone cheese, served in a toasted sub roll.",
  },
  {
    name: "Buffalo Chicken Sub",
    price: "$11.99",
    description:
      "Crispy chicken tossed in spicy buffalo sauce, topped with lettuce, tomato, and ranch dressing, served in a toasted sub roll.",
  },
];

const SubsSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Subs"
    subtitle="Toasted Sub Sandwiches"
    items={subsItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default SubsSection;