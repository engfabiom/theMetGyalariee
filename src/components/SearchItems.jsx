import "../css/searchItems.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUniqueRandom from "../helpers/getUniqueRandom";
import { theMetAddObjects } from "../redux/theMet/actions";

import CardObject from "./CardObject";

export default function SearchItems() {
  const dispatch = useDispatch();

  const { searchResult } = useSelector((reducer) => reducer.theMetReducer.searchResultReducer);
  const { pending: loadingTMO, fulfilled: fulfilledTMO, objects: theMetObjects} = useSelector((reducer) => reducer.theMetReducer.objectsReducer);

  let halfSizeCounter = 0;
  fulfilledTMO && theMetObjects.map((obj) => {
    if (obj.orientation === "portrait")
      halfSizeCounter = 3 - halfSizeCounter;
    if (obj.orientation !== "portrait" && halfSizeCounter > 0) {
      halfSizeCounter--;
      obj.orientation = "half-landscape"; // square
    } else { console.log("something diferent happened")}
  });


  const addObjects = (quantity) => {
    dispatch(theMetAddObjects(getUniqueRandom(theMetObjects, searchResult, quantity)));
  };

  useEffect(() => {
    addObjects(10);
  }, [searchResult]);

  const setLoadingCursor = () => {document.body.style.cursor = "wait";};
  const setDefaultCursor = () => {document.body.style.cursor = "default";};

  return (
    <>
      <div className="search-items">
        {loadingTMO ? setLoadingCursor() : setDefaultCursor()}
        {theMetObjects.map(obj => <CardObject key={obj.objectID} tmo={obj} />)}
      </div>
      <button className="btn__add-more-objects" disabled={loadingTMO} onClick={() => addObjects(10)} >
        Add More Objects
      </button>
    </>
  );
}
