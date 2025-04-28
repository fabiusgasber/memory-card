const Cards = ({ url, name, onClick, uid }) => {
  return (
    <button onClick={(e) => onClick(e)} data-id={uid}>
      <figure>
        <img width="150px" height="auto" src={url}></img>
        <figcaption>{name}</figcaption>
      </figure>
    </button>
  );
};

export default Cards;
