import React, { Component } from "react";
import yeti from "./images/yeti.gif";
import feed from './images/Feed.gif'


class Pet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: yeti,
    };
  }
componentDidUpdate() {
  setTimeout(
    function () {
      console.log(this.props.status);
      ;
    }
      .bind(this),
    1000
  );
}
  render() {
    return (
     <div>
        <img src={this.props.status} alt="yeti" />
      </div>
    );
  }
}


export default Pet;
