import React, { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Iphone from "./components/Iphone";
import Macbook from "./components/Macbook";
import Watch from "./components/Watch";
import IMac from "./components/iMac";
import PageTransition from "./components/PageTransition";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [isLgScreen, setIsLgScreen] = useState(window.innerWidth > 1024);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLgScreen(window.innerWidth >= 1024);
      if (window.innerWidth < 1024) {
        setFrameZoom(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (pageIndex) => {
    setActivePage(pageIndex);
  };

  const toggleZoom = () => {
    if (isLgScreen) {
      setFrameZoom(!frameZoom);
    }
  };

  const resetPage = () => {
    setActivePage(0); // reset to home page
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "min-w-[97vw] min-h-[97vh]"
        }w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar
          activePage={activePage}
          handleNavClick={handleNavClick}
          isNavOpen={isNavOpen}
          toggleNav={toggleNav}
        />
        <Controls
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />
        <div className="flex-grow">
          <PageTransition activePage={activePage}>
            <Home onNavigate={handleNavClick} />
            <Iphone />
            <Macbook />
            <Watch />
            <IMac />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};

export default App;
