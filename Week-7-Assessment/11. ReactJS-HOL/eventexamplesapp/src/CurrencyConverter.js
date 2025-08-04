import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: "",
      rate: 0.011, // Example: 1 INR = 0.011 Euro (adjust as needed)
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const euroValue = (this.state.rupees * this.state.rate).toFixed(2);
    this.setState({ euro: euroValue });
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>Currency Converter (INR to EURO)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            placeholder="Enter amount in INR"
            value={this.state.rupees}
            onChange={this.handleChange}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Convert
          </button>
        </form>
        {this.state.euro && <p>Euro: €{this.state.euro}</p>}
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: "30px",
    textAlign: "center",
  },
  input: {
    padding: "8px",
    marginRight: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "8px 15px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default CurrencyConverter;
