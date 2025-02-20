import "../css/SearchResults.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import getUniqueRandom from "../helpers/getUniqueRandom";
import { theMetAddObjects } from "../redux/theMet/actions";

import CardObject from "./CardObject";

console.clear();
export default function SearchItems() {
  const dispatch = useDispatch();

  const { status: searchStatus, data: searchResults } = useSelector( (reducer) => reducer.theMetReducer.searchResultReducer );
  const { status: theMetObjectsStatus, data: theMetObjects } = useSelector( (reducer) => reducer.theMetReducer.objectsReducer );

  const loading = searchStatus === "pending" || theMetObjectsStatus === "pending";
  document.body.style.cursor = loading ? "wait" : "default";

  const fulfilledTMO = theMetObjectsStatus === "fulfilled";
  let halfSizeCounter = 0;
  fulfilledTMO &&
    theMetObjects.map((obj) => {
      switch (obj.orientation) {
        case "portrait":
          halfSizeCounter = 2 - halfSizeCounter;
          break;
        case "landscape":
          if (halfSizeCounter > 0) {
            halfSizeCounter--;
            obj.orientation = "square";
          }
          break;
        case "square":
          if (halfSizeCounter > 0) halfSizeCounter--;
          else halfSizeCounter = 1;
          break;
        default:
          break;
      }
    });

  const addObjects = (quantity = 10) => {
    const payload = getUniqueRandom(theMetObjects, searchResults, quantity);
    dispatch(theMetAddObjects(payload));
  };

  useEffect(() => {
    addObjects(10);
  }, [searchResults]);

  // Adding the hook to set one of the displayed objects as a Zoom Target
  const [zoomTarget, setZoomTarget] = useState(null);
  function handleZoomTarget(target) {
    event.stopPropagation();
    const zoomTargetClick = document.querySelector(".zoomTarget")?.contains(event.target);
    !zoomTarget && setZoomTarget(target); // SHOW if not shown
    zoomTarget && !zoomTargetClick && setZoomTarget(null); // DISMISS if zoomTarget is shown AND clicked on a different card
  }

  useEffect(() => {
    const handleClickOutsideTarget = () => setZoomTarget(null);
    if (zoomTarget) {
      document.addEventListener("click", handleClickOutsideTarget);
    }
    return () => {
      document.removeEventListener("click", handleClickOutsideTarget);
    };
  }, [zoomTarget]);

  return (
    <>
      { !loading && 
        (!theMetObjects.length  
          ? <div>No items found!</div>
          : <div>Search results:</div>)
      }

      { theMetObjects.length 
        ? <div className="search-results">
            { theMetObjects.map( (obj) => <CardObject key={obj.objectID} tmo={obj} onClick={handleZoomTarget} /> ) }
          </div>
        : null
      }

      { zoomTarget 
        ? <CardObject tmo={zoomTarget} onClick={handleZoomTarget} currentTarget="zoomTarget" />
        : null
      }

      { loading ? <div>Searching...</div> : theMetObjects.length > 0 && <div style={{textAlign: "right"}}>Items: {theMetObjects.length} / {searchResults.length}</div>}

      { searchResults.length > theMetObjects.length
        ? <button className="btn__add-more-objects" disabled={loading} onClick={() => addObjects(10)} >
            Add More Objects
          </button>
        : null
      }
    </>
  );
}
