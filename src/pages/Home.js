import React from "react";
import Slider from "../components/slider/Slider";
import CardsIndex from "../components/Cards/CardsIndex";
import Modal from "../components/modal/Modal";

function Home() {
  return (
    <>
        <Slider />
        <CardsIndex />
        <Modal/>
    </>
  );
}

export default Home;
