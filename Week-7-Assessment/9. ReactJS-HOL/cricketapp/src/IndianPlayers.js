import React from "react";

const IndianPlayers = () => {
  // Odd and Even team using destructuring
  const team = ["Virat", "Rohit", "Rahul", "Shreyas", "Hardik", "Jadeja"];
  const [p1, p2, p3, p4, p5, p6] = team;

  const oddPlayers = [p1, p3, p5];
  const evenPlayers = [p2, p4, p6];

  // Merge T20 and Ranji Trophy players
  const T20players = ["Virat", "Rohit", "Hardik"];
  const RanjiTrophyPlayers = ["Pujara", "Rahane", "Ishant"];
  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div style={styles.container}>
      <h2>Odd Team Players</h2>
      <ul style={styles.list}>
        {oddPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul style={styles.list}>
        {evenPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji Trophy)</h2>
      <ul style={styles.list}>
        {mergedPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "20px",
    fontFamily: "Arial"
  },
  list: {
    listStyle: "none",
    padding: 0
  }
};

export default IndianPlayers;
