export const userstatus = () => {
    const loggedInstate = true;
    const grocerySeleced = true;


    if (!loggedInstate) {
        // early returns

        return (
            <div>
                Please Login First
            </div>
        )
    }
    if (grocerySeleced) {
        return (
            <div>
                <h2>Rs 1 Deals</h2>
                <p>Namkeen</p>
                <p>packeged food</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Shopping site</h2>
            <p>Mobile</p>
            <p>electronics</p>
            <p>slider</p>
            <p>book a flight</p>
        </div>
    )
}


// function Multiplication(a,b){
//     // if(loginStatus){
//     //     console.log('user logged in');
//     // } else{
//     //     console.log('please login first');
//     // }
//     // return 'done with evaluation'
//     if(!a){
//         console.log('please pass parameters');
//     }
//     return a*b
// }

// console.log(Multiplication(12,34)); //200 - 100
// console.log(Multiplication()); //