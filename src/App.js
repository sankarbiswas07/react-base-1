import React, { Component } from 'react';
import './App.css';
import Radium from "radium"
import Person from "./Person/Person"

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
      this.setState({persons})
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person=>{
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({persons})
  }

  render() {

    const style = {
      backgroundColor: "green",
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
            key={person.id}
            changed={(event)=>this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      )
      // change color
      style.backgroundColor = "red";
    }

    let classes = []
    if(this.state.persons.length <= 2){
      classes.push("red")
    }
    if(this.state.persons.length <= 1){
      classes.push("bold")
    }
    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <p className={classes.join(" ")}>This is working!!!</p>
        <button
          style={style}
          onClick={this.nameToggleHandler}
        >Switch Name</button>
        {person}
      </div>
    )
  }
}

export default Radium(App)
