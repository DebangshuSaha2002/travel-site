import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";
import Offers from "./Components/Offers/Offers";
import Plans from "./Components/Plans/Plans";
import Rooms from "./Components/Rooms/Rooms";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <Offers />
      <Plans />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
