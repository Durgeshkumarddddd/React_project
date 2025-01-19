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

      })
    }
    return (
        <div>
          <form>
            <label> Full Name:  </label> <br></br>
            <input name='fullname' htmlfor="fullname" type="text"  onChange={MultipleInputHandle}  /> <br></br>
            <input name='username' htmlfor="username" type="text" onChange={MultipleInputHandle} /> <br></br>
            <input name='password' htmlfor="password" type="password" onChange={MultipleInputHandle} /> <br></br>
            <button type="submit"> Submit </button>
          </form>
        </div>
    );
}