import React, { Component } from "react";
import "./App.css";

import Character from "./Character/Character";

class App extends Component {
  state = {
    textValue: "",
    textChars: []
  };

  writeTextHandler = event => {
    this.setState({
      textValue: event.target.value,
      textChars: event.target.value.split("")
    });
  };

  removeCharHandler = index => {
    const textChars = [...this.state.textChars];
    textChars.splice(index, 1);
    this.setState({
      textValue: textChars.join(""),
      textChars: textChars
    });
  };

  render() {
    return (
      <div className="App">
        <label htmlFor="writeText">
          {process.env.REACT_APP_LABEL
            ? process.env.REACT_APP_LABEL
            : "REACT_APP_LABEL not set"}
        </label>
        <input
          type="text"
          onChange={this.writeTextHandler}
          value={this.state.textValue}
        />
        <div className="Characters">
          {this.state.textChars.map((char, index) => {
            return (
              <Character
                character={char}
                key={index}
                click={() => this.removeCharHandler(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
