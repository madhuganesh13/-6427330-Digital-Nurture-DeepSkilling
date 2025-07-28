import React, { Component } from "react";

class CountPeople extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      entryCount: 0,
      exitCount: 0
    };
  }

  // Method to update entry count
  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1
    }));
  };

  // Method to update exit count
  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Mall Entry & Exit Counter</h2>
        <p>People Entered: {this.state.entryCount}</p>
        <p>People Exited: {this.state.exitCount}</p>
        <button style={styles.button} onClick={this.updateEntry}>Login</button>
        <button style={styles.button} onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}

// Simple styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default CountPeople;
