import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripCard from "./TripCard";
import NewForm from "./NewForm";
import '../App.css';
const tripsURL = ("http://localhost:3000/trips")


function App() {


  const [tripsArray, setTripsArray] = useState([])

  useEffect(() => {

  fetch(tripsURL)
    .then(resp => resp.json())
    .then(data => setTripsArray(data))
  })

  function handleAdd(newTrip){
    console.log(newTrip)
  }

  return (
    <>
      <Header />
      <NavBar tripsArray={tripsArray} />
      <TripCard />
      <NewForm handleAdd={handleAdd}/>
    </>
  );
}

export default App;
