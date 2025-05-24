import { RoomDetail } from "../RoomDetail/RoomDetail";
import { OrderDetail } from "../OrderDetail/OrderDetail";
import "./Order.css";

export const Order = (props) => {
  return (
    <section class="light">
      <div class="container">
        <h2>Heading</h2>
        <div class="columns-2">
          <RoomDetail />
          <OrderDetail />
        </div>
      </div>
    </section>
  );
};
