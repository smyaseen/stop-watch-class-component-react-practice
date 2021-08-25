import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      interval: () => {
        return setInterval(() => {
          this.setState({ timer: this.state.timer + 1 });
        }, 1000);
      },
    };
  }

  startTimer = () => {
    if (typeof this.state.interval === "number") return;
    else if (typeof this.state.interval === "function")
      this.setState({ interval: this.state.interval() });
    else {
      this.setState({
        interval: setInterval(() => {
          this.setState({ timer: this.state.timer + 1 });
        }, 1000),
      });
    }
  };

  stopTimer = () => {
    if (typeof this.state.interval !== "function") {
      clearInterval(this.state.interval);
      this.setState({ interval: undefined });
    }
  };

  resetTimer = () => {
    this.setState({ timer: 0 });
  };

  render() {
    return (
      <div>
        <button onClick={this.startTimer}>Start</button>{" "}
        <button onClick={this.stopTimer}>Stop</button>{" "}
        <button onClick={this.resetTimer}>Reset</button>
        <h1>{this.state.timer}</h1>
      </div>
    );
  }
}

export default App;
