import './SearchBar.css'

const SearchBar = ({ setValue }) => {
    return ( 
        <div className="mb3 search-bar">
            <input placeholder="Search" type="text" className="form-control" onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
}
 
export default SearchBar;