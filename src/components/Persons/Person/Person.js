import React, {Component} from "react"
import styled from 'styled-components'
// import "./Person.css";
const StyleDiv = styled.div`
                            width: 60%;
                            margin: 16px auto;
                            border: 1px solid #eeeeee;
                            box-shadow: 0 2px 3px #cccccc;
                            padding: 16px;
                            text-align: center;
                            
                            @media (min-width: 500px) {
                              width: 450px;
                              box-shadow: 0 2px 3px blue;
                            }
                          `

class Person extends Component{
  render(){
    console.log("Person.js > rendering...")
    return (
      <StyleDiv>
        <p onClick={this.props.click}>I'm a {this.props.name} and {this.props.age} years Old</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </StyleDiv>
    )
  }
}

export default Person