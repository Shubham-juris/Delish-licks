import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Gallery from "../components/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Gallery />
    </>
  );
};

export default Home;
