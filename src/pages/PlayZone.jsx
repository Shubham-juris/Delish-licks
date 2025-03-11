import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import PartyOptions from "../components/PlayZone/PartyOptions";
import PlayBanner from "../components/PlayZone/PlayBanner";
import PlayfulOfferings from "../components/PlayZone/PlayfulOffering";
import ThrillExperience from "../components/PlayZone/ThrillExperience";
  
const PlayZone = () => {
  return (
    <>
      <Navbar />
      <PlayBanner />
      <ThrillExperience />
      <PlayfulOfferings/>
      <PartyOptions/>
      <Footer/>
    </>
  );
};

export default PlayZone;
