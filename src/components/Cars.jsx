import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import '../styles/Cars.css';

function Cars() {
  const [carArray, setCarArray] = useState([])

  useEffect(() => {
    fetch("/api/cars")
      .then(res => res.json())
      .then(data => setCarArray(data.cars))
  }, [])

  let carElements = carArray.map(car => (
    <CarCard key={car.id} {...car} />
  ))

  return (
    <>
      <h2>Find the right car for you.</h2>
      <section className="cars--container">
        {carElements}
      </section>
    </>
  );
}

export default Cars;