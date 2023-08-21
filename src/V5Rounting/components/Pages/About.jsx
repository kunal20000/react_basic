import React from 'react'
import {useSearchParams} from 'react-router-dom';



export const About = ()=>{
  

  return(
    <section>

     <h2>Product</h2>
      <div>1</div>
      <div>2</div>
      <div>3</div>

      <label htmlFor="colors">Select Colors:</label>
      <select name='colors' id='colors' onChange={getParams} >
       <option value="black" disabled defaultValue selected>Select One</option>

       <option value="black">black</option>
       <option value="green">green</option>
       <option value="white">white</option>
       </select>
      <br />
      <br />

       <label htmlFor="fabric">Select Max Price:</label>
       <select name="fabric" id="fabric" onChange={setParams}>
        <option value="black" disabled defaultValue selected>Select One</option>
        <option value="1000">1000</option>
        <option value="2000">2000</option>
        <option value="5000">5000</option>
       </select>
       <br />

     <button onClick={getFilters}>Get Fliter</button>
    </section>
  )
}