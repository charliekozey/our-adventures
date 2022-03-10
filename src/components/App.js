import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripPage from "./TripPage";
import '../App.css';

function App() {


  return (
    <>
      <Header />
      <NavBar />
      <TripCard />
      <NewForm />
    </>
    
  const [tripsArray, setTripsArray] = useState([]);
  const [displayedTrip, setDisplayedTrip] = useState({});
  const tripsURL = ("http://localhost:3000/trips");

  useEffect(() => {
    fetch(tripsURL)
      .then(resp => resp.json())
      .then(data => setTripsArray(data))
  }, [])

  // Render TripCard when NavCard is clicked
  function selectTrip(trip) {
    setDisplayedTrip(trip);
  }
  // Render TripCard when NavCard is clicked

  // Form Submit

  function addAdventure(newBlog) {
    console.log(newBlog)
    setTripsArray([...tripsArray,newBlog])
    fetch("http://localhost:3000/trips",{
      method: "POST",
      body: JSON.stringify(newBlog),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json));
 
  }

  // Form Submit



  return (
    <div>
    <Header />
    <NavBar 
      tripsArray={tripsArray}
      selectTrip={selectTrip} 
    />
    <TripPage 
      displayedTrip={displayedTrip}
      addAdventure={addAdventure}
    />
    </div>

  );
}

export default App;
