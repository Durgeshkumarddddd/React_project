import Price from './Price';
function Product({title, description, oldPrice, newPrice}) {
// const isdiscount = price > 300 ;
// const style ={ backgroundColor: isdiscount ? "pink" : ""}
  return (
      <div className="product" >
      <h1> <p>{title }</p></h1>
      <h4>{description}</h4>
      < Price />

      </div>
    );

}
export default Product;

      {/* <p>{isdiscount ? <p>"discount is 10% "</p> : ""}</p> */}
