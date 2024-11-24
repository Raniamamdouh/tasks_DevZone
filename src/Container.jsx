import React from "react";
import pic from "./assets/download.jfif";
const Container = () => {
  return (
    <main style={styles.main}>
     
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome to </h1>
        <img 
          src={pic}
          alt="Welcome" 
          style={styles.image} 
        />
      </div>
    </main>
  );
};

const styles = {
  main: {
    padding: "20px",
    textAlign: "center",
  },
  header: {
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center", 
    gap: "15px", 
  },
  title: {
    fontSize: "24px",
    margin: 0,
  },
  image: {
    height: "50px",
    width: "50px", 
    objectFit: "cover",
  },
};

export default Container;
