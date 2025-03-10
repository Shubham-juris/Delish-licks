import React from "react";
import MenuSection from "./MenuSection";

const coffeeItems = [
  {
    name: "Cappuccino",
    price: "$4.00",
    description:
      "A luxurious espresso-based drink made with equal parts espresso, steamed milk, and milk foam. Cappuccinos are known for their creamy texture and delicate balance of flavors.",
  },
  {
    name: "Espresso",
    price: "$2.50",
    description:
      "A bold and intense shot of coffee brewed by forcing hot water through finely-ground coffee beans. Served in a small cup, espresso is rich and concentrated, with a layer of crema on top.",
  },
  {
    name: "Mochaccino",
    price: "$5.00",
    description:
      "A decadent espresso-based drink made with a shot of espresso, steamed milk, and rich chocolate syrup, topped with whipped cream. Mochas are perfect for those with a sweet tooth.",
  },
  {
    name: "Americano Latte",
    price: "$3.00",
    description:
      "A classic coffee drink made by diluting a shot of espresso with hot water, resulting in a smooth and flavorful cup with a similar strength to drip coffee.",
  },
  {
    name: "Affogato",
    price: "$6.00",
    description:
      "A delightful dessert coffee with hot espresso poured over vanilla ice cream.",
  },
  {
    name: "Latte",
    price: "$4.50",
    description:
      "A smooth and velvety espresso-based drink made with steamed milk and a thin layer of foam.",
  },
];

const CoffeeSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Coffee"
    subtitle="Freshly brewed Hot coffee"
    items={coffeeItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default CoffeeSection;