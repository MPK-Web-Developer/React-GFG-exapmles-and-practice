import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldComponent = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ marginLeft: "40%" }}>
      <h2>TextField components in ReactJS</h2>
      <TextField
        value={name}
        label="Enter your name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <h3>Your enter value is: {name}</h3>
    </div>
  );
};
export default TextFieldComponent;
