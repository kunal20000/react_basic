import React, { useState } from "react";
import Home from "./components/Home";
import { About } from "./components/About";
import StateBatching from "./components/StateBatching";


export const App = () => {

    const [counter, setCounter] = useState(0);
    const [username, setUsername] = useState("default");
    console.log("rendering App");

     //   useCallback and useMemo

     const contactUs = (message)=>{
         console.log(message);
     }
return (
    <>
      <section>
        <h2>App</h2>
        <p>count: {counter}</p>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <button onClick={()=>setUsername("New User")}>Update Username</button>
      </section>
      <br />
      <main style={{display:"flex", gap:"2rem"}}>
       <Home username={username}/>
       <About contact={contactUs}/>
      </main>
    </>
  );
};
// state update causing re render
// parent re rendering is always re rendering the child