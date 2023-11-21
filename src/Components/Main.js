

import wind from '../Assets/Wind.png'
import humidity from '../Assets/Humidity.png'

import snow from '../Assets/snow.png'
import Storm from '../Assets/Storm.png'
import rain from '../Assets/rain.png'
import clear from '../Assets/clear.png'
import cloud from '../Assets/cloud.png'

function Main(props){
//set icon source based on condition
let src;
const firstDigit = props.conditionId.toString()[0]; // Get the first digit of the number
switch (firstDigit) {
  case '2' :
    
    src =Storm;
    break;
  case '3':
    src =rain;
    break;
case '5':
    src =rain;
    break;
  case '6':
    src =snow;
    break;
  case '7':
    src =cloud;
    break;
case '8':
    src =cloud;
    break;
  default:
    // Handle other cases
    src =Storm;
    break;
}
if(props.conditionId==800)
{src=clear}



    return (
        <div className="main">
            <div className="first-section">
                <img className='condition-icon' src={src} alt="condition icon" />
                <div className='condition-temper'>
                    <h1>{Math.round(props.temper)}°</h1>
                    <h2>{props.condition}</h2>
                </div>
            </div>

            <div className='second-section'>
                <div className='location'>
                    <h1 className='city-name'>{props.cityName}</h1>
                    <p className='date'>{props.formattedDate}</p>
                </div>
                <div className='details'>
                    <div className='wind'>
                        <img className='wind-icon' src={wind} alt="wind icon"/>
                        <div className='wind-data'>
                            <h3>{props.wind}Km/s </h3>
                            <p>wind</p>
                        </div>
                    </div>
                    
                    <div className='humidity'>
                        <img className='humidity-icon' src={humidity} alt="humidity icon"/>
                        <div className='humidity-data'>
                            <h3>{props.humidity}%</h3>
                            <p>humidity</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
    }
    export default Main