function click(){
    console.log("Now Button is clicked")
}
function doubleClick(){
    console.log("Now double clicked handler");}

export default function Button(){
   let styles = {
        backgroundColor: "green",
        margineTop:"15px",
        padding: "10px",
        borderRadius: "10px",
        cursor: "pointer",
        color: "white",
        fontWeight: "bold",
    }

    return(
        <>
        <button style={styles} onClick={click}> <h4>Click Me</h4> </button>
        <button  onDoubleClick={doubleClick} ><h3>Double click me</h3></button>

        </>  
    );
}