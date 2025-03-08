import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* When user visits "/", redirect them to "/hero" */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;
