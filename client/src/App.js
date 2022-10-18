import React, { useEffect, useState } from "react";
import Scrape from "./Components/Scraper";


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  return (
    <div>
     
      <Scrape />
      <script src="../src/index.js"></script>
    </div>
  );
}

export default App;
