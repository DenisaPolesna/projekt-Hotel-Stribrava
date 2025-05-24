import "./Rooms.css";
import { Room } from "../Room/Room";
import { useState, useEffect } from "react";

export const Rooms = ({ onRoomSelect, rooms }) => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro Vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => {
            return (
              <Room
                key={room.id}
                id={room.id}
                img={room.img}
                price={room.price}
                name={room.name}
                desc={room.description}
                onRoomSelect={onRoomSelect}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
