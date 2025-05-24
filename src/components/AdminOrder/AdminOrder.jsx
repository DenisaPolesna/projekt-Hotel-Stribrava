import "./AdminOrder.css";

import { useState } from "react";

export const AdminOrder = ({ order }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatusChange = async (event) => {
    const status = event.target.value;
    setStatus(status);
    const resp = await fetch(`http://localhost:4000/api/orders/${order.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([
        {
          op: "replace",
          path: "/status",
          value: status,
        },
      ]),
    });

    if (!resp.ok) {
      console.log("polozka needitovana, zkuste pozdeji");
    } else {
      console.log("Polozka editovana");
    }
  };

  return (
    <div className="order-item">
      <div className="item">{order.id}</div>
      <select
        id="select"
        className="field-input"
        value={status}
        onChange={handleStatusChange}
      >
        <option>new</option>
        <option>approved</option>
        <option>pending</option>
        <option>canceled</option>
      </select>
      <div className="item"> {order.totalPrice} Kč</div>
      <div className="item"> {order.email}</div>
      <div className="item"> {order.phone}</div>
    </div>
  );
};
