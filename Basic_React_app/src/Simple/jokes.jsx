import {useState , useEffect} from 'react';
export default function jokes(){
    const [jokes, setJokes] = useState({});
     let URL = "https://official-joke-api.appspot.com/random_joke"
    let getnewJokes = async()=>{
        let response = await fetch(URL)
        let jasonResponse = await response.json();
        setJokes({setup : jasonResponse.setup, punchline: jasonResponse.punchline})
    }
    useEffect(() => async function getfirstjoke(){
        let response = await fetch(URL)
        let jasonResponse = await response.json();
        setJokes({setup : jasonResponse.setup, punchline: jasonResponse.punchline})
    },[]);
  
   let style = {
     display : 'flex',
     justifyContent : 'center',
     alignItems : 'center',
     flexDirection : 'column',
   }
    return (
        <div>
            <div style={style}>
            <h1> Jokes </h1>
            <h3>{jokes.setup}</h3>
            <h3>{jokes.punchline}</h3>
            <button onClick={getnewJokes}> Get New Joke </button>
            </div>
        </div>
    );
}