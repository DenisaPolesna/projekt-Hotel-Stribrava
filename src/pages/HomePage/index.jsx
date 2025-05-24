import { Banner } from "../../components/Banner/Banner";
import "./style.css";
import { Rooms } from "../../components/Rooms/Rooms";
import { Order } from "../../components/Order/Order";
import { ContactSection } from "../../components/ContactSection/ContactSection";

export const HomePage = () => {
  return (
    <>
      <Banner />
      <Rooms />
      <Order />
      <ContactSection />
    </>
  );
};
