"use client"
import React from 'react'
import "./style.css"
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Counter = () => {
    const [count, setCount] = useState(0);

    const addCount = (count, setCount)=>{
        let x = count + 1;
        setCount(x)
              
    }
    const subtractCount = (count, setCount)=>{
        let x = count - 1;  
        setCount(x)  
          
    }
    const resetCount = (count, setCount)=>{
        let x = 0;
        setCount(x)
    }
  
    return (
        
        <div className="counter-container">
        <div> This is a counter for a user to play with</div>
        <div className="counter-display">{count}</div>
        <div className="button-container">
          <button className="counter-button increment" onClick={()=>addCount(count, setCount)}>
            +
          </button>
          <button className="counter-button decrement" onClick={()=>subtractCount(count, setCount)}>
            -
          </button>
        </div><br/>
        <Button 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={()=>resetCount(count,setCount)}> reset</Button>
      </div>
    );
  };
  
  export default Counter;