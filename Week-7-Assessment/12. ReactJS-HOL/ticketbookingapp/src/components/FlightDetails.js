import React from 'react';

function FlightDetails() {
  const flights = [
    { id: 1, destination: 'Delhi', price: 40000 },
    { id: 2, destination: 'Madurai', price: 30000 },
    { id: 3, destination: 'Chennai', price: 20000 },
  ];

  return (
    <div>
      <h3>Available Flights</h3>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.destination} - RS:-{flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FlightDetails;
