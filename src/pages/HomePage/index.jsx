import { Banner } from "../../components/Banner/Banner";
import "./style.css";
import { Rooms } from "../../components/Rooms/Rooms";
import { Order } from "../../components/Order/Order";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [selectedRoom, setSelectedRoom] = useState({});
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch(`http://localhost:4000/api/rooms`);
      const json = await response.json();
      setRooms(json.data);
      setSelectedRoom({
        img: json.data[0].img,
        desc: json.data[0].description,
        price: json.data[0].price,
        name: json.data[0].name,
      });
    };

    fetchRooms();
  }, []);

  const handleRoomSelect = (room) => {
    setSelectedRoom({
      img: room.img,
      desc: room.desc,
      price: room.price,
      name: room.name,
    });
  };

  return (
    <>
      <Banner />
      <Rooms onRoomSelect={handleRoomSelect} rooms={rooms} />
      <Order selectedRoom={selectedRoom} />
      <ContactSection />
    </>
  );
};
