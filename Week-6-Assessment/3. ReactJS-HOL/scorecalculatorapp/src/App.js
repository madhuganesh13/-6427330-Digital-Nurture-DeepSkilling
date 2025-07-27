import React from 'react';
import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="Madhu Ganesh" 
        School="Aathmalayaa High School" 
        Total={404} 
        Goal={500} 
      />
    </div>
  );
}

export default App;
