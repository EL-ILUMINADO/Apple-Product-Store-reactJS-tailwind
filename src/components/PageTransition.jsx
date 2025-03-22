import React, { useEffect, useState } from "react";

const PageTransition = ({ activePage, children }) => {
  const [currentPage, setCurrentPage] = useState(activePage);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (currentPage !== activePage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(activePage);
        setIsTransitioning(false);
      }, 500);
    }
  }, [activePage, currentPage]);

  return (
    <div
      className="w-full h-full overflow-hidden relative"
      style={{ backgroundImage: "url(images/pages-bg.png" }}
    >
      <div
        className={`absolute w-full h-full transition-transform duration-500 ${
          isTransitioning ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {children[currentPage]}
      </div>
    </div>
  );
};

export default PageTransition;
