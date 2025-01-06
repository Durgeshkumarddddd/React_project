

export default function Count(){
    let count = 0;
function counting(){
 count = count + 1;
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