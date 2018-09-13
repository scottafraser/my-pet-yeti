import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Pet from "./Pet";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Alive",
      feed: 100,
      fed: false,
      play: 100,
      played: false,
      sleep: 100,
      slept: false
    };
    this.handleFeed = this.handleFeed.bind(this);
  }

  componentDidMount() {
    this.petTimer = setInterval(() => this.updatePetTime(), 1000);
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
      this.state.feed === 10 ||
      this.state.play === 10 ||
      this.state.sleep === 10
    ) {
      this.setState({ status: (this.setState.status = "DEAD") });
      this.componentWillUnmount();
    }
  }
 
  handleFeed() {
      this.setState({ feed: this.state.feed + 10 });
      this.setState({ fed: true })  
  }

  handlePlay() {
    this.setState({ feed: this.state.play + 10 });
    this.setState({ fed: true })
  }

  handleSleep() {
    this.setState({ feed: this.state.sleep + 10 });
    this.setState({ fed: true })
  }

  render() {
    return (
      <div className="App">
        <Pet fed={this.state.fed}/>
        <p>{this.state.status}</p>
        <p>{this.state.feed}</p>
        <p>{this.state.play}</p>
        <p>{this.state.sleep}</p>
        <PrimaryButton onClick={this.handleFeed} icon={<Icon src="add" />}>Feed</PrimaryButton>
        <PrimaryButton onClick={this.handlePlay} icon={<Icon src="add" />}>Play</PrimaryButton>
        <PrimaryButton onClick={this.handleSleep} icon={<Icon src="add" />}>Sleep</PrimaryButton>
      </div>
    );
  }
}


Pet.propTypes = {
  fed: PropTypes.bool,
  played: PropTypes.bool,
  slept: PropTypes.bool,
};


export default App;
