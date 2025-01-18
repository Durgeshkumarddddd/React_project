import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function TudoList(){
    const [TudoList, setTudoList] = useState([{task:"simple task", id : uuidv4(), isDone : false}]);
    const [newTudos, setnewTudos] = useState("")
   
    function addTask(){
        setTudoList([...TudoList, {task :newTudos, id : uuidv4(), isDone : false}])
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
    function oneUpperCase(id){
        setTudoList((prevTudo)=> prevTudo.map((tudo)=> 
           { if(tudo.id === id)
            {return {...tudo, task : tudo.task.toUpperCase()}}
             else {return tudo  }}
    ))
    }
    const markasDone = (id) => 
    {
        setTudoList((prevTudo)=> prevTudo.map((tudo)=>{
            if(tudo.id === id){
                return { ...tudo, isDone : true };
            }
            else {return tudo }
        }))
    }
    const markAllDone = () => {
        setTudoList((prevTudo)=>
        prevTudo.map((tudo)=> {
           if (tudo.isDone === false) {
            return {...tudo, isDone : true}
           }
          else {
            return {...tudo , isDone : false}
          }
        }))
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
                    return <li  key={List.id} >
                    <span style={List.isDone ? {textDecoration : "line-through"} : {} } > {List.task} </span>  
                    &nbsp;&nbsp;
                    <button onClick={()=>deleteTask(List.id)}> Delete </button>
                    &nbsp;&nbsp;
                    <button onClick={()=>oneUpperCase(List.id)}>inUpperCase</button>
                    &nbsp;&nbsp;
                    <button  onClick={()=>markasDone(List.id)}>mark Done</button>
                    </li>
                  
                })}
             </ul>
             <h5>
              <button onClick={tasktoUpperCase} >All in UpperCase</button>
              &nbsp;&nbsp;
              <button onClick={markAllDone} >All markAs Done</button>
             </h5>
        </>
    );
}