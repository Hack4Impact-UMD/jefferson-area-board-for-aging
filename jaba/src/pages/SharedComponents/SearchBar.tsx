type SearchBarProps = {
    placeHolder: string;
    onSearch: () => void;
};

const SearchBar: React.FC<SearchBarProps> = ( {placeHolder, onSearch} ) => {
    return (
        <div className = "search-bar">
            <input className = "search" type="text" placeholder={placeHolder}/>
            <button className = "search-button" type="submit" onSubmit={onSearch}> Search </button>
        </div>

    );
}

export default SearchBar;