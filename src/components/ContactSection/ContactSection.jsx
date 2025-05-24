import "./ContactSection.css";
import { Contact } from "../Contact/Contact";
import { Map } from "../Map/Map";

export const ContactSection = (props) => {
  return (
    <section className="dark">
      <div className="container columns-2">
        <Contact />
        <Map />
      </div>
    </section>
  );
};
