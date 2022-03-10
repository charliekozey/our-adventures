import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripCard from "./TripCard";
import NewForm from "./NewForm";
import '../App.css';



function App() {


  return (
    <>
      <Header />
      <NavBar />
      <TripCard />
      <NewForm />
    </>
  );
}

export default App;
