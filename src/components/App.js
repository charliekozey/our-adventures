import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import TripCard from "./TripCard";
import NewForm from "./NewForm";
import '../App.css';


function App() {


  return (
    <>
      <Header />
      <NavBar tripsArray={tripsArray}/>
      <TripCard />
      <NewForm />
    </>
  );
}

export default App;
