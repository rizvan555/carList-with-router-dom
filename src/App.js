import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import CarDetails from "./components/carDetails";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/carDetails/:id" element={<CarDetails />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
