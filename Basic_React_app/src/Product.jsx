function Product({name, price  }) {
const isdiscount = price > 300 ;
const style ={ backgroundColor: isdiscount ? "pink" : ""}
  return (
      <div className="product" style={style} >
      <p>{name}</p>
      <p>{isdiscount ? <p>"discount is 10% "</p> : ""}</p>
      </div>
    );
}
export default Product;