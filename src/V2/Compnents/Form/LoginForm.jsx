export const LoginForm = ()=>{
    let userName ='';
    let password = '';

    const getUserName = (event)=>{
        // console.log(event.target.value);
        userName = event.target.value;
    }

    const getUserPasword = (event)=>{
          password = event.target.value;
    }

    const login = (ev)=>{
       ev.preventDefault();
       console.log('username is',userName);
       
    }
    return(
        <form>
         <label htmlFor="username">Username</label>
         <input type="text" name="username" id="username" onChange={getUserName} />
         <label htmlFor="password">Password</label>
         <input type="password" name="password" id="password" onChange={getUserPasword} />
         <button onClick={login}>Login</button>
        </form>
    )
}