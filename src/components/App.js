import React, { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripPage from "./TripPage";
import '../App.css';

function App() {
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
    // setTripsArray({...tripsArray, newBlog})
    // Uncomment after NAVBAR is fixed
    console.log(tripsArray)
  }

  // Form Submit



  return (
    // <div>
    //   <Header />
    //   <NavBar tripsArray={tripsArray} />
    //   <TripCard />
    //   <NewForm addAdventure={addAdventure} />
    // </div>

    <div>
    <Header />
    <NavBar 
      tripsArray={tripsArray}
      selectTrip={selectTrip} 
    />
    <TripPage 
      displayedTrip={displayedTrip}
    />
    </div>
  );
}

export default App;
