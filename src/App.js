
import './App.css';
import React,{useState,useEffect} from 'react';

import Main from './Components/Main';
import Search from './Components/Search';
import Future from './Components/Future';



function App() {
 
  const [city,setCity]=useState("");
  const [inputText, setInputText] = useState('');
 
//using useEffect hook every time the city name changed fetch function called 
  useEffect(()=>{
    
  },[city])

  const handleInputChange=(e)=>
    {
      setInputText(e.target.value);
    };

const handleFormSubmit=(e)=>{
e.preventDefault();
if(inputText.trim() !='')
      {
       setCity(inputText);
      }
      setInputText(''); 
};

  return (
    <div className="App">
      <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} inputText={inputText}/>
      <Main city={city}/>
      <Future/>
    </div>
  );
}

export default App;
