import Header from "../components/Header";
import carData from "../data/carData.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="grid">
      {carData.map((car) => {
        return (
          <>
            <div className="grid-item">
              <h3>{car.CarMake}</h3>
              <Link to={`/carDetails/${car.id}`}>Read more</Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Home;
