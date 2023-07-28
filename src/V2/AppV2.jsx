import  {Header}  from "./Compnents/composition/Header";
import "./AppV2.css";

// import { Footer } from "./Compnents/helpAndFeedback/Footer";
// import { Feedback } from "./Compnents/helpAndFeedback/Feedback";

import { Name } from "./Compnents/states/Name";
import { UserInfo } from "./Compnents/states/UserInfo";
import { Counter } from "./Compnents/states/Counter";
import { PrevState } from "./Compnents/states/PrevState";
import { AsyncStateEx } from "./Compnents/states/AsyncState";
import { LoginForm } from "./Compnents/Form/LoginForm";
import { SignUp } from "./Compnents/Form/SignUp";
import { GetUSerInfo } from "./Compnents/Form/GetUserInfo";

export const App = () => {
  return (
    <main>
      <Header theme={"dark"} device={"mobile"}logoDesign={'square'}>
        <div>
          <label htmlFor="searchBar"></label>
          <input type="text" id="searchBar" placeholder="search here" />
          <button>search</button>
        </div>
      </Header>

      <Header  device={"mobile"} logoDesign={"circular"}/> 
      {/* <Footer/>
      <Feedback/> */}
      <br />

      {/* <Header theme={"dark"}  >
        <ul>
          <li>
            <a href="#home">Home</a>{" "}
          </li>
          <li>
            <a href="#home">cart</a>
          </li>
          <li>
            <a href="#home">Login</a>
          </li>
        </ul>
      </Header> */}

      <Name/>
      <UserInfo/>
      <Counter/>
      <PrevState/>
      <AsyncStateEx/>

      {/* forms */}

      <LoginForm/>
      <SignUp/>
      
      <GetUSerInfo/>
    </main>
  );
};