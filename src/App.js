import React, { Component } from 'react';
import './App.css';

import Person from "./Person/Person"

class App extends Component {
  state = {
    persons: [
      { name: "sankar", age: 28 },
      { name: "sam", age: 30 },
      { name: "indra", age: 24 },
    ],
    displayFlag: false
  }

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        { name: name, age: 28 },
        { name: "sam", age: 30 },
        { name: "indra", age: 24 },
      ]
    })
  }

  nameToggleHandler = () => {
    console.log("toggle")
    const flag = this.state.displayFlag
    this.setState({ displayFlag: !flag })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Sankar", age: 28 },
        { name: event.target.value, age: 30 },
        { name: "indra", age: 24 },
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let person = null
    if (this.state.displayFlag) {
      person = (
        <div>
          {this.state.persons.map(person=>{
            return <Person 
            name={person.name}
            age={person.age}
            />
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />

          <Person
            click={this.switchNameHandler.bind(this, "Sankar!!!")}
            changed={this.nameChangeHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}> Special One !!!</Person>

          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <button
          style={style}
          // onClick={() => this.switchNameHandler("Buro")}
          onClick={this.nameToggleHandler}
        >Switch Name</button>
        {person}
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
