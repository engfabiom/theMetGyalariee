import "../css/cardObject.css";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

export default function CardObject({ tmo, onClick, currentTarget = "" }) {
  tmo.title ??= "unknown title";
  tmo.artistDisplayName ??= "unknown artist";
  tmo.objectName ??= "unknown object";
  tmo.department ??= "unknown department";
  tmo.primaryImageSmall ??= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1BFq0h-RvrEBWCMPudD2QMYcG2BDJVDYNw&s";

  const classes = `card ${tmo.orientation} ${currentTarget}`.trim();

  /* TODO: Review fields */
  const origin =
    [
      tmo.city,
      tmo.country || tmo.county || tmo.state,
      tmo.region || tmo.subregion,
    ]
      .filter((value) => value)
      .join(", ") || "Unknown geografical origin";

  return (
    <div id={tmo.objectID} className={classes} onClick={() => onClick(tmo)}>
      <CardInfo {...tmo} {...(currentTarget ? { currentTarget, origin } : {})} />
      <CardImage {...tmo} />
      {currentTarget && <div className="card__exit-message">CLICK OUTSIDE TO EXIT</div>}
    </div>
  );
}
