import React, { useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";


export const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { setUser } = useAuth();

  const submitForm = (e) => {
    e.preventDefault();
    const credentials = {
      [usernameRef.current.name]: usernameRef.current.value,
      [passwordRef.current.name]: passwordRef.current.value,
    };
    // get list of users in localstorage --> getItem

    const userJson = localStorage.getItem("userList");
    const userList = JSON.parse(userJson);
    if (userList) {
      // find the user in the list of users --> array.find()
      const user = userList.find(
        (usr) => usr.username === credentials.username
      );
      if (user) {
        // match password
        if (user.password === credentials.password) {
            setUser(user);
          navigate("/home");
        } else {
          setError("wrong password");
        }
      } else {
        setError("Not a valid user");
      }
    } else {
      setError("something went wrong");
    }
    // if yes --> user is valid
    // match the password that user has entered and user created while signup
    // if yes- > move the user to home page
    // if no --> wrong password !! --> validation error
    // if no --> not a valid user --> validation error
  };

  return (
    <>
      <form className="login-form" onSubmit={submitForm}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" id="username" ref={usernameRef} />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>Dont't have an account? please signup first</div>
      <button onClick={()=>navigate('/signup')}>SignUp</button>
      {error && <div style={{color:"red"}}>{error}</div>}
    </>
  );
};
