import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";

export default function Search({ setTheMetObject, tmo, extra}) {
  return (
    <div className="search-container">
      <SearchBar setTheMetObject={setTheMetObject} />
      <SearchItems tmo={tmo} />
      <button onClick={extra} style={{margin: "2rem 4rem", padding: "1rem 2rem"}}>Add More Objects</button>
    </div>
  );
}
