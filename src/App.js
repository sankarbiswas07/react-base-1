import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <Person name="Max" age="23"/>
        <Person name="Mani" age="24"> Few more(children props) </Person>
        <Person name="Maya" age="25"/>
      </div>
    );
    // return React.createElement(
    //   "div", {className:"App"},
    //   React.createElement(
    //     "h1",null,"Behind the above return JSX working like this, It's messy!!!"
    //   )
    // )
  }
}

export default App;
