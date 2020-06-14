import React from "react";

const UserInput = ({ changed, init }) => {
  const inputStyle = {
    backgroundColor: "#f7f7ee",
    height: "30px",
    width: "60%"
  };
  return (
    <input type="text" style={inputStyle} onChange={changed} value={init} />
  );
};

export default UserInput;
