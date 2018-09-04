import React from "react";

const UserInput = props => {
  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid green",
    margin: "15px auto",
    padding: '16px'
  };
  return (
    <input
      type="text"
      onChange={props.changed}
      value={props.name}
      style={style}
    />
  );
};

export default UserInput;
