import { useState  } from "react";
export default function WheatherApi(){
     
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState("");

    function handleSearchInput(event){
        setCity(event.target.value);
        console.log(event.target.value);
    }
    function setCityData((cityData)=>{
        setWeatherData(cityData);
        console.log(cityData);
    }
    function handleSubmitform(event){
        event.preventDefault();
        setCity("");
    }
    return(
          <div>
              <h1>Wheather Api</h1>
              <form>
               <h3>{city}</h3> 
              <input placeholder="Enter city name" onChange={handleSearchInput}></input>
              <button  onClick={handleSubmitform}> Search</button>
              </form>
          </div>
    );
}