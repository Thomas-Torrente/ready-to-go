import React from "react";

const Button = (props) => {
  return (
    <div
      onClick={() => {
        props.setState(!props.state);
      }}
    >
      <div className={props.state === true ? "btnOn" : "btnOff"}>ON</div>
      <div className={props.state === false ? "btnOn" : "btnOff"}>OFF</div>
    </div>
  );
};

export default Button;
