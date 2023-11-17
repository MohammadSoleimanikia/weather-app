import rain from '../Assets/rain.png'
function Main(props){
    return (
        <div className="main">
            <div className="first-section">
                <img className='condition-icon' src={rain} alt="condition icon" />
                <div className='condition-temper'>
                    <h1>{props.temper}°</h1>
                    <h2>{props.condition}</h2>
                </div>
            </div>
        </div>
    )
    }
    export default Main