import "./Contact.css";

export const Contact = (props) => {
  return (
    <div className="columns">
      <h2>Kontakt</h2>
      <p>Hotel Stříbrava</p>
      <p>Ke Kamenné lávce 12</p>
      <p>317 24 Libnice nad Stříbravou</p>
      <a href={`mailto:recepce@hotelstribrava.cz}`}>
        recepce@hotelstribrava.cz
      </a>
    </div>
  );
};
