import React, { Component } from "react";
import CurrencyConverter from "./CurrencyConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  // Increment handler invoking multiple methods
  handleIncrement = () => {
    this.incrementCounter();
    this.sayHello();
  };

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  sayHello = () => {
    alert("Hello! Counter incremented.");
  };

  // Decrement handler
  handleDecrement = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };

  // Function with argument
  sayWelcome = (message) => {
    alert(message);
  };

  // Synthetic Event Handler
  handleSyntheticEvent = (event) => {
    event.preventDefault(); // Demonstrating synthetic event
    alert("I was clicked");
  };

  render() {
    return (
      <div style={styles.container}>
        <h1>React Event Examples</h1>

        {/* Counter Section */}
        <h2>Counter Value: {this.state.counter}</h2>
        <button style={styles.button} onClick={this.handleIncrement}>
          Increment
        </button>
        <button style={styles.button} onClick={this.handleDecrement}>
          Decrement
        </button>

        {/* Welcome Button */}
        <button
          style={styles.button}
          onClick={() => this.sayWelcome("Welcome to React Events!")}
        >
          Say Welcome
        </button>

        {/* Synthetic Event Button */}
        <button style={styles.button} onClick={this.handleSyntheticEvent}>
          Synthetic Event
        </button>

        {/* Currency Converter Component */}
        <CurrencyConverter />
      </div>
    );
  }
}

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial",
    marginTop: "20px",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default App;
