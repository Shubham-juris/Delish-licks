import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import KidsBanner from "../components/KidsZone/KidsBanner";
import KidsPlayZone from "../components/KidsZone/KidsPlayZone";
import KidZone from "../components/KidsZone/KidsZone";

const KidsZone = () => {
  return (
    <>
      <Navbar />
      <KidsBanner />
      <KidsPlayZone />
      {/* <KidZone /> */}
      <Footer/>
    </>
  );
};

export default KidsZone;

      