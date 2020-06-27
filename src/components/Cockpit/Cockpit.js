import React, {useEffect} from "react"
import classes from "./Cockpit.css"

const Cockpit = (props) => {

  // combines componentDidMount and componentDidUpdate
  // problem. every time calling API. which is not right
  useEffect(()=>{
    console.log("Cockpit.js > useEffect")
    setTimeout(()=>{
        alert("Some API call to save user list")
    },1000)
  })

    let assignedClasses = []
    let btnClass = ""
    if(props.showPerson){
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm React-app</h1>
            <p className={assignedClasses.join(" ")}>This is working!!!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Switch Name</button>
        </div>
    )
}
export default Cockpit