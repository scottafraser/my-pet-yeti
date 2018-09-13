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
    this.handlePlay = this.handlePlay.bind(this);
    this.handleSleep = this.handleSleep.bind(this);

  }

  componentDidMount() {
    this.petTimer = setInterval(() => this.updatePetTime(), 4000);
  }

  updatePetTime() {
    this.handleStatus();
    this.setState({ feed: this.state.feed - 20 });
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
      setTimeout(
        function () {
          this.setState({ fed: false });
        }
          .bind(this),
        1000
      );  
  }

  handlePlay() {
    this.setState({ play: this.state.play + 10 });
    this.setState({ played: true })
    setTimeout(
      function () {
        this.setState({ fed: false });
      }
        .bind(this),
      1000
    );  
  }

  handleSleep() {
    this.setState({ sleep: this.state.sleep + 10 });
    this.setState({ slept: true })
    setTimeout(
      function () {
        this.setState({ fed: false });
      }
        .bind(this),
      1000
    );  
  }

  render() {
    return <div className="App">
        <Pet fed={this.state.fed} played={this.state.played} slept={this.state.slept} />
        <p>{this.state.status}</p>
        <p>{this.state.feed}</p>
        <p>{this.state.play}</p>
        <p>{this.state.sleep}</p>
        <PrimaryButton onClick={this.handleFeed} icon={<Icon src="add" />}>
          Feed
        </PrimaryButton>
        <PrimaryButton onClick={this.handlePlay} icon={<Icon src="add" />}>
          Play
        </PrimaryButton>
        <PrimaryButton onClick={this.handleSleep} icon={<Icon src="add" />}>
          Sleep
        </PrimaryButton>
      </div>;
  }
}


Pet.propTypes = {
  fed: PropTypes.bool,
  played: PropTypes.bool,
  slept: PropTypes.bool,
};


export default App;
