import React, { Component } from "react";
import "./App.css";
import Pet from "./Pet";
import Menu from "./Menu";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Alive",
      feed: 100,
      play: 100,
      sleep: 100
    };
    this._time();
  }

  _time() {
    this.runAway();
    this.setState({ feed: this.state.feed - 10 });
    this.setState({ play: this.state.play - 10 });
    this.setState({ sleep: this.state.sleep - 10 });
    setTimeout(this._time.bind(this), 500);
  }

  runAway() {
    if (
      this.state.feed === 0 ||
      this.state.feed === 0 ||
      this.state.feed === 0
    ) {
      this.setState({ status: (this.state.status = "DEAD") });
    }
  }

  cancelTime() {
    if (this.state.status == "DEAD") {
      clearTimeout(this._time());
    }
  }

  render() {
    return (
      <div className="App">
        <Pet />
        <p>{this.state.status}</p>
        <p>{this.state.feed}</p>
        <p>{this.state.feed}</p>
        <p>{this.state.feed}</p>
        <Menu />
      </div>
    );
  }
}

export default App;
