import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";

/* ORDS says : why props here ? */ 
export default function Search(props) {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchItems />
    </div>
  );
}
