import "./Rooms.css";
import { Room } from "../Room/Room";

export const Rooms = () => {
  return (
    <section class="dark">
      <div class="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia temporibus vitae in ab.</p>
        <div class="cards-row">
          <Room />
        </div>
      </div>
    </section>
  );
};
