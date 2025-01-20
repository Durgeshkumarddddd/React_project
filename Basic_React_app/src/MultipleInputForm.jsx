import {useState} from 'react';
export default function MultipleInputForm(){
    const [inputData, setInputData] = useState({
      fullname: "", 
      username: "",
      password: "",
    })
    function MultipleInputHandle(event) {
      setInputData((currdata)=> {
        return {...currdata, [event.target.name]: event.target.value }
        console.log({...currdata})

      })
    } 
    function handleSubmitform(event) {
      event.preventDefault();
      console.log(inputData);
      setInputData({fullname: "", username: "", password: ""});
    }
    let style = {
      backgroundColor: "Lightgrey",
      padding : "10px",
      margin : "10px",
       fontSize : "20px",
       width:"200px",
       borderRadius: "5px",
    }
    let formStyle = {
      display: "flex",
      alignItems : "center",
      justifyContent : "center",
    }
    let submitStyle =  {
      padding : '10px',
      margin : '10px',
      backgroundColor : 'green',
      color : 'white',
      borderRadius : '5px',
      cursor : 'pointer',
      fontWeight : 'bold',
    }
    return (
        <div>
            <h1 style={formStyle}>Mutiple input form handle </h1>

          <div style={formStyle} >
          
          <form onSubmit={handleSubmitform} >
            <label> Full Name:  </label> <br></br>
            <input name='fullname' type="text"  placeholder='enter fullname'  value={inputData.fullname}  onChange={MultipleInputHandle} style={style} /> <br></br>
            <label> User Name:  </label> <br></br>
            <input name='username'  type="text" placeholder='Enter Useraname' value={inputData.username} onChange={MultipleInputHandle} style={style} /> <br></br>
            <label> Enter Password:  </label> <br></br>
            <input name='password' type="password" placeholder='Enter Password'  value={inputData.password} onChange={MultipleInputHandle} style={style} /> <br></br>
            <button type="submit" style={submitStyle}> Submit </button>
          </form>
          </div>
        </div>
    );
    
}