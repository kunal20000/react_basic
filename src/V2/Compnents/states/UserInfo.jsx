import { useState } from "react";


export const UserInfo = ()=> 
{
    // const[name, setName] = useState('kunal');
    // const [email, setEmail] = useState('kunalsapate2000');
    // const [batch, setBatch] = useState('Stark');
 // you cans set multiple state in one go
    const [user, setuser] = useState({
        name: "kunal",
        email: "kunalsapate2000",
        batch: 'stark'
    })

    
    const updatName = ()=>{
        //one way
        // setName("New name");
        // one way
        setuser({
            name: 'New name',
            email: 'kunalsapate2000',
            batch: 'stark'
        })
        // in react while updating state you should always pass new reference to the State
        // to see changes getting affected

        // wont work
        // console.log("user before", user);
        // user.name = 'New name';
        // console.log("after user", user);
        // setuser(user);

        // update the reference
        setuser({
            ...user, // he copy the all values
            // he update the value of name
            name: 'New name'

        })

    }
   const updateEmail = ()=>{
        // setuser({
        //     email: 'kunalsapate2000',
        //     name: 'kunal',
        //     batch: 'stark'
        // })

        setuser({
            ...user,
            email: 'kunal139@gmail.com'
        })
   }
   
   // you can set in object  format
   const[days, setDays] = useState(['mon', 'tue', 'wed']);

   const addClass = ()=>{
    console.log('days Before', days);
    // days.push('Thurs')
    console.log('days before', days);
    // as we pushing it array and updating it which will be the same reference
    setDays([...days,'Thurs'])
   }


   return(
    <section>
        <h3>User Info</h3>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Batch: {user.batch}</p>
        <p>Classes: {days.join(", ")}</p>
         <button onClick={updatName}>UpdateName</button>
         <br />
         <button onClick={updateEmail}>UpdateEmail </button>
         <br />
         <button onClick={addClass}>addClass</button>
    </section>
   )

}
 
/*
initially
user ---> {
        name: 'Abhinav',
        email: 'abhinav@mail',
        batch: 'Stark'
    }

after calling setUser({name: 'new Name'})
user --> {name: 'new Name'}
*/



// const obj = {
//     username: 'abhinav',
//     email: 'myemail',
//     username: 'new user',
//     email: "new email"
// }
// console.log('obj', obj);