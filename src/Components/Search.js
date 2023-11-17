import searchIcon from '../Assets/Search.png'
function Search(props){
return (
    <form type='submit' className="search-container" onSubmit={props.handleFormSubmit}>
        <input type="text" placeholder="City Name" className='search-box' value={props.inputText} onChange={props.handleInputChange} />
        <input type="image" src={searchIcon}  className='search-icon' alt="search icon"/>
    </form>
);
}
export default Search