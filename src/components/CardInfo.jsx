export default function CardInfo({
  title,
  artistDisplayName,
  objectName,
  department,
  dimensions,
  creditLine,
  currentTarget,
  origin,
}) {
  return (
    <div className="card-info">
      {title && <div className="card-info__title">{title}</div>}
      {artistDisplayName && <div className="card-info__artist">{artistDisplayName}</div>}
      {objectName && <div className="card-info__object-name">{objectName}</div>}
      {department && <div className="card-info__department">{department}</div>}
      {currentTarget && (
        <>
          {dimensions && <div className="card-info__dimensions">{dimensions}</div>}
          {creditLine && <div className="card-info__credit-line">{creditLine}</div>}
          {origin && <div className="card-info__origin">{origin}</div>}
        </>
      )}
    </div>
  );
}
