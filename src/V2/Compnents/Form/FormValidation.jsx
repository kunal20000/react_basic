import { useState } from "react";

export const getInfo = ()=>{
    const initialState = {
        firstName : "",
        lastName : "",
        email : ""

    }
    const [userInfo, setUserInfo] = useState(initialState);

    const [userList, setUserList] = useState([]);

    const saveInfo = (ev)=>{
        let convertedValue;
        if(name ==="email"){
            convertedValue = value.toLowerCase();
        }else{
            convertedValue = value.toUpperCase();
        }
    }

    return(
        <main>
             <form onSubmit={signUp}>
        <label htmlFor="firstName">first Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={userInfo.firstName}
          onChange={saveInfo}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={userInfo.lastName}
          onChange={saveInfo}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={userInfo.email}
          onChange={saveInfo}
        />
        <br />
        {/* <button onClick={signUp}>signUp</button> */}
        <input type="submit" value="signUp" />
      </form>
      <section>
           <ul> 
          
           </ul> 
      </section>
        </main>
      
    )
}