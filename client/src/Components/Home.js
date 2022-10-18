import React from "react";
const styles = {
  headerStyles: {
    marginTop:"15vh"
    
  },
  containerStyles: {
    backgroundImage: "url(https://cdnb.artstation.com/p/assets/images/images/041/964/419/large/kevin-dillon-0126.jpg?1633198855)",
    imageRendering: "-webkit-optimize-contrast",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    color: "white",
    height:"100vh",
    overflowX: "hidden",
    marginLeft:"0px",
    display:"flex",
    justifyContent:"center",
    
  
  },
};
export default function Home() {
  return (
    <div class="home" style={styles.containerStyles}>
        <h1 style={styles.headerStyles} class="display-1">Georgia Foreclosures at your fingertips</h1>
    </div>
  );
}
