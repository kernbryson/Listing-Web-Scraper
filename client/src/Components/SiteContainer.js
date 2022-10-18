import React, { useState } from "react";
import Scrape from "./Scraper";
import Home from "./Home"
import SideBar from "./SideBar"
const styles = {
    containerStyles: {
      width:"84vw",
      paddingLeft:"0px"
    },
  };

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Scrape") {
      return <Scrape />;
    }

    return <Scrape />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    
    <div class="row flex-nowrap">
      {/* We are passing the currentPage from state and the function to update it */}
      <SideBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      <div style={styles.containerStyles}>
      {renderPage()}
      </div>
    </div>
  );
}
