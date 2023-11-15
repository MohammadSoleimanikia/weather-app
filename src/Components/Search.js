import searchIcon from '../Assets/Search.png'
function Search(){
return (
    <form type='submit' className="search-container">
        <input type="text" placeholder="City Name" className='search-box'/>
        <input type="image" src={searchIcon}  className='search-icon' />
    </form>
);
}
export default Search