import { useState } from "react";

export default function LikeButton(){
    const [IsLiked, setIsLiked] = useState(false)
    console.log("Rendering the top to down ")
    const [count, setCount] = useState(0)
    const [click, setClick] = useState(0)
    function toggleLike(){
        setIsLiked(!IsLiked); 
        if(!IsLiked){
            setCount(count + 1);
            console.log(`Liked ${count} times.`);
        }
        setClick((currClick) =>{
            return currClick + 1;
        });
        setClick((currClick) =>{
                return currClick + 1;
    
        })
    }
    
    let style = {color : "red",}
     return (
        <>
        <p onClick={toggleLike}  >
        <h3>Liked {count}    clicked {click} </h3>  
         <h2>{ IsLiked.toString()}    { IsLiked ? ( <i class="fa-solid fa-heart" style={style}> </i> ) : <i class="fa-regular fa-heart"></i>  } 
         </h2>
        </p>

        </>
     );
}
