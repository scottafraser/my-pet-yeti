import React, { Component } from "react";
import yeti from "./images/yeti.gif";
import PropTypes from "prop-types";


class Pet extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     status: "Alive",
  //     feed: 100,
  //     play: 100,
  //     sleep: 100
  //   };
  // }


  // componentDidMount() {
  //   this.petTimer = setInterval(() =>
  //     this.updatePetTime(),
  //     500
  //   );
  // }

  // updatePetTime() {
  //   this.handleStatus()
  //   this.setState({ feed: this.state.feed - 10 });
  //   this.setState({ play: this.state.play - 10 });
  //   this.setState({ sleep: this.state.sleep - 10 });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.petTimer)
  // }

  // handleStatus() {
  //   if (
  //     this.state.feed === 0 ||
  //     this.state.feed === 0 ||
  //     this.state.feed === 0
  //   ) {
  //     this.setState({ status: (this.setState.status = "DEAD") });
  //     this.componentWillUnmount()
  //   }
  // }
  
  render() {
    return <div>
        <img src={yeti} alt="yeti" />
      </div>;
  }
}


// Pet.propTypes = {
//   status: PropTypes.string,
//   feed: PropTypes.number,
//   play: PropTypes.number,
//   sleep: PropTypes.number
// };


export default Pet;
