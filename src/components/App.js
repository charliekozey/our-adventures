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
  },[])


  // Form Submit
function addAdventure(newBlog){
  console.log(newBlog)
  // setTripsArray({...tripsArray, newBlog})
  // Uncomment after NAVBAR is fixed
  console.log(tripsArray)
}
  // Form Submit



  return (
    <>
      <Header />
      <NavBar tripsArray={tripsArray} />
      <TripCard />
      <NewForm addAdventure={addAdventure}/>
    </>
  );
}

export default App;
