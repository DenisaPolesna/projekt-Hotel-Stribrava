import "./OrderDetail.css";

import { useState, useEffect } from "react";

export const OrderDetail = ({ price }) => {
  const [personCount, setPersonCount] = useState(0);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [food, setFood] = useState("Žádné");
  const [pet, setPet] = useState(false);
  const [kidBed, setKidBed] = useState(false);
  const [barrier, setBarrier] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const resp = await fetch(`http://localhost:4000/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        phone: phone,
        totalPrice: totalPrice,
        status: "new",
      }),
    });

    if (!resp.ok) {
      alert("Objednavka nebyla zaslana. Zkuste to pozdeji.");
    } else {
      alert("Objednavka zaslana.");
      setPersonCount(0);
      setDateFrom("");
      setDateTo("");
      setFood("Žádné");
      setPet(false);
      setKidBed(false);
      setBarrier(false);
      setEmail("");
      setPhone("");
    }
  };

  function getInclusiveDayCount(startDateStr, endDateStr) {
    if (startDateStr === "" || endDateStr === "") return;
    const checkIn = new Date(startDateStr);
    const checkOut = new Date(endDateStr);

    // Zero out the time
    checkIn.setHours(0, 0, 0, 0);
    checkOut.setHours(0, 0, 0, 0);

    const msPerDay = 1000 * 60 * 60 * 24;
    const diffDays = Math.floor((checkOut - checkIn) / msPerDay);

    return diffDays;
  }

  useEffect(() => {
    if (personCount === 0) return;
    const nights = getInclusiveDayCount(dateFrom, dateTo);
    if (nights == null) return;

    let petPrice = 0;
    if (pet) petPrice = (nights * price) / 4;

    let kidsPrice = 0;
    if (kidBed) kidsPrice = (nights * price) / 2;

    let foodPrice = 0;
    if (food === "Snídaně") {
      foodPrice = 100;
    } else if (food === "Polopenze") {
      foodPrice = 400;
    } else if (food === "Plná penze") {
      foodPrice = 700;
    }

    setTotalPrice(0);
    setTotalPrice((prevPrice) => {
      return (
        prevPrice +
        nights * price * personCount +
        foodPrice * nights * personCount +
        petPrice +
        kidsPrice
      );
    });
  }, [dateFrom, dateTo, personCount, food, pet, kidBed]);

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  };
  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  };

  const handlePersonChange = (event) => {
    setPersonCount(event.target.value);
  };

  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };

  const onPetCheck = (event) => {
    setPet(event.target.checked);
  };

  const onKidBedCheck = (event) => {
    setKidBed(event.target.checked);
  };

  const onBarrierCheck = (event) => {
    setBarrier(event.target.checked);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input
          id="field1"
          className="field-input"
          type="date"
          onChange={handleDateFromChange}
          value={dateFrom}
        />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input
          id="field2"
          className="field-input"
          type="date"
          onChange={handleDateToChange}
          value={dateTo}
        />

        <label htmlFor="field3" className="field-label">
          Počet osob:
        </label>
        <input
          onChange={handlePersonChange}
          id="field3"
          className="field-input"
          type="number"
          min="0"
          max="100"
          step="1"
          value={personCount}
        />

        <label htmlFor="select" className="field-label">
          Stravování:
        </label>
        <select
          id="select"
          className="field-input"
          onChange={handleFoodChange}
          value={food}
        >
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domácí mazlíček:
        </label>
        <input
          id="check1"
          className="field-input"
          type="checkbox"
          onChange={onPetCheck}
          checked={pet}
        />

        <label htmlFor="check2" className="field-label">
          Přistýlka pro dítě:
        </label>
        <input
          id="check2"
          className="field-input"
          type="checkbox"
          onChange={onKidBedCheck}
          checked={kidBed}
        />

        <label htmlFor="check3" className="field-label">
          Bezbariérový přístup:
        </label>
        <input
          id="check3"
          className="field-input"
          type="checkbox"
          onChange={onBarrierCheck}
          checked={barrier}
        />

        <label htmlFor="field4" className="field-label">
          E-mail:
        </label>
        <input
          id="field4"
          className="field-input"
          type="email"
          onChange={onEmailChange}
          value={email}
        />

        <label htmlFor="field4" className="field-label">
          Telefon:
        </label>
        <input
          id="field4"
          className="field-input"
          type="text"
          onChange={onPhoneChange}
          value={phone}
        />

        <div>Celková cena za pobyt: {totalPrice} Kč</div>
      </div>
      <button className="wide">Odeslat poptávku</button>
    </form>
  );
};
