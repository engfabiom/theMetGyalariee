import "../css/searchItems.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import getUniqueRandom from "../helpers/getUniqueRandom";
import { theMetAddObjects } from "../redux/theMet/actions";

import CardObject from "./CardObject";
/* ORDS rq > find the title of the section searchItems confusing, would like better displayeditems */
export default function SearchItems() {
  const dispatch = useDispatch();

  const { status: searchStatus, data: searchResult } = useSelector((reducer) => reducer.theMetReducer.searchResultReducer);
  let loading = searchStatus === "pending";

  const { status:theMetObjectsStatus, data: theMetObjects } = useSelector((reducer) => reducer.theMetReducer.objectsReducer);
  loading |= theMetObjectsStatus === "pending";
  let fulfilledTMO = theMetObjectsStatus === "fulfilled";

  let halfSizeCounter = 0;
  fulfilledTMO &&
    theMetObjects.map((obj) => {
      if (obj.orientation === "portrait") halfSizeCounter = 3 - halfSizeCounter;
      if (obj.orientation !== "portrait" && halfSizeCounter > 0) {
        halfSizeCounter--;
        obj.orientation = "half-landscape"; // ORDS square
      }
    });
    
 {/* ORDS rq  > only working for initial random search ?  */}

  const addObjects = (quantity) => {
    let payload = getUniqueRandom(theMetObjects, searchResult, quantity);
    dispatch(theMetAddObjects(payload));
  };

  useEffect(() => {
    addObjects(10);
  }, [searchResult]);
  

  const setLoadingCursor = () => {document.body.style.cursor = "wait";};
  const setDefaultCursor = () => {document.body.style.cursor = "default";};

  return (
    <>
      <div className="search-items">
        {loading ? setLoadingCursor() : setDefaultCursor()}
        {theMetObjects.map((obj) => (
          <CardObject key={obj.objectID} tmo={obj} />
        ))}
      </div>

      
      <button
        className="btn__add-more-objects"
        disabled={loading}
        onClick={() => addObjects(10)}
      >
        Add More Objects
      </button>
      
    </>
  );
}
