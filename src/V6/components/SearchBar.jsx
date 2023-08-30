import React, { forwardRef, useEffect, useRef, useState } from "react";
// forward ref who access ref in child component

export const SearchBar = forwardRef(({searchValue}, myRef) => {

    //const [search, setSearch] = useState('');
  const inputRef = useRef(null);
  const buttonRef = useState(null);

  const printSearch = () => {
    // logic to access input field and read the value
    // const inputEl = document.getElementById("search");
    // console.log(inputEl.value);
    console.log('inputRf', inputRef);
    console.log('value', inputRef.current.focus);

  };

  useEffect(()=>{
    inputRef.current.focus();
  })
  return (
    <section style={{ border: "1px solid #3d3d3d", padding: "1rem" }}>
      <input
        type="text"
        name=""
        id="search"
        placeholder="search product"
        ref={inputRef}
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
      <button ref={buttonRef} onClick={printSearch}>
        search
      </button>
      <br />
      <br />
      <input
        type="text"
        name=""
        id="search Parent"
        placeholder="search items in parent"
        // value={search}
        onChange={(e) => searchValue(e.target.value)}
        ref={myRef}
      />
      <button ref={buttonRef} onClick={printSearch}>
        pass to parent
      </button>
    </section>
  );
});
