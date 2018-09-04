import React from "react";
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>This is paragraph 1. Edited by {props.username}</p>
      <p>This is paragraph 2</p>
    </div>
  );
};

export default UserOutput;
