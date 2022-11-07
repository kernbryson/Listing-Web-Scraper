import React, { useEffect, useState } from "react";
import Scrape from "./Components/Scraper";
import SiteContainer from "./Components/SiteContainer";
import "../src/App.css";
function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <SiteContainer />
    </div>
  );
}

export default App;
