import { useState } from "react";

export default function Ludo (){
    const [moves , setMoves] = useState({blue:0, green:0, red:0, yellow:0})
    function updateBlue(){
        setMoves({...moves, blue: moves.blue+1 });
        console.log(moves.blue);
    }
    function updateGreen(){
        moves.green += 1; //
        console.log(`green: ${moves.green}`)
        setMoves({...moves})
    }
    function updateRed(){
        setMoves((prevMoves)=>{
            return {...prevMoves, red: prevMoves.red+1}
            
        })
    }
    return (
        <>
     
         <h3>Blue color = {moves.blue} </h3>
         <button style={{backgroundColor: "blue", color:"white", width:"45px", height:"40px"}} onClick={updateBlue}> +1 </button>
         <h3>Green color = {moves.green}   </h3>
         <button style={{backgroundColor:"green", color:"white", width:"45px", height:"40px"}} onClick={updateGreen}> +1 </button>
         <h3>Red color = {moves.red} </h3>
         <button style={{backgroundColor:"red", color:"white", width:"45px", height:"40px"}} onClick={updateRed}> +1 </button>
         <h3>Yellow color ={moves.yellow}  </h3>
         <button style={{backgroundColor:"yellow", color:"white", width:"45px", height:"40px"}} onClick={updateBlue}> +1 </button>

        </>
    );
}