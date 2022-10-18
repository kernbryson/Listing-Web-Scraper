import React from "react";
const styles = {
  textStyles: {
    fontSize: "25px",
    margin: "15px",
  },
  containerStyles: {
    backgroundColor: "	#416a59",
    color: "white",
    height:"100vh",
    overflowX: "hidden",
    marginLeft:"0px"
  },
};
export default function Home() {
  return (
    <div class="home" style={styles.containerStyles}>
      <h1 class="p-3">About Me</h1>
      <p style={styles.textStyles}>
       I'm a full stack web developer that is located in Loganville Georgia. I am proficient in building web applications. Problem solver and creative mindset with a meticulous attention to detail. Movie fanatic, outdoorsman, and family oriented. I am interested in working on both front end or back end; both are unique and interesting in their own way.
      </p>
    </div>
  );
}
