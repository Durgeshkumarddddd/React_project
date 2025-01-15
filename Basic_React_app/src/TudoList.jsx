import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function TudoList(){
    const [TudoList, setTudoList] = useState([{task:"simple task", id : uuidv4()}]);
    const [newTudos, setnewTudos] = useState("")
   
    function addTask(){
        setTudoList([...TudoList, {task :newTudos, id : uuidv4()}])
    } 
    function updateInput(event){
        setnewTudos(event.target.value)
    }
    function deleteTask(id){
        const deletedTask = setTudoList(TudoList.filter((task)=> task.id != id));
        
    }
    function tasktoUpperCase(){
         setTudoList((prevTudo)=> prevTudo.map((tudo)=> 
        {return {...tudo, task : tudo.task.toUpperCase()}}))
    }

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
        <h2>My To Do List</h2>
        <input onChange={updateInput} placeholder={"Enter task Here"} style={style}></input>
        <button type="submit" style={style} onClick={addTask}> Add </button>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
             <ul>
                {TudoList.map((List)=>{
                    return <li key={List.id} >{List.task}
                    &nbsp;&nbsp;
                    <button onClick={()=>deleteTask(List.id)}>Delete</button>
                    </li>
                  
                })}
             </ul>
             <h5>Convert to Upper Case 
              <button onClick={tasktoUpperCase} >Click UpperCase</button>
             </h5>
        </>
    );
}