import React, { Component } from "react";
import { PrimaryButton } from "pivotal-ui/react/buttons";
import { Icon } from "pivotal-ui/react/iconography";

class Pet extends Component {
  render() {
    return (
      <div>
        <PrimaryButton icon={<Icon src="add" />}>Feed</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Clean</PrimaryButton>
        <PrimaryButton icon={<Icon src="add" />}>Sleep</PrimaryButton>
      </div>
    );
  }
}

export default Pet;
