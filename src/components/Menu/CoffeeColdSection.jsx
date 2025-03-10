import React from "react";
import MenuSection from "./MenuSection";

const coffeeColdItems = [
  {
    name: "Iced Coffee",
    price: "$3.50",
    description:
      "A refreshing and energizing coffee beverage made by pouring chilled brewed coffee over ice. Iced coffee is crisp, smooth, and perfect for hot days or a refreshing pick-me-up.",
  },
  {
    name: "Cold Brew",
    price: "$4.00",
    description:
      "A smooth and rich coffee concentrate brewed with cold water over an extended period, resulting in a low-acid and highly caffeinated beverage. Cold brew is served over ice and can be enjoyed black or with milk and sweetener.",
  },
  {
    name: "Iced Latte",
    price: "$4.50",
    description:
      "A creamy and indulgent coffee beverage made with a shot of espresso, cold milk, and ice, creating a refreshing and satisfying drink with a hint of sweetness.",
  },
  {
    name: "Frappe",
    price: "$5.00",
    description:
      "A blended coffee beverage made with espresso, milk, ice, and sweetener, resulting in a creamy and frothy drink with a slushy-like consistency. Frappes are customizable with flavored syrups and toppings.",
  },
  {
    name: "Vietnamese Iced Coffee",
    price: "$5.50",
    description:
      "A sweet and bold coffee drink made with strong brewed coffee and sweetened condensed milk, poured over ice. Vietnamese iced coffee is rich, creamy, and perfect for those who enjoy a hint of sweetness in their coffee.",
  },
  {
    name: "Iced Mocha",
    price: "$5.50",
    description:
      "A decadent coffee beverage made with a shot of espresso, cold milk, chocolate syrup, and ice, topped with whipped cream. Iced mochas are rich, indulgent, and perfect for chocolate lovers.",
  },
  {
    name: "Nitro Cold Brew",
    price: "$5.50",
    description:
      "A velvety-smooth and effervescent coffee beverage made with cold brew coffee infused with nitrogen gas, resulting in a creamy texture and cascading bubbles. Nitro cold brew is served on tap and has a rich and creamy mouthfeel.",
  },
  {
    name: "Iced Caramel Macchiato",
    price: "$5.50",
    description:
      "A sweet and creamy coffee beverage made with chilled milk, espresso, vanilla syrup, and caramel sauce, served over ice. Iced caramel macchiatos are luxurious and indulgent, with layers of rich flavors.",
  },
];

const CoffeeColdSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Coffee Cold"
    subtitle="Chilled Coffee"
    items={coffeeColdItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default CoffeeColdSection;