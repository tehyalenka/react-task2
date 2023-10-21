import React, { Component } from "react";
import "./styles.css";

class Calculator extends Component {
  state = { history: "", exp: "" };

  add = (event) => {
    this.setState((prevState) => ({ exp: prevState.exp + event.target.id }));
  };

  calc = () => {
    try {
      const temp = eval(this.state.exp);
      this.setState((prevState) => ({
        exp: String(temp),
        history: prevState.history + "\n" + prevState.exp,
      }));
    } catch (err) {
      this.setState({ exp: "error" });
    }
  };

  clear = () => {
    this.setState({ exp: "" });
  };

  render() {
    const { history, exp } = this.state;

    return (
      <div className="container">
        <div className="screen">
          <div className="camera" />
          <p className="history">{history}</p>
          <h1>{exp}</h1>
        </div>
        <div className="keys">
          <div className="left">
            {[7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."].map((num) => (
              <div key={num} className="key" id={num} onClick={this.add}>
                {num}
              </div>
            ))}
            <div className="key" id="calc" onClick={this.calc}>
              =
            </div>
          </div>
          <div className="right">
            <div className="key" id="back" onClick={this.clear}>
              <i className="fas fa-backspace" style={{ color: "#ffffff" }}></i>
            </div>
            {["/", "*", "-", "+"].map((operator, index) => (
              <div key={index} className="key" id={operator} onClick={this.add}>
                {operator === "*" ? "x" : operator}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
