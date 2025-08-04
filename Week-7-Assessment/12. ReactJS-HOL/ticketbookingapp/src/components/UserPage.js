import React from 'react';
import FlightDetails from './FlightDetails';

function UserPage({ onLogout }) {
  return (
    <div className="user-page">
      <h2>Welcome User</h2>
      <p>You can now view flight details and book tickets.</p>
      <FlightDetails />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserPage;
