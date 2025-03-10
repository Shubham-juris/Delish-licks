import React from "react";
import MenuSection from "./MenuSection";

const cakesAndPastriesItems = [
  {
    name: "Chocolate Cake",
    price: "$5.99 per slice",
    description:
      "A rich and decadent chocolate cake layered with velvety chocolate frosting, perfect for satisfying your sweet tooth.",
  },
  {
    name: "Carrot Cake",
    price: "$5.99 per slice",
    description:
      "A moist and flavorful carrot cake studded with walnuts and topped with cream cheese frosting, a classic dessert favorite.",
  },
  {
    name: "Red Velvet Cake",
    price: "$6.99 per slice",
    description:
      "A luxurious red velvet cake with a hint of cocoa, layered with smooth cream cheese frosting and adorned with red velvet cake crumbs.",
  },
  {
    name: "Cheesecake",
    price: "$6.99 per slice",
    description:
      "Creamy and indulgent cheesecake topped with your choice of fresh fruit compote or rich chocolate ganache.",
  },
  {
    name: "Danishes",
    price: "$3.49 each",
    description:
      "Buttery and flaky pastries filled with sweet fruit preserves or rich almond paste, perfect for pairing with a cup of coffee.",
  },
  {
    name: "Fruit Tart",
    price: "$4.99 per slice",
    description:
      "A buttery tart shell filled with creamy pastry cream and topped with an assortment of fresh seasonal fruits, glazed to perfection.",
  },
  {
    name: "Croissants",
    price: "$3.49 each",
    description:
      "Buttery and flaky pastries filled with sweet fruit preserves or rich almond paste, perfect for pairing with a cup of coffee.",
  },
  {
    name: "Cinnamon Rolls",
    price: "$4.49 each",
    description:
      "Soft and fluffy cinnamon rolls swirled with cinnamon sugar and topped with creamy icing, a comforting and indulgent treat.",
  },
];

const CakesAndPastriesSection = ({ isMobile, isSmallScreen, isExtraSmall, isVisible }) => (
  <MenuSection
    title="Cakes and Pastries"
    subtitle="Delicious Cakes and Pastries"
    items={cakesAndPastriesItems}
    isMobile={isMobile}
    isSmallScreen={isSmallScreen}
    isExtraSmall={isExtraSmall}
    isVisible={isVisible}
  />
);

export default CakesAndPastriesSection;