import React, { useState } from "react";
import "./styles.css";

import UserInput from "./Components/UserInput";
import UserOutput from "./Components/UserOutput";

export default function App() {
  const [name, setName] = useState("Your name");

  const inputHandler = e => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Input your name</h1>
      <UserInput changed={inputHandler} init={name} />
      <UserOutput name={name} />
    </div>
  );
}
