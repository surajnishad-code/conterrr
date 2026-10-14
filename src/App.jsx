import React, { useState } from 'react'
import Counter from './components/Counter'
import './App.css'
import Button from './components/Button'

const App = () => {

  const [togle, setToggle] = useState(false)

  let dark = () =>{
    setToggle(!togle)
  }
  return (
    <div className={togle ? 'black' : 'app'}>
      <Counter />
      <Button className="btn" label="Toggle" onclick={dark}/>
    </div>
  )
}

export default App