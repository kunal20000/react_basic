import React,{useState} from 'react';
import { Product } from './Product';

 const Home = (props) => {
    console.log("props", props);
    const[login, setLogin] = useState(false);

    console.log("rendering Home");
  return (
   <>
   <section>
    <h3>Home--{props.username}</h3>
    <p>{login ? "Welcom":"Please Login"}</p>
    <button onClick={()=>setLogin(!login)}>{login ? "logout": "login"}</button>
   </section>
   <Product/>
   </>
  );
}

export default Home;
// export default Home;

// memo restricts the unesessary re render
// comparing the props passed previously and currently
// if there is no change then it will not rerender the comp


// function Home(){
//     return 'Home'
// }


// Home();
// Home();