import {useState} from 'react';

export default function Hooks(){
  const [count, setCount] = useState(0);
function counting(){
 setCount(count+1);  
console.log(count);
}
    return (
        <>
        <h2>Use the states in react</h2>
        <div>count= {count}</div>
        <button onClick={counting}>Count Up</button>
        </>
    );
}