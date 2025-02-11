import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";


export default function Search() {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchResults />
    </div>
  );
}
