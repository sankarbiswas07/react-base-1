import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person"

const app = props => {
  const [personsState, setPersonsState] = useState({
      persons: [
        {name: "sankar", age: 28},
        {name: "sam", age: 30},
        {name: "indra", age: 24},
      ],
      other: "This value will missing if you can not adjust by hooks"
    }) 
    // it return always 2 element, current elem & 2nd one is function to update  the current state so re-render the function
    // remember, it will replace the object not merge, so old data can be lost
    console.log(personsState)
    // just comment out the following block  | start -end & see console to check the behaviour
    // handling "other" by hooks again -start
        const [otherState, setOtherState] = useState({other: "this can be anything to maintain separate state"})
        console.log(personsState, otherState)
    // handling "other" by hooks again -end

    const switchNameHandler = () => {
      // console.log("Was Clicked !!!")
      // DON"T DO THIS WAY TO CHANGE
      // WON"T WORK
      // this.state.persons[0].name = "Sankar Prasad Biswas"
      // special method
    
      setPersonsState({
        persons: [
          {name: "sankar Prasad Biswas", age: 28},
          {name: "sam", age: 30},
          {name: "indra", age: 24},
        ]
      })
    }

    return (
      <div className="App">
        <h1>Hi, I'm React-app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> children props passed !!!</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    // return React.createElement(
    //   "div", {className:"App"},
    //   React.createElement(
    //     "h1",null,"Behind the above return JSX working like this, It's messy!!!"
    //   )
    // )
}

export default app
