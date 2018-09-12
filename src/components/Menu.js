import React, { Component } from "react";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";
import PropTypes from "prop-types";


class Pet extends Component {

  constructor(props) {
    super(props)
    this.state ={
      fed: false,
      played: false,
      slept: false
    }
  this.handleFeed = this.handleFeed.bind(this)
}

handleFeed() {
  let newFeed = this.props.feed + 10
  this.setState({ feed: newFeed });
}

  render() {
    return (
      <div>
        <PrimaryButton onClick={this.handleFeed}icon={<Icon src="add" />}>Feed</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Clean</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Sleep</PrimaryButton>
      </div>
    );
  }
}

export default Pet;
