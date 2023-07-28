
import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import { logo } from './component/Logo';
import { PersonList } from "./components/PersonList";
import Person from './Components/ClassComponentEx/Person';
import {Footer} from './Components/component/Footer';
import { Header } from './Components/component/Header';

function App(){
   const warning = true;
   // let bgClass = '';

   // if(warning){
   //   bgClass = 'warning'
   // }else{
   //   bgClass = 'dark'
   // }
  return(
    <div className={`App ${ warning ? 'warning' : 'dark'}`}>
    
     <Searchbar />
     <PersonList />
     <logo />
     <Person />
     <Footer />
     <Header />
   </div>
  
   
  )
}


