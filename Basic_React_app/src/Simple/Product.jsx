import './index.css';
import Price from './Price';
function Product({title, description,idx }) {
 let oldPrice = ['299', '3000','2000', '5000'];
 let newPrice = ['800', '6000', '2000', '500'];
 return (
      <div className="product" >
      <h1> <p>{title }</p></h1>
      <h4>{description}</h4>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    );
}
export default Product;

// const isdiscount = price > 300 ;
// const style ={ backgroundColor: isdiscount ? "pink" : ""}
{/* <p>{isdiscount ? <p>"discount is 10% "</p> : ""}</p> */}
