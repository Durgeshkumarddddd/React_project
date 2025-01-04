export default function Price({oldPrice, newPrice}){
    let styles = {
        BorderBottomLeftRadius:"14px",
        BorderBottomRightRadius:"14px" ,
   }
   let newStyle =  {
       fontWeight:"bold",
       color:"black",
   }
    return (
        <div className="price" style={styles}>
        <h3 className="oldP">{oldPrice}</h3>
        <h3 style={newStyle}>{newPrice}</h3>
        </div>
    );
}