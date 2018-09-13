import React, { Component } from "react";
import yeti from "./images/yeti.gif";
import feed from './images/Feed.gif';
import play from './images/play.gif';
import sleep from './images/sleep.gif';



class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: yeti
    };
  }

componentDidUpdate(prevProps) {
  if(this.props.fed !== prevProps.fed) {
    this.setState({ image: feed })
  } else if (this.props.played !== prevProps.played) {
    this.setState({ image: play })
  } else if (this.props.slept !== prevProps.slept) {
    this.setState({ image: sleep })
  } 
  this.timeout()
}

timeout() {
  if (this.state.image !== yeti){
    setTimeout(() => this.setState({ image: yeti }), 4000);
  }
}

  render() {
    return (
     <div>
        <img src={this.state.image} alt="yeti" />
      </div>
    );
  }
}


export default Pet;
