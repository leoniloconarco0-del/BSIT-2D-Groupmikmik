import { useState, useEffect } from "react";
import CarCard from "../../components/CarCard";
import "./Activity3.css";

function Activity3() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("/cars.json")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log("Error loading data:", error));
  }, []);

  return (
    <div className="container">
      <h1>Luxury Cars</h1>

      <div className="Activity3-card-container">
        {cars.map((car, index) => (
          <CarCard
            key={index}
            brand={car.brand}
            description={car.description}
            rating={car.rating}
            price={car.price}
            image={car.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Activity3;
