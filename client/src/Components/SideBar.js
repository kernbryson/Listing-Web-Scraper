import React from "react";
const styles = {
    sizing: {
      fontSize: "25px",
      marginTop:"15px"
      
    },

  };


function SideBar({ currentPage, handlePageChange }) {
  return (
   
    
        <div class="col-auto col-md-2  px-sm-2  bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              
                    <span class="fs-5 d-none d-sm-inline">Menu</span>
               
                <ul style={styles.sizing} class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#Home"   onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              } class="nav-link align-middle px-0">
                            <i class="fa-solid fa-house"></i> <span class="ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#Scrape" onClick={() => handlePageChange("Scrape")}
              className={
                currentPage === "Scrape" ? "nav-link active" : "nav-link"
              } class="nav-link align-middle px-0">
                            <i class="fa-solid fa-spoon"></i> <span class="ms-1 d-none d-sm-inline">Scraper</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                        <i class="fa-solid fa-person-digging"></i> <span class="ms-1 d-none d-sm-inline">WIP</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                        <i class="fa-solid fa-person-digging"></i> <span class="ms-1 d-none d-sm-inline">WIP</span>
                        </a>
                    </li>
                  
               
                 
                 
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/>
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
 

 
    
    

  );
}

export default SideBar;
