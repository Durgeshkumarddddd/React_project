import { useState } from 'react';

export default function TudoList(){
    const [TudoList, setTudoList] = useState(' ')
   let style = {
    fontSize: '20px',
    padding : '10px',
    fontWeight: 'bold',
    marginBottom: '10px',
    marginLeft: '10px',
    backgroundColor: 'lightgray',
    borderRadius: '5px',
   }
    return(
        <>
        <hr></hr>
        <h2>My To Do List</h2>
        <form>
        <label>
           <h4> Enter Your To Do List : </h4>
            <input defaultValue={"Enter List Here"} style={style} ></input>
        </label>
        <button type="submit" style={style} onClick={}>Add</button>
        </form>
      
        </>
    );
}