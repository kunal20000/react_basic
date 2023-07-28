import { useState } from "react";

export const GetUSerInfo = () =>{

    const initialState = {
        firstName:"",
        lastName:"",
        email:""
    }
    
    const[userInfo, setUserInfo] = useState(initialState);
       
    
    const [userList, setUserList] = useState([]);

    const saveInfo = (ev)=>{
        const {name, value} = ev.target;
        let convertedValue;
        if(name === 'email'){
           convertedValue = value.toLowerCase();

        }else{
            convertedValue = value.toUpperCase();
        }

        //  convertedValue = name === 'email'? value.toLowerCase(): value.toUpperCase();
        userInfo[name] = convertedValue;
        setUserInfo = ({...userInfo});

    }


    const signUp = (event)=>{
       event.preventDefault();
       console.log(userInfo);
       setUserList([...userList, userInfo]);
       setUserInfo(initialState);
       // make a get call by default
       //we want to make a call by POST
       // pass a sec argument to fetch
       const url = "https://jsonplaceholder.typicode.com/users";
       //  required if you want to make call other than GET


       const options = {
         method : "POST",
         headers: {
            "content-type":"application/json",

         },
         body: JSON.stringify(userInfo)

      };

      fetch(url, options)
      .then((res)=>{
        return res.json();
      })
      .then((data)=>{
         console.log(data);
      })
      .catch((err)=>{
        console.log(err);
      })


    }
        return(
        <main>
        <form action="" onSubmit={signUp}>
        <label htmlFor="firstName">first name:</label>
        <input type="text" name="firstName" id="firstName" value={userInfo.firstName} onChange={saveInfo} /><br />
        <label htmlFor="lastName">last name:</label>
        <input type="text" name="lastName" id="lastName" value={userInfo.lastName} onChange={saveInfo}/><br />
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" id="email" value={userInfo.email} onChange={saveInfo} /><br />
        {/* <button type="submit">signUp</button> */}
        <input type="submit" value="signUp" />
        </form>
        <section>
            <ul>
                {userList.map(({firstName, lastName, email},i)=>{
                 return(
                    <li key={i}>
                        Name: {firstName}, lastName:{lastName},Email:{email}

                    </li>
                 )
                })}
            </ul>
        </section>
        </main>
    )
}