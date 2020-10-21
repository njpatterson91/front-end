import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { createPotluck } from "../store/atoms";
import { useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utilities/axiosWithAuth";
import { CreatePotluck as CSSGrid } from "../css/styledDiv";
import NavBar from "../components/NavBar";

export default function CreatePotluck(props) {
  const [create, setCreate] = useRecoilState(createPotluck);
  const id = window.localStorage.getItem("userID");
  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCreate({
      ...create,
      [name]: value,
    });
  };

  let history = useHistory();

  const submitPotluck = () => {
    axiosWithAuth()
      .post(`/users/${id}/potlucks`, create)
      .then((res) => {
        console.log(res.data);
        history.push(`/view/${res.data.newPotluck.id}`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <CSSGrid>
      <div class="grid-container">
        <NavBar />
        <div class="CreatePotluckHeader">
          <h3>Enter Potluck Name</h3>
          <input
            type="text"
            name="event_name"
            value={create.event_name}
            onChange={changeHandler}
          />
        </div>
        <div class="Date">
          <p>Date</p>
          <input
            type="date"
            name="event_date"
            value={create.event_date}
            onChange={changeHandler}
          />
        </div>
        <div class="Location">
          <p>Location</p>
          <input
            type="text"
            name="event_address"
            value={create.event_address}
            onChange={changeHandler}
          />
        </div>
        <div class="Time">
          <p>Time</p>
          <input
            type="time"
            name="event_time"
            value={create.event_time}
            onChange={changeHandler}
          />
        </div>
        <div class="NeededItemsHeader">
          <h3>Items Needed</h3>
        </div>
        <div class="ItemList"></div>
        <div class="AddItem">
          <button onClick={submitPotluck}>Submit</button>
        </div>
      </div>
    </CSSGrid>
  );
}
