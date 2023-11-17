
import './App.css';
import React,{useState,useEffect} from 'react';

import Main from './Components/Main';
import Search from './Components/Search';
import Future from './Components/Future';



function App() {
 
  const [cityInput,setCity]=useState("mashhad");
  const [inputText, setInputText] = useState('');
  const [cityName,setCityName]=useState('');


// using useEffect hook every time the city name changed fetch function called 
  useEffect(()=>{async function fetchData() {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=2270e97332ee6c4df43830271accfc5c`
      );
      const data = await response.json();
      setCityName(data.name);
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
      <Main city={cityName}/>
      <Future/>
    </div>
  );
}

export default App;
