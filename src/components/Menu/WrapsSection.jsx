import React from "react";
import MenuSection from "./MenuSection";

const wrapsItems = [
  {
    name: "Classic Chicken Caesar Wrap",
    price: "$9.99",
    description:
      "Grilled chicken, romaine lettuce, Parmesan cheese, and Caesar dressing wrapped in a soft tortilla.",
  },
  {
    name: "Turkey & Avocado Wrap",
    price: "$10.99",
    description:
      "Sliced turkey breast, avocado, bacon, lettuce, tomato, and mayo wrapped in a whole wheat tortilla.",
  },
  {
    name: "Veggie Delight Wrap",
    price: "$8.99",
    description:
      "Fresh vegetables, hummus, and mixed greens wrapped in a spinach tortilla.",
  },
  {
    name: "BBQ Ranch Chicken Wrap",
    price: "$9.99",
    description:
      "Tender chicken strips, crispy bacon, cheddar cheese, lettuce, tomato, and BBQ ranch dressing wrapped in a flour tortilla.",
  },
  {
    name: "Mediterranean Falafel Wrap",
    price: "$8.99",
    description:
      "Crispy falafel, tabbouleh, hummus, cucumber, tomato, and tzatziki sauce wrapped in a warm pita bread.",
  },
  {
    name: "Buffalo Chicken Wrap",
    price: "$9.99",
    description:
      "Spicy buffalo chicken, lettuce, tomato, shredded cheese, and ranch dressing wrapped in a jalapeño cheddar tortilla.",
  },
  {
    name: "Greek Gyro Wrap",
    price: "$10.99",
    description:
      "Thinly sliced gyro meat, lettuce, tomato, red onion, feta cheese, and tzatziki sauce wrapped in a warm pita bread.",
  },
  {
    name: "California Turkey Club Wrap",
    price: "$10.99",
    description:
      "Turkey breast, bacon, avocado, lettuce, tomato, and mayo wrapped in a spinach tortilla.",
  },
  {
    name: "Caprese Wrap",
    price: "$9.99",
    description:
      "Fresh mozzarella, tomatoes, basil leaves, balsamic glaze, and pesto wrapped in a sun-dried tomato tortilla.",
  },
  {
    name: "Philly Cheesesteak Wrap",
    price: "$11.99",
    description:
      "Sliced steak, sautéed onions, peppers, mushrooms, provolone cheese, and mayo wrapped in a garlic herb tortilla.",
  },
];

const WrapsSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Wraps"
    subtitle="Freshly Made Wraps"
    items={wrapsItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default WrapsSection;