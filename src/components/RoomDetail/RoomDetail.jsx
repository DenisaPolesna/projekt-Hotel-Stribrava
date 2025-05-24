import "./RoomDetail.css";

export const RoomDetail = ({ room }) => {
  return (
    <div className="column">
      <img src={`http://localhost:4000/assets/${room.img}`} />
      <p>{room.desc}</p>
    </div>
  );
};
