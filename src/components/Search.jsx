import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";

export default function Search({ setTheMetObject, tmo }) {
  return (
    <div className="search-container">
      <SearchBar setTheMetObject={setTheMetObject} />
      <SearchItems tmo={tmo} />
    </div>
  );
}
