// import React, { Fragment } from "react";

function Searchbar(){
  return(
    // <React.Fragment> // way of doing this
    //   <Fragment key={}>
    // <div>
        <>
            <label>Search:</label>
            <input type="text" placeholder="search here" id="searchBar" />
      
            <button className="search-button">Search</button>
        </>
    // </div>
    // </React.Fragment>
    // </Fragment>
  )
}

export default Searchbar;


// why-->
// because react doesnt allow multiple element to be returned in from a component
//  we en up rendering extra html in the dom for wrapping multiple element
//  this going to hit performance and size in longer ruhence we use fragments
// default named export i use 

// Fragments
// used to wrap the elements without addding extra div in Dom