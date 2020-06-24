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

  nameToggleHandler = () => {
    console.log("toggle")
    const flag = this.state.displayFlag
    this.setState({ displayFlag: !flag })
  }

  deleteNameHandler = (personIndex) => {
    // in JS object and array are reference type.
    // it refer to original copy which can lead to a bug and a bad practice too.
    // good: copy the elems before oparation

    // const persons = this.state.persons.slice()

    const persons = [...this.state.persons]
      // const persons = this.state.persons
      persons.splice(personIndex, 1)
      this.setState({persons})
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
          {this.state.persons.map((person,index)=>{
            return <Person 
            click={()=>this.deleteNameHandler(index)}
            name={person.name}
            age={person.age}
            />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <button
          style={style}
          onClick={this.nameToggleHandler}
        >Switch Name</button>
        {person}
      </div>
    )
  }
}

export default App;
