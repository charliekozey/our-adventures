import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripCard from "./TripCard";
import NewForm from "./NewForm";
import '../App.css';
const tripsURL = ("http://localhost:3000/trips")


function App() {

  fetch(tripsURL)
    .then(resp => resp.json())
    .then(data => (console.log(data)))

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
