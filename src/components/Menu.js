import React from "react";

function Menu(props) {

    return (
      <div>
        <p>{props.status}</p>
        <p>{props.feed}</p>
        <p>{props.play}</p>
        <p>{props.sleep}</p>
      </div>
    );
  }

export default Menu;
