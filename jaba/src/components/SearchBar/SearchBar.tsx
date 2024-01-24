import Styles from "./SearchBar.module.css"
type SearchBarProps = {
    placeHolder: string;
    onSearch: () => void;
};


const SearchBar: React.FC<SearchBarProps> = ( {placeHolder, onSearch} ) => {
    return (
        <div className = {Styles.searchBar} >
            <input className = {Styles.search} type="text" placeholder={placeHolder}/>
            <button className = {Styles.searchButton} type="submit" onSubmit={onSearch}> Search </button>
        </div>

    );
}

export default SearchBar;