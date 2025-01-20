import "../css/search.css";
import SearchBar from "./SearchBar";
import SearchItems from "./SearchItems";

export default function Search(props) {
  return (
    <div className="search-container">
      <SearchBar />
      <SearchItems />
      <button className="btn__add-more-objects">Add More Objects</button>
    </div>
  );
}
