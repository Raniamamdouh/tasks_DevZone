import React from "react";
import logo from "./assets/download.png";


const Logos = () => {
  return (
    <header style={styles.header}>
      
      <div style={styles.logo}>
        <img 
          src={logo} 
          alt="Logo" 
          style={styles.logoImage} 
        />

      </div>
      <nav>
        <a href="#link1" style={styles.link}>Link 1</a>
        <a href="#link2" style={styles.link}>Link 2</a>
        <a href="#link3" style={styles.link}>Link 3</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f4f4f4",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoImage: {
    height: "40px", 
    width: "auto",  
  },
  link: {
    margin: "0 10px",
    textDecoration: "none",
    color: "blue",
  },
};

export default Logos;
