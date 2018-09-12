import React, { Component } from "react";
import yeti from "./images/yeti.gif";

class Pet extends Component {
  render() {
    return (
      <div>
        <img src={yeti} alt="yeti" />
      </div>
    );
  }
}

export default Pet;
