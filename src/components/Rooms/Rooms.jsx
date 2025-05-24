import "./Rooms.css";
import { Room } from "../Room/Room";

export const Rooms = () => {
  return (
    <section class="dark">
      <div class="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro Vás ten pravý.</p>
        <div class="cards-row">
          <Room />
        </div>
      </div>
    </section>
  );
};
