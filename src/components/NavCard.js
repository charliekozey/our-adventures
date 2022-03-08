import React from "react";
const flatiron =("https://flatironschool.com/our-courses/")

function NavCard({ name }) {

let windowObjectReference;
let windowFeatures = "popup";

function openRequestedPopup() {
  windowObjectReference = window.open("https://flatironschool.com/our-courses/", windowFeatures);
}

  return (
    <div className="trips">
      <button onClick={openRequestedPopup}> {name} </button>
    </div>
  );
}

export default NavCard;
