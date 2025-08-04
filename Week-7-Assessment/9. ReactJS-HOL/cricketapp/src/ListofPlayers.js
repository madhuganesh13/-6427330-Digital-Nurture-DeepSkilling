import React from "react";

const ListofPlayers = () => {
  // Players with names and scores
  const players = [
    { name: "Virat Kohli", score: 95 },
    { name: "Rohit Sharma", score: 88 },
    { name: "KL Rahul", score: 65 },
    { name: "Shreyas Iyer", score: 40 },
    { name: "Hardik Pandya", score: 75 },
    { name: "Ravindra Jadeja", score: 60 },
    { name: "R Ashwin", score: 55 },
    { name: "Bhuvneshwar Kumar", score: 35 },
    { name: "Jasprit Bumrah", score: 78 },
    { name: "Mohammed Shami", score: 69 },
    { name: "Axar Patel", score: 82 }
  ];

  // Filter players with score below 70
  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div style={styles.container}>
      <h2>List of Players</h2>

      <h3>All Players</h3>
      <ul style={styles.list}>
        {players.map((p, i) => (
          <li key={i}>
            {p.name} - {p.score}
          </li>
        ))}
      </ul>

      <h3>Players Scored Below 70</h3>
      <ul style={styles.list}>
        {lowScorers.map((p, i) => (
          <li key={i}>
            {p.name} - {p.score}
          </li>
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

export default ListofPlayers;
