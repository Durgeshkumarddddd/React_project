function formhandler(event){
    event.preventDefault();
    console.log("event listen now");
    console.log(event)
}
export default function form(){
    let style = {
        backgroundColor: "lightgray",
        padding: "8px",
        border: "none",
        borderRadius: "5px",
        color: "white",
        fontWeight : "bold",
        width:"200px",
        fontSize: "18px"
        // padding: "10px",
        // borderRadius: "10px",
        // cursor: "pointer",
        // margin: "10px",
        // width: "200px",
        // color: "black",
        // fontWeight: "bold",
        // fontSize: "18px",
        // display: "flex",
        // justifyContent: "space-between",
        // alignItems: "center",
        // border: "none",
        // outline: "none",
        // transition: "background-color 0.3s ease",
        // "&:hover": {
        //     backgroundColor: "gray" 
        // }
    }
    let bStyle ={
        margin: "10px",
        padding: "10px",
        fontWeight:"bold",
        fontSize:"18px",
        cursor:"pointer",
    }
    let fStyle = {
        margin: "20px",
        display: "flex", 

    };
    return(
        <form style={fStyle}>
            <input style={style} type="text" placeholder="Enter your name" />
            <button style={bStyle} type="submit" onClick={formhandler}>Submit</button>
        </form>
    );
}