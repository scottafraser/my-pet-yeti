import React, { Component } from "react";
import PropTypes from "prop-types";
import "./App.css";
import Pet from "./Pet";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";
import yeti from "./images/yeti.gif";
import feed from "./images/Feed.gif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: yeti,
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
      this.setState({ image: feed })
      setTimeout(function () {
        this.setState({ fed: yeti})
      }
      .bind(this),
       1000);
      
      console.log(this.state.fed);
      
  }

  render() {
    return (
      <div className="App">
        <Pet status={this.state.image}/>
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
  fed: PropTypes.bool,
  image: PropTypes.string,
};


export default App;
