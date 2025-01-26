import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";


export default function Search() {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchItems />
    </div>
  );
}
