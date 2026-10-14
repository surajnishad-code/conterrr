import React, { useState } from 'react'
import '../App.css'
import Button from './Button';

const Counter = () => {
    const [count, setCount] = useState(0);
    // let mess = () => {
    //     if(count === 10){
    //     alert("Count hit 10...")
    // }
    // }

    // let nega = () =>{
    //     if(count < 0){
    //         setCount(0);
    //         alert("Can't go below zero...")
    //     }
    // }

    let addbtn = () =>{
        setCount(count+1)
        if(count === 10){
             alert("Count hit 10...")
    }
    }

    let subbtn = () =>{
        setCount(count - 1)
        if(count < 0){
            alert("Can't go below zero...")
            setCount(0);
        }
    }
  return (
    <div className='count'>
         <h1>Counter APP</h1>
         <h1>{count}</h1>
        <Button label="[+]" onclick={addbtn} />
        <Button label="[-]" onclick={subbtn} />
    </div>
  )
}

export default Counter