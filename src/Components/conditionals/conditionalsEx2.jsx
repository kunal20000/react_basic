export const conditionalsEx2 = () => {
    const forgotPassword = false;
    let loginContent;
    if (forgotPassword) {
        loginContent = (
            <>
                <p>whos was your pet?</p>
                <select name="" id="">
                    <option value="">Doggy</option>
                    <option value="">cat</option>
                    <option value="">Lion</option>
                    <option value="">Tiger</option>
                    <option value="">horse</option>
                </select>
            </>
        )
    }else{
        loginContent = (
            <>
            <label htmlFor="password">password</label>
            <input type="password" id="password"></input>
            </>
        )
    }

    let value = 2;
    let valueEl1;

    if(value === 1){
        valueEl1 = <div>1</div>;
    }else if(value === 2){
        valueEl1 = <div>2</div>
    }else if(value == 3){
        valueEl1 = <div>3</div>
    }
  switch(value){
    case 1:
        valueEl1 = <div>1</div>;
        break;
    case 2:
        valueEl1 = <div>2</div>;
        break;
    case 3:
        valueEl1 = <div>3</div>;
        break;
        default:

  }

  return (
    <>
    <from action="">
     <label htmlFor="">Username</label>
     <input type="text" name="" id="username" />
     {loginContent}
    </from>
    <div>value: {valueEl1}</div>
    </>
    
  )

}