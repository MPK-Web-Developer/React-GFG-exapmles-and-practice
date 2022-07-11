import React, { Component } from "react";
import { debounce } from "lodash";

class WidgetText extends Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} />
        <textarea value={this.state.text}></textarea>
      </div>
    );
  }
}

class AppView extends Component {
  state = { show: true };

  handleToggle = debounce(() => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }, 500);

  render() {
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.show ? <WidgetText /> : null}
      </div>
    );
  }
}

export default AppView;
