const Cards = ({ url, name, onClick, uid }) => {
  return (
    <figure onClick={(e) => onClick(e)} data-id={uid}>
      <img width="150px" height="auto" src={url}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Cards;
