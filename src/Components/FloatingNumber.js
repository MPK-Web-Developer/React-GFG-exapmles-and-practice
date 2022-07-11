import React from "react";

class FloatingNumber extends React.Component {
  // step 1 / first assign the porperties of value
  state = {
    value: 5
  };

  // step 2 / create change value of arrow function with parameter
  onChange = (event) => {
    this.setState({
      // step 3 / target the (state to setState value)
      value: event.target.value
    });
  };

  render() {
    return (
      // step 4 / HTML tags
      <div>
        <td>
          <label>Increas Floating number step by step</label>
          <input
            type="number"
            step="0.1"
            min="0"
            max="20"
            // step 5 / set initialize value
            value={this.state.value}
            // step 8 / onChange and call the function
            onChange={(event) => this.onChange(event)}
          />
        </td>
      </div>
    );
  }
}

export default FloatingNumber;
