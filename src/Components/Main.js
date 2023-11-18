import rain from '../Assets/rain.png'
import wind from '../Assets/Wind.png'
import humidity from '../Assets/Humidity.png'

function Main(props){
    return (
        <div className="main">
            <div className="first-section">
                <img className='condition-icon' src={rain} alt="condition icon" />
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