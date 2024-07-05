import React, {useState} from 'react';

export default function TextForm(props){
 const [text, setText] = useState("initial text");
 
  const handleClick= ()=>{
    console.log("button was clicked");
    let ntext= text.toUpperCase();
    setText(ntext);
  }
   const handleOnChange=(event)=>{
    console.log("on change was clicked");
    setText(event.target.value);
   }
  return(
  <div>
    <h1>{props.heading}</h1>
    <div className="container">
    <textarea className="text" onChange={handleOnChange} id="one" rows='4' cols="50" value={text}></textarea><br />
    <button className="button" onClick={handleClick} >convert to upper case </button>
    </div>
    </div>
  )
}