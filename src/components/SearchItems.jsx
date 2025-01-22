import "../css/searchItems.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import getUniqueRandom from "../helpers/getUniqueRandom";
import { theMetAddObjects } from "../redux/theMet/actions";

import CardObject from "./CardObject";
import { setImageOrientation } from "../helpers/setImageOrientation";

export default function SearchItems() {
  const dispatch = useDispatch();

  const { searchResult } = useSelector((reducer) => reducer.theMetReducer.searchResultReducer);
  const theMetObjects = useSelector((reducer) => reducer.theMetReducer.objectsReducer);

  const addObjects = (quantity) => {
    dispatch(theMetAddObjects(getUniqueRandom(theMetObjects,searchResult,quantity)));
  };

  useEffect(() => {
    addObjects(10);
  }, [searchResult]);

  let halfSizeCounter = 0;
  return (
    <>
      <div className="search-items">
        {theMetObjects.lenght === 0 ? (
          <p>Loading...</p>
        ) : (
          theMetObjects.map((obj) => {
            if (obj.orientation === "portrait")
              halfSizeCounter = 3 - halfSizeCounter;
            if (obj.orientation !== "portrait" && halfSizeCounter > 0) {
              halfSizeCounter--;
              obj.orientation = "half-landscape";
            } 
            return <CardObject key={obj.objectID} tmo={obj} />;
          })
        )}
      </div>
      <button className="btn__add-more-objects" onClick={() => addObjects(5)}>
        Add More Objects
      </button>
    </>
  );
}
