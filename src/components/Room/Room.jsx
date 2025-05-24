import "./Room.css";

export const Room = ({ img, price, name, onRoomSelect, desc }) => {
  const handleOnClick = () => {
    onRoomSelect({ img: img, desc: desc, price: price, name: name });
  };
  return (
    <div className="card">
      <img
        onClick={handleOnClick}
        className="card__image"
        src={`http://localhost:4000/assets/${img}`}
      />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} kč na osobu</div>
    </div>
  );
};
