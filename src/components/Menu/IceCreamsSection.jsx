import React from "react";
import MenuSection from "./MenuSection";

const iceCreamsItems = [
  {
    name: "Vanilla Bean",
    price: "$3.99 per scoop cone or cup",
    description:
      "Classic and creamy, our vanilla bean ice cream is made with real Madagascar vanilla for a rich and indulgent flavor experience.",
  },
  {
    name: "Chocolate Fudge",
    price: "$5 per scoop cone or cup",
    description:
      "Dive into decadence with our velvety chocolate fudge ice cream. Each spoonful is packed with intense chocolate flavor and ribbons of smooth fudge swirls.",
  },
  {
    name: "Mint Chocolate Chip",
    price: "$6.99 per scoop cone or cup",
    description:
      "Refreshingly cool and irresistibly creamy, our mint chocolate chip ice cream features vibrant mint flavor infused with generous chunks of rich chocolate.",
  },
  {
    name: "Rocky Road",
    price: "$6.99 per scoop cone or cup",
    description:
      "Embark on a flavor adventure with our rocky road ice cream. Packed with marshmallows, roasted almonds, and chocolate chunks, this indulgent treat offers a satisfying combination of sweetness and crunch.",
  },
  {
    name: "Butter Pecan",
    price: "$5 per scoop cone or cup",
    description:
      "Experience the nutty goodness of our butter pecan ice cream. Made with buttery caramel and toasted pecan pieces, this flavor is a comforting and irresistible treat.",
  },
  {
    name: "Coconut Bliss",
    price: "$3.99 per scoop cone or cup",
    description:
      "Transport yourself to the tropics with our coconut bliss ice cream. Creamy coconut milk and shredded coconut combine to create a luscious and exotic treat that's perfect for coconut lovers.",
  },
  {
    name: "Coffee Toffee Crunch",
    price: "$5 per scoop cone or cup",
    description:
      "Wake up your senses with our coffee toffee crunch ice cream. Rich coffee ice cream is studded with crunchy toffee pieces for a delightful pick-me-up with every scoop.",
  },
  {
    name: "Strawberry Swirl",
    price: "$3.99 per scoop cone or cup",
    description:
      "Indulge in the sweetness of summer with our strawberry swirl ice cream. Made with ripe strawberries, this refreshing treat features swirls of strawberry puree for a burst of fruity flavor in every bite.",
  },
  {
    name: "Cookies and Cream",
    price: "$3.99 per scoop cone or cup",
    description:
      "A timeless favorite, our cookies and cream ice cream combines crunchy chocolate cookie pieces with creamy vanilla ice cream for a delightful blend of textures and flavors.",
  },
];

const IceCreamsSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Ice Creams"
    subtitle="Delicious Ice Cream Flavors"
    items={iceCreamsItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default IceCreamsSection;