import React from 'react';
import  { useState, useRef} from 'react';
import { Modal } from './Modal';
import { SearchBar } from './SearchBar';

export const Navbar = () => {


  const childRef = useRef(null);
  const searchValue =(value)=>{
    console.log('value', value);
  }

  return (
    <nav  style={{ display: "flex", justifyContent: "space-between" }} >
        <button>Home</button>
        <SearchBar searchValue={searchValue} ref={childRef}/>
        <button>Login</button>
    </nav>
  );
}


