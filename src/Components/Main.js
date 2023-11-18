import rain from '../Assets/rain.png'
function Main(props){
    if(props.conditionId==800){
        console.log(1);
    }
    return (
        <div className="main">
            <div className="first-section">
                <img className='condition-icon' src={rain} alt="condition icon" />
                <div className='condition-temper'>
                    <h1>{props.temper}°</h1>
                    <h2>{props.condition}</h2>
                </div>
            </div>
            <div className='second-section'>
                <div className='location'>
                    <h1>{props.cityName}</h1>
                    <p>data</p>
                </div>
                <div className='details'>
                    <h1>humid</h1>
                    <p>data</p>
                </div>

            </div>
        </div>
    )
    }
    export default Main