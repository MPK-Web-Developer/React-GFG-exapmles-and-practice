import React, { Component } from "react";
// import "./styles.css";
// import AppView from "./Components/Debuncing";
// import UseEffect from "./Components/UseEffect";
// import Unicode from "./Components/Unicode";
// import FloatingNumber from "./Components/FloatingNumber";
// import Table from "./Components/GetCellValueOnReactTable";
import TextFieldComponent from "./Components/TextFieldComponents";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AppView /> */}
        {/* <UseEffect /> */}
        {/* <Unicode unicode="2192" /> */}
        {/* <FloatingNumber /> */}
        {/* <Table /> */}
        <TextFieldComponent />
      </div>
    );
  }
}

export default App;
