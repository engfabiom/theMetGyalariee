import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetConsent } from "../redux/rootActions";
import LocalStorageConsent from "./LocalStorageConsent";
import "../css/Footer.css";

export default function Footer() {
  const dispatch = useDispatch();
  
  const userConsent = useSelector(reducer => reducer.localStorageConsentReducer);
  const consentRef = useRef(null);

  const handleGDPR = () => {
    dispatch(resetConsent());
    consentRef.current.setVisibility(true);
  };

  useEffect(() => {
    consentRef.current.setVisibility(!userConsent);
  },[]);

  return (
    <>
      <footer className="footer">
        <p>&copy; 2025 - All rights reserved</p>
        <button onClick={handleGDPR}>Review Consent</button>
      </footer>
      <LocalStorageConsent ref={consentRef}/>
    </>
  );
}
