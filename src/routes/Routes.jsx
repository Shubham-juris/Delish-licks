import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import KidsZone from "../pages/KidsZone";
import PlayZone from "../pages/PlayZone";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />  
        <Route path="/Kids-Zone" element={<KidsZone />} />
        <Route path="/Play-Zone" element={<PlayZone />} />
        <Route path="/Careers" element={<Careers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
