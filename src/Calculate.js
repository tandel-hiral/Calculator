import React, { useState } from 'react'
import './Calculate.css';

function Calculate() {

    const [data, setData] = useState("");

    const handleOnclick =(event) =>{
        console.log(event.target.value);
        setData(data.concat(event.target.value))
    }
    const calculation = () =>{
        setData(eval(data).toString())
    }
    const back = () =>{
        setData(data.slice(0,-1))
    }
    const clear = () =>{
        setData("")
    }

    return (
        <>
           <div className='container'>
               <div>
                   <input placeholder='0' value={data}/>
               </div>
               <br/>
                <div className="row">
                <button className="btn operator" onClick={clear}  >AC</button>
                <button className="btn operator" onClick={back}  >DEL</button>
               <button className="btn operator" onClick={handleOnclick} value="%">%</button>
               <button className="btn operator" onClick={handleOnclick} value="/">/</button>
              
               </div>
   
               <div className="row">
               <button className="btn" onClick={handleOnclick} value="7">7</button>
               <button className="btn" onClick={handleOnclick} value="8">8</button>
               <button className="btn" onClick={handleOnclick} value="9">9</button>
               <button className="btn operator" onClick={handleOnclick} value="*">*</button>
               </div>
   
               <div className="row">
               <button className="btn" onClick={handleOnclick} value="4">4</button>
               <button className="btn" onClick={handleOnclick} value="5">5</button>
               <button className="btn" onClick={handleOnclick} value="6">6</button>
               <button className="btn operator" onClick={handleOnclick} value="-">-</button>
               </div>
                
               <div className="row">
               <button className="btn" onClick={handleOnclick} value="1">1</button>
               <button className="btn" onClick={handleOnclick} value="2">2</button>
               <button className="btn" onClick={handleOnclick} value="3">3</button>
               <button className="btn operator" onClick={handleOnclick} value="+">+</button>
               </div>
                
               <div className="row">
               <button className="btn" onClick={handleOnclick} value="0">0</button>
               <button className="btn" onClick={handleOnclick} value="00">00</button>
               <button className="btn" onClick={handleOnclick} value=".">.</button>
               
               <button className="btn operator equalBtn" onClick={calculation}  >=</button>
              
               </div>
   
           </div>
        </>
      )
//   return (
//     <div className='container'>
//           <input className="input" type="text" placeholder="0"/>
       
//        <div className="row">
//            <button className="btn operator" onClick={handleOnclick}>AC</button>
//            <button className="btn operator"  onClick={handleOnclick}>DEL</button>
//            <button className="btn operator"  onClick={handleOnclick}>%</button>
//            <button className="btn operator"  onClick={handleOnclick}>/</button>
//        </div>
//        <div className="row">
//            <button className="btn"  onClick={handleOnclick}>7</button>
//            <button className="btn"  onClick={handleOnclick}>8</button>
//            <button className="btn"  onClick={handleOnclick}>9</button>
//            <button className="btn operator"  onClick={handleOnclick}>*</button>
//        </div>
//        <div className="row">
//            <button className="btn"  onClick={handleOnclick}>4</button>
//            <button className="btn"  onClick={handleOnclick}>5</button>
//            <button className="btn"  onClick={handleOnclick}>6</button>
//            <button className="btn operator"  onClick={handleOnclick}>-</button>
//        </div>
//        <div className="row">
//            <button className="btn"  onClick={handleOnclick}>1</button>
//            <button className="btn"  onClick={handleOnclick}>2</button>
//            <button className="btn"  onClick={handleOnclick}>3</button>
//            <button className="btn operator"  onClick={handleOnclick}>+</button>
//        </div>
//        <div className="row">
//            <button className="btn"  onClick={handleOnclick}>00</button>
//            <button className="btn"  onClick={handleOnclick}>0</button>
//            <button className="btn"  onClick={handleOnclick}>.</button>
//            <button className="btn equalBtn"  onClick={handleOnclick}>=</button>
//        </div>
//     </div>
//   )
}

export default Calculate