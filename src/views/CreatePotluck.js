import { render } from "@testing-library/react";
import React from "react";
import "../css/createPotluck.css";

export default function CreatePotluck() {
  return (
    <div class="grid-container">
      <div class="NavBar"></div>
      <div class="CreatePotluckHeader">
        <h3>Organize a Potluck</h3>
      </div>
      <div class="Date">
        <p>Date</p>
      </div>
      <div class="Location">
        <p>Location</p>
      </div>
      <div class="Time">
        <p>Time</p>
      </div>
      <div class="NeededItemsHeader">
        <h3>Items Needed</h3>
      </div>
      <div class="ItemList"></div>
      <div class="AddItem"></div>
    </div>
  );
}
