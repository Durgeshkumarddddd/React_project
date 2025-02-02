import {useState, useEffect } from 'react';

export default function CreateUseEffect(){
    const [countx, setCountx] = useState(0)
    const [county, setCounty] = useState(0)
      
    useEffect(function handleUseEffect(){"Now using the useEffect property"
        console.log(" Rendering the useEffect ")}, [countx]
    )
    function increaseCountx(){
        setCountx((incCount)=> {
            return incCount +1 ; 
        })
    }
    function increaseCounty(){
         setCounty((incCount)=> {
            return incCount +1 ; 
         })
    }

    let style = {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }
    return (
     <div>
        <div style={style}>
        <h1> Use of useEffect </h1>
        <h2> Countx: {countx} </h2>
        <button onClick={ increaseCountx } > +1 </button>
        <h2>County: {county} </h2>
        <button onClick={ increaseCounty } > +1 </button>
        </div>
     </div>
    );
}