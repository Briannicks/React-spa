function SearchBar(props) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search Projects"
      value={props.searchTerm}
      onChange={function (e) {
        props.onSearchChange(e.target.value);
      }}
    />
  );
}

export default SearchBar;
