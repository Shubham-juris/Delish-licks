import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, Container, Fade, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import MenuHeader from "../components/Menu/MenuHeader";
import CoffeeSection from "../components/Menu/CoffeeSection";
import CoffeeColdSection from "../components/Menu/CoffeeColdSection";
import DrinksSection from "../components/Menu/DrinksSection";
import BitesSection from "../components/Menu/BitesSection";
import WrapsSection from "../components/Menu/WrapsSection";
import SubsSection from "../components/Menu/SubsSection";
import BurgersSection from "../components/Menu/BurgersSection";
import ColdBurgersSection from "../components/Menu/ColdBurgersSection";
import HotDogsSection from "../components/Menu/HotDogsSection";
import CakesAndPastriesSection from "../components/Menu/CakesAndPastriesSection";
import IceCreamsSection from "../components/Menu/IceCreamsSection";
import PackedFoodSection from "../components/Menu/PackedFoodSection";

const MENU_SECTIONS = [
  CoffeeSection, CoffeeColdSection, DrinksSection, BitesSection, WrapsSection,
  SubsSection, BurgersSection, ColdBurgersSection, HotDogsSection, CakesAndPastriesSection,
  IceCreamsSection, PackedFoodSection
];

const Menu = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  const handleIntersection = useCallback((entries) => {
    setVisibleSections((prev) =>
      entries.reduce((acc, entry) => entry.isIntersecting ? { ...acc, [entry.target.dataset.index]: true } : acc, prev)
    );
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    sectionRefs.current.forEach((ref, index) => ref && (ref.dataset.index = index, observer.observe(ref)));
    return () => observer.disconnect();
  }, [handleIntersection]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <Box component="main" sx={{ flex: 1, ml: { md: "320px" }, width: { md: "calc(100% - 320px)" } }}>
        <MenuHeader isExtraSmall={isExtraSmall} isSmallScreen={isSmallScreen} />
        <Container maxWidth="lg" sx={{ py: 4, bgcolor: "#2c2a26", color: "common.white", borderRadius: 2 }}>
          {MENU_SECTIONS.map((Section, index) => (
            <Fade key={index} in={!!visibleSections[index]} timeout={600}>
              <Box ref={(el) => (sectionRefs.current[index] = el)} sx={{ py: 3, borderBottom: index < MENU_SECTIONS.length - 1 ? "1px solid rgba(255, 255, 255, 0.1)" : "none" }}>
                <Section isMobile={isMobile} isSmallScreen={isSmallScreen} isExtraSmall={isExtraSmall} isVisible={visibleSections[index]} />
              </Box>
            </Fade>
          ))}
        </Container>
      </Box>
      <Footer sx={{ mt: "auto", bgcolor: "grey.900", py: 4, color: "common.white" }} />
    </Box>
  );
};

export default Menu;
