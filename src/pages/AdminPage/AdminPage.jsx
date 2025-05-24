import { AdminOrders } from '../../components/AdminOrders/AdminOrders';
import './AdminPage.css';
import { useState, useEffect } from 'react';

export const AdminPage = (props) => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        `http://localhost:4000/api/orders?filter=status:eq:new`,
      );
      const json = await response.json();
      setOrders(json.data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="admin-container">
      <section>Administrace</section>
      <AdminOrders orders={orders} />
    </div>
  );
};
