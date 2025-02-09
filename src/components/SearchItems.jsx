import "../css/searchItems.css";
import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";

import getUniqueRandom from "../helpers/getUniqueRandom";
import { theMetAddObjects } from "../redux/theMet/actions";

import CardObject from "./CardObject";

console.clear();
export default function SearchItems() {
  const dispatch = useDispatch();

  const { status: searchStatus, data: searchResults } = useSelector((reducer) => reducer.theMetReducer.searchResultReducer);
  const { status: theMetObjectsStatus, data: theMetObjects } = useSelector((reducer) => reducer.theMetReducer.objectsReducer);

  let loading = searchStatus === "pending" || theMetObjectsStatus === "pending";
  let fulfilledTMO = theMetObjectsStatus === "fulfilled";
  let halfSizeCounter = 0;

  const setLoadingCursor = () => document.body.style.cursor = "wait";
  const setDefaultCursor = () => document.body.style.cursor = "default";

  loading ? setLoadingCursor() : setDefaultCursor();

  fulfilledTMO &&
    theMetObjects.map((obj) => {
      if (obj.orientation === "portrait") halfSizeCounter = 2 - halfSizeCounter;
      if (obj.orientation !== "portrait" && halfSizeCounter > 0) {
        halfSizeCounter--;
        obj.orientation = "square";
      }
    });

  const addObjects = (quantity = 10) => { 
    let payload = getUniqueRandom(theMetObjects, searchResults, quantity);
    dispatch(theMetAddObjects(payload));
  };

  useEffect(() => {
    addObjects(10);
  }, [searchResults]);

// console.log(`Objects: ${theMetObjects.length} / ${searchResults.length}` )

// Adding the hook to set one of the displayed objects as a Zoom Target
 const [ zoomTarget, setZoomTarget] = useState(null) ;
 function handleZoomTarget(target) { 
  event.stopPropagation(); 
   setZoomTarget(!zoomTarget ? target : zoomTarget.objectID === target.objectID ? null : target);
 }

 useEffect(() => {
    const handleClickOutsideTarget = () => {
      setZoomTarget(null);
    };
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
        ? <div className="search-items">
            { theMetObjects.map((obj) => ( <CardObject key={obj.objectID} tmo={obj} onClick={handleZoomTarget} /> )) }
          </div> 
        : null
      }



      { zoomTarget 
        ? <CardObject tmo={zoomTarget} onClick={handleZoomTarget} currentTarget="zoomTarget"> 
        </CardObject>
        : null 
      }

      { loading ? <div>Searching...</div> : null }

      { searchResults.length > theMetObjects.length 
        ? <button className="btn__add-more-objects" disabled={loading} onClick={() => addObjects(10)} >
            Add More Objects
          </button>
        : null
      }
    </>
  );
}
