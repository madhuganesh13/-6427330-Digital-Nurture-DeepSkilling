import React from "react";
import officeImage from "./Office.jpg";

function App() {
  // Single office object (example)
  const office = {
    name: "Tech Park - Tower A",
    rent: 55000,
    address: "123, MG Road, Bangalore"
  };

  // Multiple office list
  const offices = [
    { name: "Tech Park - Tower A", rent: 55000, address: "MG Road, Bangalore" },
    { name: "Innovation Hub", rent: 75000, address: "Whitefield, Bangalore" },
    { name: "Startup Space", rent: 45000, address: "Koramangala, Bangalore" }
  ];

  return (
    <div style={styles.container}>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img src={officeImage} alt="Office Space" style={styles.image} />


      {/* Single Office Details */}
      <h2>Office Details</h2>
      <p>Name: {office.name}</p>
      <p
        style={{
          color: office.rent < 60000 ? "red" : "green",
          fontWeight: "bold"
        }}
      >
        Rent: ₹{office.rent}
      </p>
      <p>Address: {office.address}</p>

      <hr />

      {/* Multiple Office List */}
      <h2>Available Office Spaces</h2>
      <ul style={styles.list}>
        {offices.map((item, index) => (
          <li key={index} style={styles.item}>
            <p>Name: {item.name}</p>
            <p
              style={{
                color: item.rent < 60000 ? "red" : "green",
                fontWeight: "bold"
              }}
            >
              Rent: ₹{item.rent}
            </p>
            <p>Address: {item.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    padding: "20px"
  },
  image: {
    width: "400px",
    height: "200px",
    margin: "20px 0"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  item: {
    border: "1px solid #ccc",
    padding: "10px",
    margin: "10px auto",
    width: "300px",
    borderRadius: "8px"
  }
};

export default App;
