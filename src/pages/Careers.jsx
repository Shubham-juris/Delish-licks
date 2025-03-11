import CoffeeMakerAssembler from "../components/Careers/CoffeeMakerAssembler";
import Cook from "../components/Careers/Cook";
import Dishwashers from "../components/Careers/Dishwashers";
import FoodCounterAttendant from "../components/Careers/FoodCounterAttendant";
import FoodServiceSupervisor from "../components/Careers/FoodServiceSupervisor";
import KitchenHelper from "../components/Careers/KitchenHelper";
import RestaurantManager from "../components/Careers/RestaurantManager";
import SandwichMaker from "../components/Careers/SandwichMaker";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";



const Careers = () => {
  return (
    <>
      <Navbar />
      <Dishwashers />
      <KitchenHelper />
      <RestaurantManager/>
      <FoodCounterAttendant/>
      <Cook/>
      <SandwichMaker/>
      <FoodServiceSupervisor/>
      <Footer/>
    </>
  );
};

export default Careers;
