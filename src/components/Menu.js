import React from "react";

function Menu(props) {

    return <div>
        <h1>Hunger: {props.feed}</h1>
        <h1>Play: {props.play}</h1>
        <h1>Tired: {props.sleep}</h1>
        <br></br>
      </div>;
  }

export default Menu;
