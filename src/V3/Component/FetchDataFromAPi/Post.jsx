import React, {useEffect, useState} from "react";

export const Post = ()=>{
 // fetch the data on component load
// render the post from url

let [post, setPost] = useState([]);

useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((res)=>
        {
          console.log("res", res);
          return res.json();
        })
    .then((data)=>
    {
        setPost(data);
        console.log("posts", post)
    })
    .catch((err)=>{
        console.log(err);
    })
}, []);

   useEffect(()=>{
      window.addEventListener('scroll', ()=>{
         console.log('scrolling');
         if(document.documentElement.scrollTop > document.documentElement.scrollHeight*onabort*0.9){
          console.log('reached bottom');

         }
      })
   })
  // input data
    // step 1 --> create an input
    // step 2 --> onChange handler and save the data in state


    // fetch call to get result based on input
    // 
    // useEffect(() => {
    //     // fetch('https://apitogetdata')
        
    // }, [inputVal])



    // useEffect(() => {
    //     setValue()
        // infinite loop
    // })


    return(
      <div>
        <h3>Posts</h3>
        {
          post.map(({userId, title, body, id})=>{
            return(
              <section key={id} >
               <div>User id: {userId}</div>

               <div>Title: {title} </div>
               <div>Description: {body} </div>
               <br /><br />
              </section>
            )
          })

        }

      </div>
    )
}