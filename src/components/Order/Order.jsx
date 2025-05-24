import { RoomDetail } from "../RoomDetail/RoomDetail";
import { OrderDetail } from "../OrderDetail/OrderDetail";

import "./Order.css";

export const Order = ({ selectedRoom }) => {
  return (
    <section className="light">
      <div className="container">
        <h2>
          Pokoj {selectedRoom.name}, {selectedRoom.price} Kč za osobu na noc
        </h2>
        <div className="columns-2">
          <RoomDetail room={selectedRoom} />
          <OrderDetail price={selectedRoom.price} />
        </div>
      </div>
    </section>
  );
};
