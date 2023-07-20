import { useState } from "react";

export const AsyncStateEx = ()=>{
    const[count, setCount] = useState(0);
    
    const add = () =>{
        console.log('before updating', count); //10
        setCount(count+1); // setTimeout//async call
        console.log("after updating", count); //10
    }

    console.log('rendering AsyncStateEx', count);//11
    return(
        <div>
            <p>Count: {count} </p>
            <button onClick={add}>Add</button>
        </div>
    )
}