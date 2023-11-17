
import './App.css';
import React,{useState,useEffect} from 'react';

import Main from './Components/Main';
import Search from './Components/Search';
import Future from './Components/Future';



function App() {
 
  const [cityInput,setCity]=useState("mashhad");
  const [inputText, setInputText] = useState('');
  const [temper,setTemper]=useState('');
  const [conditionId,setConditionId]=useState(0);
  const [cityName,setCityName]=useState('');
  const [wind,setWind]=useState(0);
  const [humidity,setHumidity]=useState('');
  const [condition,setCondition]=useState('');

//curent date
const currentDate = new Date();
// Define an array of weekday names
const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// Define an array of month names
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// Get the day of the week (0-6) and month (0-11) from the date object
const dayOfWeek = weekdays[currentDate.getDay()];
const dayOfMonth = currentDate.getDate();
const month = months[currentDate.getMonth()];
// Create the formatted date string
const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}`;


// using useEffect hook every time the city name changed fetch function called ----------------------------------------------------
  useEffect(()=>{async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=2270e97332ee6c4df43830271accfc5c`
      );
      const data = await response.json();
      setCityName(data.name);
      setTemper(data.main.temp);
      setConditionId(data.weather[0 ].id);
      setWind(data.wind.speed);
      setHumidity(data.main.humidity);
      setCondition(data.weather[0].description)
      
    } catch (error) {
      console.log('Error:', error);
    }
  }
    fetchData();
},[cityInput]);

  
  const handleInputChange=(e)=>
    {
      setInputText(e.target.value);
    };

const handleFormSubmit=(e)=>{
e.preventDefault();
if(inputText.trim() !=='')
      {
       setCity(inputText);
      }
      setInputText(''); 
};

  return (
    <div className="App">
      <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} inputText={inputText}/>
      <Main condition={condition} cityName={cityName} temper={temper} conditionId={conditionId} wind={wind} humidity={humidity} formattedDate={formattedDate}/>
      <Future/>
    </div>
  );
}

export default App;
