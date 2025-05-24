import { AdminOrder } from "../AdminOrder/AdminOrder";
import "./AdminOrders.css";
export const AdminOrders = ({ orders }) => {
  return (
    <section className="admin-orders">
      <div className="admin-header">
        <div>ID</div>
        <div>Status</div>
        <div>Price</div>
        <div>Email</div>
        <div>Phone</div>
      </div>

      {orders.map((order) => {
        return <AdminOrder key={order.id} order={order} />;
      })}
    </section>
  );
};
