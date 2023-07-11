
import React from 'react';
import './App.css';
import Searchbar from './component/SearchBar';
import { logo } from './component/Logo';
import { PersonList } from './component/PersonList';

function App(){
  return(

    
   <div className='App'>
     
     <Searchbar/>
     <PersonList/>
     <logo/>
     
   </div>
  
   
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
