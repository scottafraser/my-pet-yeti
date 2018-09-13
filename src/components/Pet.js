import React, { Component } from "react";
import yeti from "./images/yeti.gif";
import feed from './images/Feed.gif'


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
  }
  this.timeout()
}

timeout() {
  if (this.state.image !== yeti){
    setTimeout(
      function () {
        this.setState({ image: yeti });
      }
        .bind(this),
      3000
    );
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
