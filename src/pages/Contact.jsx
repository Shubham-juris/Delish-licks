import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import ContactBanner from "../components/Contact/ContactBanner";
import ContactSection from "../components/Contact/ContactSection";
import FreshFlavors from "../components/Contact/FreshFlavors";
import Map from "../components/Contact/Map";



const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactBanner />
      <FreshFlavors />
      <ContactSection />
      <Map />
      <Footer />
    </>
  );
};

export default Contact;