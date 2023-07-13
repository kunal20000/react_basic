

export function shoe({
   brand,
   productName,
   InStock,
   price,
   size, 
   seller: {name , rating},
})
  // {
  //   console.log("value of props is ", props);
  //   console.log(props.sizes.join(", "));

  //   const {
  //     brand,
  //     productName,
  //     inStock,
  //     price,
  //     sizes,
  //     seller: { name, rating },
  //   } = props;
    return(
        <section style={{}}>
          <div>Brand: {brand}</div>
          <div>Product: {productName}</div>
          <div>InStock: {InStock ? "Availble":"Out of stock"}</div>
          <div>Price:{price}</div>
          <div>
            size:
            {sizes.map((size,i)=>{
                return(
                    <span key={i}>{size}</span>
                )

            })}
          </div>
          <Seller name={name} rating={rating}/>
        </section>
    )


// Props --> props are nothing but argument/parameter passed to the function
//