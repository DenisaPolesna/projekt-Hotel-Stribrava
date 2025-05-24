import { AdminOrder } from "../AdminOrder/AdminOrder";
import "./AdminOrders.css";
export const AdminOrders = ({ orders }) => {
  return (
    <section className="admin-orders">
      {orders.map((order) => {
        return <AdminOrder key={order.id} order={order} />;
      })}
    </section>
  );
};
