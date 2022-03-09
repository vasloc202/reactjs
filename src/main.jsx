import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ShowAge from './components/age';

const person = {
  name: "Loc",
  age: 19,
  child:[
    {id:"1", name:"Tung", age:10},
    {id:"12", name:"Tung2", age:11}
  ]
}
const showAge = (age) => <h2>Tuoi cua ban la: {age}</h2>
  ReactDOM.render(
  <div>
    <p>Name: {person.name} </p>
    <p>Age: {person.age}</p>
    <ul>
      {person.child.map(c => <li>
          {c.age}
      </li>)}
    </ul>
   
   function: {
     showAge(person.age)
   },
   Components: {
     <ShowAge age={person.age}/>
   }
  </div>
  
  ,document.getElementById('root')
)
