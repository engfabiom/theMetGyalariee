import "../css/cardObject.css";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

export default function CardObject({ tmo }) {
  tmo.title ??= "unknown title";
  tmo.artistDisplayName ??= "unknown artist";
  tmo.objectName ??= "unknown object";
  tmo.department ??= "unknown department";
  tmo.primaryImageSmall ??=
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s";
  let classes = `card ${tmo.orientation}`;
  return (
    <div id={tmo.objectID} className={classes}>
      <CardInfo {...tmo} />
      <CardImage {...tmo} />
    </div>
  );
}
