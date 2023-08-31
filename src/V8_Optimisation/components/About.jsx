import React,{useRef, useState} from 'react';

export const About = ({contact}) => {
    console.log("rendering About");
const messageRef = useRef(null);
const handleClick = ()=>{
    const {value} = messageRef.current
    contact(value);
}
  return (
 <section  style={{ border: "1px solid #ddd", padding: "1rem" }}>
    <h3>About</h3>
    <label htmlFor="message">Message:</label><br />
    <input type="text"  id="message" ref={messageRef}  />
    <button onClick={handleClick}>Contact</button>

 </section>
  );
}

// const a = () => {
//     return 10
// };
// const b = () => {
//     return 10
// };

// const a = {x: 10}
// const b = {x: 10}

// console.log(a===b);