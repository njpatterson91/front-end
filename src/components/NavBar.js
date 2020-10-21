import React from "react";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  return (
    <div class="NavBar">
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          history.push("/create");
        }}
      >
        Create
      </button>
      <button
        onClick={() => {
          history.push("/mypotlucks");
        }}
      >
        My Potlucks
      </button>
    </div>
  );
}
