import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Pet from "./Pet";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";
import Dead from './Dead';
import Menu from './Menu';
import Timer from './Timer'


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
    this.petTimer = setInterval(() => this.updatePetTime(), 2000);
  }

  updatePetTime() {
    this.handleStatus();
    this.setState({ feed: this.state.feed - 10 });
    this.setState({ play: this.state.play - 7 });
    this.setState({ sleep: this.state.sleep - 8 });
  }

  componentWillUnmount() {
    clearInterval(this.petTimer);
  }

  handleStatus() {
    if (
      this.state.feed <= 10 ||
      this.state.play <= 7 ||
      this.state.sleep <= 8
    ) {
      this.setState({ status: (this.setState.status = "DEAD") });
      this.componentWillUnmount();
    }
  }
 
  handleFeed() {
      this.setState({ feed: this.state.feed + 10 });
      this.setState({ fed: true })
      setTimeout(() => this.setState({ fed: false }), 4000);    
  }

  handlePlay() {
    this.setState({ play: this.state.play + 10 });
    this.setState({ played: true })
    setTimeout(() => this.setState({ played: false }), 4000);  
  }

  handleSleep() {
    this.setState({ sleep: this.state.sleep + 10 });
    this.setState({ slept: true })
    setTimeout(() => this.setState({ slept: false }), 4000); 
  }

  render() {
    const status = this.state.status
    let pet;

    if (status === "Alive" ) {
      pet = <Pet fed={this.state.fed} played={this.state.played} slept={this.state.slept} />
    } else {
      pet = <Dead />
    }

    return <div className="App">
        <Timer status={this.state.status}/>
        {pet}
        <Menu feed={this.state.feed} play={this.state.play} sleep={this.state.sleep} />
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
  status: PropTypes.string,
  feed: PropTypes.string,
  play: PropTypes.string,
  sleep: PropTypes.string

};


export default App;
