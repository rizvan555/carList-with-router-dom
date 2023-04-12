import carData from "../data/carData.json";
import { useParams } from "react-router-dom";
import Header from "./Header";

const CarDetails = () => {
  const { id } = useParams();

  const filteredCar = carData.find((data) => {
    return data.id.toString() === id;
  });

  return (
    <nav>
      <ul>
        <li>{filteredCar.CarMake}</li>
        <li>{filteredCar.carModel}</li>
        <li>{filteredCar.CarYear}</li>
      </ul>
    </nav>
  );
};

export default CarDetails;
