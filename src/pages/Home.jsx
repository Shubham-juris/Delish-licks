import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Gallery />
      <SocialMedia/>
      <Footer/>
    </>
  );
};

export default Home;
