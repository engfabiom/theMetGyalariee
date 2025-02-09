export default function CardInfo({title,artistDisplayName,objectName,department,dimensions,creditLine, currentTarget, origin }) {
  const isCurrent = currentTarget ? true : false ; 

  return (
    <div className="card-info">
      {title && <div className="card-info__title">{title}</div>}
      {artistDisplayName && <div className="card-info__artist">{artistDisplayName}</div> }
      {objectName && <div className="card-info__object-name">{objectName}</div> }
      {department && <div className="card-info__department">{department}</div> }
      {isCurrent && 
        <>
          {dimensions && <div className="card-info__medium">{dimensions}</div> } 
          {creditLine && <div className="card-info__medium">{creditLine}</div> } 
          {origin && <div className="card-info__medium">{origin}</div> } 
        </> 
      }
    </div>
  );
}