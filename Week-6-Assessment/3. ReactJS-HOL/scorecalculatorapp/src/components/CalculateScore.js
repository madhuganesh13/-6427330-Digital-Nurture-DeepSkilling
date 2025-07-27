import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
  const { Name, School, Total, Goal } = props;

  // Calculate average score (percentage)
  const average = (Total / Goal) * 100;

  return (
    <div className="score-container">
      <h2>Student Score Details</h2>

      <div className="student-details">
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total}</p>
        <p><strong>Goal Marks:</strong> {Goal}</p>
      </div>

      <div className="average-score">
        <h3>Average Score</h3>
        <p>{average.toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default CalculateScore;
