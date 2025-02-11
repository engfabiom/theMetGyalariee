import React, { useImperativeHandle, useState } from "react";
import { useDispatch } from "react-redux";
import { setConsent, resetConsent } from "../redux/rootActions";
import "../css/LocalStorageConsent.css";

const LocalStorageConsent = ({ref}) => {

  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      setVisibility(visibility) {
        setIsVisible(visibility);
      }
    };
  }, []);

  if (!isVisible) return null;

  const handleConsent = (consentAcceptance) => {
    consentAcceptance ? dispatch(setConsent()) : dispatch(resetConsent());
    setIsVisible(false);
  };

  return (
    <div className="consent-banner">
      <h2>Local Storage Consent</h2>
      <p>
        This website uses <span>browser's localStorage</span> to remember 
        your <span>theme preference</span> and <span>consent choice</span>,
        helping to enhance your browsing experience by keeping your settings
        consistent across visits.
      </p>
      <p>No personal data is collected, stored, or shared with third parties.</p>
      <p>Please choose an option</p>
      <div className="buttons">
        <button className="accept" onClick={() => handleConsent(true)}>ACCEPT</button>
        <button className="deny" onClick={() => handleConsent(false)}>DENY</button>
      </div>
    </div>
  );
};

export default LocalStorageConsent;
