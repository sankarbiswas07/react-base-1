import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      {name: "sankar", age: 28},
      {name: "sam", age: 30},
      {name: "indra", age: 24},
    ]
  }

  switchNameHandler = (name) => {
    // console.log("Was Clicked !!!")
    // DON"T DO THIS WAY TO CHANGE
    // WON"T WORK
    // this.state.persons[0].name = "Sankar Prasad Biswas"
    // special method

    this.setState({
      persons: [
        {name: name, age: 28},
        {name: "sam", age: 30},
        {name: "indra", age: 24},
      ]
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <button onClick={() => this.switchNameHandler("Buro")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.switchNameHandler.bind(this, "Sankar!!!")} name={this.state.persons[1].name} age={this.state.persons[1].age}> children props passed !!!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
