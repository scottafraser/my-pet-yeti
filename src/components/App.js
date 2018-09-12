import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Pet from "./Pet";
import Menu from "./Menu";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Alive",
      feed: 100,
      play: 100,
      sleep: 100
    };
    this.handleFeed = this.handleFeed.bind(this);
  }

  componentDidMount() {
    this.petTimer = setInterval(() => this.updatePetTime(), 500);
  }

  updatePetTime() {
    this.handleStatus();
    this.setState({ feed: this.state.feed - 10 });
    this.setState({ play: this.state.play - 10 });
    this.setState({ sleep: this.state.sleep - 10 });
  }

  componentWillUnmount() {
    clearInterval(this.petTimer);
  }

  handleStatus() {
    if (
      this.state.feed === 0 ||
      this.state.play === 0 ||
      this.state.sleep === 0
    ) {
      this.setState({ status: (this.setState.status = "DEAD") });
      this.componentWillUnmount();
    }
  }

  handleFeed() {
      this.setState({ feed: this.state.feed + 10 });
  }

  render() {
    return (
      <div className="App">
        <Pet />
        <p>{this.state.status}</p>
        <p>{this.state.feed}</p>
        <p>{this.state.play}</p>
        <p>{this.state.sleep}</p>
        <PrimaryButton onClick={this.handleFeed} icon={<Icon src="add" />}>Feed</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Clean</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Sleep</PrimaryButton>
      </div>
    );
  }
}


Pet.propTypes = {
  status: PropTypes.string,
  feed: PropTypes.number,
  play: PropTypes.number,
  sleep: PropTypes.number
};


export default App;
