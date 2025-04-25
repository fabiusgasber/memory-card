const Cards = ({ url, name, onClick }) => {
  return (
    <figure onClick={() => onClick()}>
      <img width="150px" height="auto" src={url}></img>
      <figcaption>{name}</figcaption>
    </figure>
  );
};

export default Cards;
