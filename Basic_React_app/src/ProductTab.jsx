import './index.css';
import Product from "./Product";
export default function ProductTab(){
    return(
        <div className="productTab">
          <Product title="Durgesh" description="This is good quality" idx="0"  />
          <Product title="Ankit" description="So quite and kind girl" idx="1" />
          <Product title="Nitesh" description="Now it is good in skill" idx="2" />
        </div>
    );
}