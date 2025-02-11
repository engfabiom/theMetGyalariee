export default function CardImage({
  primaryImageSmall,
  artistDisplayName,
  objectName,
}) {
  return (
    <>
      { primaryImageSmall && 
        <figure className="card-image">
          <img src={primaryImageSmall} alt={artistDisplayName + " " + objectName} />
          <figcaption></figcaption>
        </figure>
      }
    </>
  );
}
