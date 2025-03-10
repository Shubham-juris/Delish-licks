import Navbar from "../components/common/Navbar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
import SocialMedia from "../components/Home/SocialMedia";
import Footer from "../components/common/Footer";

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
