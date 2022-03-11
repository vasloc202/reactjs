import React, { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  const [myStatus, setmyStatus] = useState(false);
  const [products, setProducts] = useState([{"id":1, "name": "Loc"},{"id":2, "name": "Loc2"}]);
  const removeItem = (id) => {
    const delProducts = products.filter(item => item.id !== id);
    setProducts(delProducts);
  }
  // const changeCount = () => {
  //   setCount(1);
  // }
  // const changeStatus = () => {
  //   setmyStatus(true);
  // }
  return <div>
    Number : { count } <br />
    <button onClick={() => { setCount(count+1) }}>Change number</button> <br />
    String :<div style={{background: color, width: 100, height: 100}}>Content</div> <br />
    Boolean : {myStatus ? "Da ket hon" : "Chua ket hon"}; <br />
    
    {myStatus && 
    <div>
      Arr: {products.map(item => <div>
        {item.name}
        <button onClick={() => { removeItem(item.id) }}>Delele</button>
      </div>)     
      } <br />
    </div>
    }
    
    
    <button onClick={() => {setmyStatus(!myStatus)}}>Change status</button>
  </div>   
}
export default App
