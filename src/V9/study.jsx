import { useState } from "react"




function kunal(){
    const [count, setCount] = useState(0);

    return(
        <>
        <p>You clicked count {count} </p>
        <button onClick={()=>setCount(count+1)}>Counter</button>
        </>
    )
}