import { useState } from 'react'
import ShowInfo from "./components/showInfo";
import { userInfo } from './type/user';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<userInfo>({
    name: "Loc",
    age: 22
  })

  return (
    <div className='App'>
      {count}
      <ShowInfo person={info}/>
    </div>
  )
}

export default App
