import React, { Component } from 'react';
import './App.css';

import Persons from "../components/Persons/Persons"
import Cockpit from "../components/Cockpit/Cockpit"

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "sankar", age: 28 },
      { id: "2", name: "sam", age: 30 },
      { id: "3", name: "indra", age: 24 },
    ],
    displayFlag: false
  }

  nameToggleHandler = () => {
    const flag = this.state.displayFlag
    this.setState({ displayFlag: !flag })
  }

  deleteNameHandler = (personIndex) => {
    // in JS object and array are reference type.
    // it refer to original copy which can lead to a bug and a bad practice too.
    // good: copy the elems before operation

    // const persons = this.state.persons.slice()

    const persons = [...this.state.persons]
    // const persons = this.state.persons
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  render() {

    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    }

    let person = null
    if (this.state.displayFlag) {
      person = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deleteNameHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      )
      // change color
      style.backgroundColor = "red";
    }

    return (
      <div className="App">
        <Cockpit 
        clicked={this.nameToggleHandler}
        persons= {this.state.persons}
        showPerson={this.state.displayFlag}/>
        {person}
      </div>
    )
  }
}

export default App
