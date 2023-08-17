import React from "react";

import { Child } from "./Child";

export const Parent = ()=>{
    const name = 'kunal';
const getEmail = (email)=>{
    console.log("email", email);

}
return(
    <>
    <div>Parent </div>
    <Child name={name} readEmail={getEmail}/>
    </>
)
}