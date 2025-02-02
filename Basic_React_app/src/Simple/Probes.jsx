import Product from './Product'
function Probes(){
    let sample = ["school","college","university"]
    let options1 = [<li>"copy1"</li>, <li>"copy2"</li>, <li>"copy3"</li>]
    return(
        <div>
         <Product name="Banana" price={200} />,
         <Product name="Apple" price={300} />,
         <Product name="Mango" price={400}  />
        </div>
        );
}

export default Probes;