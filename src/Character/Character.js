import React from "react";
import "./Character.css";

const character = props => {
  return (
    <div className="Character" onClick={props.click}>
      {props.character}
    </div>
  );
};

export default character;
